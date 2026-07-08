const fs = require('fs');

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(/bg-\[#1B365D\]/g, 'bg-beige-light'); // The background behind the image should just be the theme bg
fs.writeFileSync('src/components/Hero.tsx', hero);

let quotes = fs.readFileSync('src/components/QuoteCarousel.tsx', 'utf8');
quotes = quotes.replace(/bg-\[#142642\]/g, 'bg-beige-light/30 border-kashmir-mist/40 backdrop-blur-md');
quotes = quotes.replace(/text-\[#D5E1ED\]/g, 'text-kashmir-deep/90');
fs.writeFileSync('src/components/QuoteCarousel.tsx', quotes);
console.log("Fixed hex colors in Hero and QuoteCarousel");
