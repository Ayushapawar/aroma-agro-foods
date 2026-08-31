const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('C:\\Users\\Ayusha\\.gemini\\antigravity\\scratch\\aroma-agro-foods\\src');
files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    // The sequence is \uFFFD?" which is ?"
    content = content.replace(/\uFFFD\?"/g, '—');
    fs.writeFileSync(file, content, 'utf8');
  }
});
