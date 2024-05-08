const fs = require('fs');
const path = require('path');

function hotFixes () {
  const schemaFilePath = path.resolve('./src/Schema.ts');
  const schema = fs.readFileSync(schemaFilePath)
    .toString()
    .replace('dependencies?: { [key: string]: Set };', 'dependencies?: { [key: string]: Array<any> };')
    .replace('@type {{ [key: string]: Set; }}', '@type {{ [key: string]: Array<any>; }}');

  fs.writeFileSync(schemaFilePath, schema)
  
  const files = fs.readdirSync('./src');

  for (const file of files) {
    const filePath = path.resolve('./src', file);
    let fileContent = fs.readFileSync(filePath).toString();
    
    fs.writeFileSync(
      filePath,
      fileContent.replace(/Set</g, 'Array<') // Some downstream dependencies can't handle Sets
        .replace(/: object/g, ': { [key: string]: any }')  // This is a case of the generators author not following proper typing; should probably submit a PR for this one.
        .replace(/{object}/g, ': {{ [key: string]: any }}')
    );
  }


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