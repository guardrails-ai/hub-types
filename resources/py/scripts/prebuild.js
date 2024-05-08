import fs from 'fs';
import path from 'path';

function buildReadme () {
  const files = fs.readdirSync('./docs');
  const readme = `# Guardrails Hub Types

Internal data structures for the Guardrails Hub.

## Installation
\`\`\`sh
pip install guardrails-hub-types
\`\`\`

## Development
\`\`\`sh
git clone https://github.com/guardrails-ai/hub-types.git

cd hub-types

npm ci

npm run openapi-gen

bash ./py-build.sh
\`\`\`

## Documentation For Models

${
  files
    .map(f => f.split('.').at(0))
    .map(f => ` - [${f}](https://github.com/guardrails-ai/hub-types/tree/main/resources/py/docs/${f}.md);`)
    .join('\n')
}
  `;

  fs.writeFileSync(path.resolve('./README.md'), readme);
}

function updateDependencies () {
  const pyProjectToml = fs.readFileSync(
    path.resolve('./pyproject.toml.template')
  ).toString();
  const requirementsTxt = fs.readFileSync(
    path.resolve('./requirements.txt')
  ).toString();
  const requirements = requirementsTxt.split('\n');

  const dependencies = `dependencies = [
${
  requirements
    .map(r => `"${r.trim().split('\s').join('')}"`)
    .join('\n')
}
]`;

  pyProjectToml.replace('dependencies = []', dependencies)

  

  fs.writeFileSync(
    path.resolve('./pyproject.toml'),
    pyProjectToml
  );
}

function buildSetupPy () {
  const requirementsTxt = fs.readFileSync(
    path.resolve('./requirements.txt')
  ).toString();
  const requirements = requirementsTxt
    .split('\n')
    .map(r => r.trim())
    .filter(r => r.length > 0)
    .map(r => `"${r}"`)
    .join(', ');
  const setupPy = `import pathlib

from setuptools import find_packages, setup

here = pathlib.Path(__file__).parent.resolve()
long_description = (here / "README.md").read_text(encoding="utf-8")

setup(
    name="guardrails-hub-types",
    version="0.0.0",
    description="Guardrails Hub Types",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=find_packages(),
    python_requires=">=3.8, <4",
    install_requires=[${requirements}],
    package_data={"guardrails_api_client": ["py.typed"]},
)
  `;

  fs.writeFileSync(
    path.resolve('./setup.py'),
    setupPy
  )
}

function exportAll () {
  const initPy = fs.readFileSync('./guardrails_hub_types/__init__.py').toString();

  const importLines = initPy
    .split('\n')
    .filter(l => l.startsWith('from') && l.includes('import'));
  
  const exportables = importLines
    .map(l => l.split('import').at(1)?.trim())
    .filter(l => l && l?.length > 0);

  const updatedInitPy = `${initPy}\n\n__all__ = [\n${
    exportables
    .map(e => `\t"${e}",`)
    .join('\n')
  }\n]`;

  fs.writeFileSync('./guardrails_hub_types/__init__.py', updatedInitPy)
}

function main () {
  buildReadme();
  updateDependencies();
  buildSetupPy();
  exportAll();
}
main();