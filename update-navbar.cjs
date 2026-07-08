const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// The unscrolled text was text-[#FDFBF7], now it should be text-kashmir-deep
content = content.replace(/text-\[#FDFBF7\] group-hover:text-white/g, 'text-kashmir-deep group-hover:text-kashmir-lake');
content = content.replace(/text-\[#FDFBF7\]\/85 hover:text-white/g, 'text-kashmir-deep/80 hover:text-kashmir-lake');
content = content.replace(/text-\[#FDFBF7\]/g, 'text-kashmir-deep');
content = content.replace(/hover:text-white/g, 'hover:text-kashmir-lake');

// Update border/bg for dark mode toggles when unscrolled (it used white/20)
content = content.replace(/border-white\/20 hover:border-white\/40 bg-white\/5 hover:bg-white\/10/g, 'border-kashmir-deep/10 hover:border-kashmir-deep/20 bg-kashmir-mist/10 hover:bg-kashmir-mist/20');
content = content.replace(/border-white\/20 bg-white\/10/g, 'border-kashmir-deep/10 bg-kashmir-mist/20');

// Mobile menu overlay uses hardcoded values
content = content.replace(/glass/g, 'glass-light'); // wait glass is dark, glass-light is theme-aware
content = content.replace(/text-\[#1B365D\]/g, 'text-beige-light');
content = content.replace(/bg-\[#FDFBF7\]/g, 'bg-kashmir-deep');
content = content.replace(/hover:bg-\[#F8F5EE\]/g, 'hover:bg-kashmir-lake');
content = content.replace(/border-white\/5/g, 'border-kashmir-mist/20');

fs.writeFileSync('src/components/Navbar.tsx', content);
console.log("Updated Navbar.tsx to be theme-aware");
