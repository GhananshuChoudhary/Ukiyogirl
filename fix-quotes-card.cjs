const fs = require('fs');
let content = fs.readFileSync('src/components/QuoteCarousel.tsx', 'utf8');

content = content.replace(/bg-beige-light\/30 border-kashmir-mist\/40 backdrop-blur-md/g, 'bg-beige-light shadow-md border-kashmir-mist/30');

fs.writeFileSync('src/components/QuoteCarousel.tsx', content);
