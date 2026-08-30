const fs = require('fs');
const path = require('path');
const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  const replacements = [
    [/href="\/about"/g, 'href="#about"'],
    [/href="\/products"/g, 'href="#products"'],
    [/href="\/quality"/g, 'href="#quality"'],
    [/href="\/faq"/g, 'href="#faq"'],
    [/href="\/contact"/g, 'href="#contact"'],
    [/href="\/enquiry"/g, 'href="#enquiry"'],
    // Also handle Link tags if they have href={'...'} but they probably use quotes.
  ];
  
  replacements.forEach(([regex, repl]) => {
    if (regex.test(content)) {
      content = content.replace(regex, repl);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated links in', file);
  }
});
