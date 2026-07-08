const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(/bg-white\/30 hover:bg-white\/60/g, 'bg-kashmir-deep/10 hover:bg-kashmir-deep/20');
content = content.replace(/bg-white\/40/g, 'bg-kashmir-deep/10');
content = content.replace(/bg-black\/40/g, 'bg-kashmir-deep/40'); // In Gallery.tsx

fs.writeFileSync('src/components/Navbar.tsx', content);

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace(/bg-black\/40/g, 'bg-kashmir-deep/40');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

console.log("Fixed glass effects in Navbar and Gallery");
