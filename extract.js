const fs = require('fs');
const path = require('path');

const dartFilePath = path.join(__dirname, '../lib/ui/data/projects.dart');
const dartCode = fs.readFileSync(dartFilePath, 'utf8');

function parseDartProjects(code) {
    const listMatch = code.match(/final List<ProjectModel> projects = \[\s*([\s\S]*?)\s*\];/);
    if (!listMatch) return [];

    let listContent = listMatch[1];
    let parts = listContent.split('ProjectModel(');
    let results = [];

    for (let i = 1; i < parts.length; i++) {
        let block = parts[i];
        if (!block.includes('title:')) continue;

        const extractString = (key) => {
            const regex = new RegExp(key + ':\\s*(?:\'|")([\\s\\S]*?)(?:\'|"),');
            const match = block.match(regex);
            return match ? match[1] : null;
        };

        const extractExpr = (key) => {
            const regex = new RegExp(key + ':\\s*([^,\\n]+),');
            const match = block.match(regex);
            if (!match) return null;
            const raw = match[1].trim();
            if (raw === 'ProjectModel.comingSoon' || raw === 'comingSoon') {
                return 'coming_soon';
            }
            const strMatch = raw.match(/^(?:'|")([\s\S]*)(?:'|")$/);
            if (strMatch) return strMatch[1];
            if (raw === 'null') return null;
            return raw.replace(/^['"]|['"]$/g, '');
        };

        const extractList = (key) => {
            const regex = new RegExp(key + ':\\s*\\[([\\s\\S]*?)\\],');
            const match = block.match(regex);
            if (!match) return [];

            let listStr = match[1].replace(/\/\/.*$/gm, '');
            const strRegex = /(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g;
            const items = listStr.match(strRegex);
            if (!items) return [];

            return items.map(s => s.substring(1, s.length - 1).replace(/\\'/g, "'").replace(/\\"/g, '"'));
        };

        const extractBool = (key) => {
            const regex = new RegExp(key + ':\\s*(true|false)');
            const match = block.match(regex);
            return match ? match[1] === 'true' : false;
        };

        let title = extractString('title');
        if (!title) continue;

        let shortDescription = extractString('shortDescription') || '';
        let fullDescription = extractString('fullDescription') || '';
        let category = extractString('category') || '';
        let tech = extractList('tech');
        let features = extractList('features');
        let android = extractExpr('android');
        let ios = extractExpr('ios');
        let website = extractExpr('website');
        let responsibilities = extractString('responsibilities');
        let screenshots = extractList('screenshots');
        let isFeatured = extractBool('isFeatured');
        let isNew = extractBool('isNew');

        let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

        let tags = [];
        if (category) tags.push(category);
        if (tech.length > 0) tags.push(tech[0]);
        if (tech.length > 1) tags.push(tech[1]);

        results.push({
            id,
            title,
            description: shortDescription,
            fullDescription,
            tags,
            tech,
            features,
            android,
            ios,
            website,
            responsibilities,
            screenshotsJson: screenshots.map(s => '../' + s),
            screenshotsJs: screenshots.map(s =>
                s.startsWith('assets/') ? s : 'assets/' + s.replace(/^(\.\.\/)?assets\//, '')
            ),
            isFeatured,
            isNew,
        });
    }

    return results;
}

const projects = parseDartProjects(dartCode);

const jsonProjects = projects.map(({ screenshotsJs, screenshotsJson, ...rest }) => ({
    ...rest,
    screenshots: screenshotsJson,
}));
fs.writeFileSync(path.join(__dirname, 'projects_data.json'), JSON.stringify(jsonProjects, null, 4));

const jsProjects = projects.map(({ screenshotsJson, screenshotsJs, ...rest }) => ({
    ...rest,
    screenshots: screenshotsJs,
}));

let githubBlock = '';
try {
    const existing = fs.readFileSync(path.join(__dirname, 'projects_data.js'), 'utf8');
    const ghMatch = existing.match(/const githubRepositories\s*=\s*(\[[\s\S]*?\]);?\s*$/);
    if (ghMatch) githubBlock = 'const githubRepositories = ' + ghMatch[1] + ';\n';
} catch (_) {}

fs.writeFileSync(
    path.join(__dirname, 'projects_data.js'),
    'const portfolioProjects = ' + JSON.stringify(jsProjects) + ';\n' + githubBlock
);

console.log('Extracted ' + projects.length + ' projects into projects_data.json and projects_data.js');
