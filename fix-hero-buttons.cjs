const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldBuyButton = `className="px-6 py-3 rounded-lg bg-white text-kashmir-deep hover:bg-beige-light font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/30 group"`;
const newBuyButton = `className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"`;

content = content.replace(oldBuyButton, newBuyButton);

fs.writeFileSync('src/components/Hero.tsx', content);
console.log("Fixed Hero buttons");
