const fs = require('fs');
const path = require('path');

function buildReadme () {
  const files = fs.readdirSync('./docs');
  const readme = `# Guardrails Hub Types

  Internal data structures for the Guardrails Hub.
  
  ## Documentation For Models

  ${
    files
      .map(f => f.split('.').at(0))
      .map(f => ` - [${f}](docs/${f}.md)';`)
      .join('\n')
  }
  `;

  fs.writeFileSync(path.resolve('./README.md'), readme);
}

function updateDependencies () {
  const pyProjectToml = fs.readFileSync(path.resolve('./pyproject.toml.template'));
  const requirementsTxt = fs.readFileSync(path.resolve('./requirements.txt'));
  const requirements = requirementsTxt.split('\n');

  const dependencies = `dependencies = [
${
  requirements
    .map(r => `"${r.trim().split('\s').join('')}"`)
    .join('\n')
}
]`;

  pyProjectToml.replace('dependencies = []', dependencies)

  

  fs.writeFileSync(path.resolve('./pyproject.toml'), pyProjectToml);
}


function main () {
  buildReadme();
  updateDependencies();
}
main();