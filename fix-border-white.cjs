const fs = require('fs');
let content = fs.readFileSync('src/components/AboutAuthor.tsx', 'utf8');

content = content.replace(/border-white\/5/g, 'border-beige-light/10');

fs.writeFileSync('src/components/AboutAuthor.tsx', content);
