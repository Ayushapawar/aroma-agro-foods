const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/components', (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace import Link from "next/link";
    content = content.replace(/import Link from "next\/link";?\r?\n?/g, '');
    
    // Replace import Image from "next/image";
    content = content.replace(/import Image from "next\/image";?\r?\n?/g, '');
    
    // Replace <Link href="..."> with <a href="...">
    content = content.replace(/<Link\b([^>]*)>/g, '<a$1>');
    content = content.replace(/<\/Link>/g, '</a>');
    
    // Replace <Image src={X} ... /> with <img src={X} ... />
    content = content.replace(/<Image\b([^>]*)>/g, '<img$1>');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
