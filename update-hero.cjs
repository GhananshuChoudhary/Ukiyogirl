const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Update Hero gradient overlays
content = content.replace(/from-\[#1B365D\]/g, 'from-beige-light');
content = content.replace(/via-\[#1B365D\]\/75/g, 'via-beige-light/75');
content = content.replace(/to-\[#1B365D\]\/50/g, 'to-beige-light/50');
content = content.replace(/from-white\/10 via-transparent to-white\/5/g, 'from-kashmir-deep/10 via-transparent to-kashmir-deep/5');

// Update text colors to use semantic theme
content = content.replace(/text-white/g, 'text-kashmir-deep');
content = content.replace(/text-\[#FDFBF7\]/g, 'text-kashmir-deep');
content = content.replace(/text-\[#D5E1ED\]/g, 'text-kashmir-deep/80');
content = content.replace(/bg-white\/10/g, 'bg-kashmir-mist/20');
content = content.replace(/border-white\/15/g, 'border-kashmir-mist/30');
content = content.replace(/border-white\/20/g, 'border-kashmir-mist/30');
content = content.replace(/bg-white\/5/g, 'bg-kashmir-mist/10');
content = content.replace(/border-white\/5/g, 'border-kashmir-mist/20');
content = content.replace(/shadow-black\/80/g, 'shadow-kashmir-deep/30');
content = content.replace(/bg-black\/60/g, 'bg-kashmir-deep/20');
content = content.replace(/shadow-black\/30/g, 'shadow-kashmir-deep/20');

// Fix buttons to ensure hover states make sense
content = content.replace(/hover:bg-white\/10/g, 'hover:bg-kashmir-mist/20');

fs.writeFileSync('src/components/Hero.tsx', content);
console.log("Updated Hero.tsx to be theme-aware");
