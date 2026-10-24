const fs = require('fs');
const path = require('path');

const mainPath = path.join(__dirname, 'main.js');
let mainCode = fs.readFileSync(mainPath, 'utf8');

const projectsPath = path.join(__dirname, 'projects_data.json');
const projectsJson = fs.readFileSync(projectsPath, 'utf8');

// Replace portfolioProjects array
let updatedCode = mainCode.replace(/const portfolioProjects = \[\s*\{[\s\S]*?\}\s*\];/m, 'const portfolioProjects = ' + projectsJson + ';');

fs.writeFileSync(mainPath, updatedCode);
console.log('Injected projects successfully into main.js');
