const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix imports from ../../../public to ../../public
  content = content.replace(/\.\.\/\.\.\/\.\.\/public/g, '../../public');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed imports in', file);
});
