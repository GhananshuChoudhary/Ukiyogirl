const fs = require('fs');
let content = fs.readFileSync('src/components/Gallery.tsx', 'utf8');

// Selected category button
content = content.replace(/bg-\[#1B365D\] text-white/g, 'bg-kashmir-deep text-beige-light');

// Image hover overlay
content = content.replace(/bg-\[#1B365D\]\/75/g, 'bg-kashmir-deep/80');
content = content.replace(/text-white/g, 'text-beige-light');
content = content.replace(/bg-white\/10/g, 'bg-beige-light/10');
content = content.replace(/bg-white\/5/g, 'bg-beige-light/5');
content = content.replace(/border-white\/10/g, 'border-beige-light/10');
content = content.replace(/border-white\/20/g, 'border-beige-light/20');

// Modal overlay
content = content.replace(/bg-\[#1B365D\]\/95/g, 'bg-beige-light/95');

// Light text inside modal
content = content.replace(/text-\[#FDFBF7\]/g, 'text-kashmir-deep');

fs.writeFileSync('src/components/Gallery.tsx', content);
console.log("Updated Gallery.tsx to be theme-aware");
