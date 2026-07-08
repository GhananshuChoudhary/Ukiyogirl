const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace(/bg-\[#1B365D\]/g, 'bg-kashmir-deep');
content = content.replace(/text-\[#FDFBF7\]/g, 'text-beige-light');
content = content.replace(/text-white/g, 'text-beige-light');
content = content.replace(/text-\[#D5E1ED\]/g, 'text-beige-light/90');
content = content.replace(/border-white\/5/g, 'border-beige-light/20');
content = content.replace(/bg-white\/5/g, 'bg-beige-light/10');

fs.writeFileSync('src/components/Footer.tsx', content);
console.log("Updated Footer.tsx to be theme-aware");
