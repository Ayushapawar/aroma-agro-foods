const fs = require('fs');
const path = require('path');

const pages = ['about', 'products', 'quality', 'faq', 'contact', 'enquiry'];
const baseDir = path.join(process.cwd(), 'src', 'app');

pages.forEach(page => {
  const filePath = path.join(baseDir, page, 'page.jsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove imports
  content = content.replace(/import Header from [^\n]+;\n/g, '');
  content = content.replace(/import Footer from [^\n]+;\n/g, '');
  content = content.replace(/import WhatsApp from [^\n]+;\n/g, '');
  
  // Remove metadata exports
  content = content.replace(/export const metadata = {[\s\S]*?};\n/g, '');
  
  // Remove skip link
  content = content.replace(/<a href="#main-content" className="skip-link">\s*Skip to main content\s*<\/a>/g, '');
  
  // Replace <main> with <section>
  content = content.replace(/<main id="main-content" tabIndex=\{-1\}>/g, '<section id="' + page + '">');
  content = content.replace(/<\/main>/g, '</section>');
  
  // Remove <Header />, <Footer />, <WhatsApp />
  content = content.replace(/<Header \/>/g, '');
  content = content.replace(/<Footer \/>/g, '');
  content = content.replace(/<WhatsApp \/>/g, '');
  
  // Remove wrapping Fragments if they exist around the <section> now
  content = content.replace(/<>\s*<section id="/g, '<section id="');
  content = content.replace(/<\/section>\s*<\/>/g, '</section>');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', page);
});
