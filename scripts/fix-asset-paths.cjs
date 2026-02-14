const fs = require('fs');
const path = require('path');

const srcRoot = path.join(__dirname, '..', 'src');
const assetPathUtil = 'assetPath';

function getRelativeImport(filePath) {
  const rel = path.relative(path.dirname(filePath), path.join(srcRoot, 'utils', 'assetPath'));
  return rel.replace(/\\/g, '/').replace(/\.ts$/, '');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relImport = getRelativeImport(filePath);
  const importLine = `import { ${assetPathUtil} } from '${relImport}';\n`;

  // Replace src="/images/...") and src="/logos/...")
  content = content.replace(/src="(\/images\/[^"]+)"/g, (_, p) => `src={${assetPathUtil}('${p}')}`);
  content = content.replace(/src="(\/logos\/[^"]+)"/g, (_, p) => `src={${assetPathUtil}('${p}')}`);
  content = content.replace(/src='(\/images\/[^']+)'/g, (_, p) => `src={${assetPathUtil}('${p}')}`);
  content = content.replace(/src='(\/logos\/[^']+)'/g, (_, p) => `src={${assetPathUtil}('${p}')}`);

  if (!content.includes(assetPathUtil)) return;

  // Add import if not already present
  if (!content.includes("from '" + relImport + "'") && !content.includes('from "' + relImport + '"')) {
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^import\s+.+\s+from\s+['"]/.test(lines[i])) lastImportIdx = i;
    }
    if (lastImportIdx >= 0) {
      lines.splice(lastImportIdx + 1, 0, importLine.trim());
      content = lines.join('\n');
    }
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated:', filePath);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules') walk(full);
    else if (e.name.endsWith('.tsx')) processFile(full);
  }
}

walk(srcRoot);
