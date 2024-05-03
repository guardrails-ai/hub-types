import contentTypeParser from 'content-type';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { bundle }  from '@hyperjump/json-schema/bundle';
import { validate as validateJsonSchema }  from '@hyperjump/json-schema/draft-2020-12';
import { validate as validateOpenAPISpec } from '@hyperjump/json-schema/openapi-3-1';
import { addMediaTypePlugin } from '@hyperjump/browser';
import { buildSchemaDocument } from '@hyperjump/json-schema/experimental';
import { bundleOpenApiSpec } from './openapi-spec-bundler.js';
import { bundleJsonSchema } from './json-schema-bundler.js';

async function bundleSchemas () {
  addMediaTypePlugin('text/plain', {
    parse: async (response) => {
      const contentType = contentTypeParser.parse(response.headers.get('content-type') ?? '');
      const contextDialectId = contentType.parameters.schema ?? contentType.parameters.profile;
      
      const responseBody = JSON.parse(await response.text());
      return buildSchemaDocument(responseBody, response.url, contextDialectId);
    }
  });

  // This works for the Typescript generator out of the box
  // return bundle(manifestSchema.$id);

  // We have to use these customizations for the Python generator
  return bundleJsonSchema('https://raw.githubusercontent.com/guardrails-ai/interfaces/hub-integration/schemas/hub/manifest.json')
}

async function validateSchema (schema) {
  const output = await validateJsonSchema('https://json-schema.org/draft/2020-12/schema', schema, 'DETAILED');
  if (output.valid) {
    console.info('JSON Schema - Ok');
  } else {
    console.error(`The JSON schema provided is not compliant with JSON schema Draft 2020-12!`);
    console.info('Validation Output: \n', JSON.stringify(output, null, 2));
    process.exit(1);
  }
}

async function validateApiSpec (openApiSpec) {
  const output = await validateOpenAPISpec('https://spec.openapis.org/oas/3.1/schema-base', openApiSpec, 'DETAILED');;
  if (output.valid) {
    console.info('OpenAPI Specificaiton - Ok');
  } else {
    console.error(`The OpenAPI Specificaiton provided is not compliant with OpenAPI Specification 3.1!`);
    console.info('Validation Output: \n', JSON.stringify(output, null, 2));
    process.exit(1);
  }
}

async function main () {
  mkdirSync('./build', { recursive: true });
  const bundledSchema = await bundleSchemas();
  await validateSchema(bundledSchema);

  // OpenAPI doesn't like this keyword for some reason.
  delete bundledSchema.$schema;

  writeFileSync(resolve('./build/json-schema.json'), JSON.stringify(bundledSchema, null, 2));

  const openApiSpec = {    
    'openapi': '3.1.0',
    'info': {
        'title': 'Guardrails Hub Types',
        'version': '0.0.0',
        'description': 'Data structures used in the Guardrails Hub'
    },
    'paths': {},
    'components': {
        'schemas': {
          'Manifest': bundledSchema
        }
    }
  };

  // The Typescript generator could use the above api spec directly,
  // but the Python generator needs to use some older syntax and more direct references.
  const bundledOpenApiSpec = bundleOpenApiSpec(openApiSpec)

  writeFileSync(resolve('./build/openapi-spec.json'), JSON.stringify(bundledOpenApiSpec, null, 2), {  });

  await validateApiSpec(openApiSpec);
}
main();