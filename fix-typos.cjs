const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(/glass-light-light/g, 'glass-light');
fs.writeFileSync('src/components/Navbar.tsx', content);
console.log("Fixed typos in Navbar.tsx");
