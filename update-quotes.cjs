const fs = require('fs');
let content = fs.readFileSync('src/components/QuoteCarousel.tsx', 'utf8');

content = content.replace(/bg-\[#0E1A2F\]/g, 'bg-beige-warm');
content = content.replace(/text-\[#FDFBF7\]/g, 'text-kashmir-deep');
content = content.replace(/bg-white\/10/g, 'bg-kashmir-mist/20');
content = content.replace(/border-white\/10/g, 'border-kashmir-mist/30');
content = content.replace(/border-white\/20/g, 'border-kashmir-mist/40');
content = content.replace(/bg-white\/5/g, 'bg-kashmir-mist/10');
content = content.replace(/border-white\/5/g, 'border-kashmir-mist/20');
content = content.replace(/text-white\/20/g, 'text-kashmir-deep/30');
content = content.replace(/bg-white\/20/g, 'bg-kashmir-mist/40');
content = content.replace(/hover:bg-white\/40/g, 'hover:bg-kashmir-lake/60');
content = content.replace(/hover:bg-white\/10/g, 'hover:bg-kashmir-mist/20');

fs.writeFileSync('src/components/QuoteCarousel.tsx', content);
console.log("Updated QuoteCarousel.tsx to be theme-aware");
