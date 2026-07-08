const fs = require('fs');
let content = fs.readFileSync('src/components/Journey.tsx', 'utf8');

content = content.replace(/bg-black\/10/g, 'bg-beige-light/10');
content = content.replace(/border-white\/10/g, 'border-beige-light/10');
// text-white is inside the featured destination image, so that one is fine.

fs.writeFileSync('src/components/Journey.tsx', content);
console.log("Fixed Journey.tsx");
