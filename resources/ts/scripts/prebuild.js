const fs = require('fs');
const path = require('path');

function hotFixes () {
  const schemaFilePath = path.resolve('./src/Schema.ts');
  const schema = fs.readFileSync(schemaFilePath)
    .toString()
    .replace('dependencies?: { [key: string]: Set };', 'dependencies?: { [key: string]: Set<any> };')

  fs.writeFileSync(schemaFilePath, schema)
}

function buildIndex () {
  const files = fs.readdirSync('./src');
  
  const indexFileContent = files
    .map(f => f.split('.').at(0))
    .filter(f => f !== 'index' && f !== 'models')
    .map(f => `export * from './${f}';`)
    .join('\n');

  fs.writeFileSync(path.resolve('./src/index.ts'), indexFileContent);
}


function main () {
  hotFixes();
  buildIndex();
}
main();