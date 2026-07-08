const fs = require('fs');
let content = fs.readFileSync('src/components/Tribute.tsx', 'utf8');

content = content.replace(/bg-\[#1B365D\]/g, 'bg-kashmir-deep');
content = content.replace(/text-\[#FDFBF7\]/g, 'text-beige-light');
content = content.replace(/bg-white\/5/g, 'bg-beige-light/10');
content = content.replace(/border-white\/10/g, 'border-beige-light/20');
content = content.replace(/via-white\/5/g, 'via-beige-light/10');
content = content.replace(/bg-white\/10/g, 'bg-beige-light/15');
content = content.replace(/glass/g, 'glass-light');
content = content.replace(/bg-black\/20/g, 'bg-kashmir-deep/20');

fs.writeFileSync('src/components/Tribute.tsx', content);
console.log("Updated Tribute.tsx to be theme-aware");
