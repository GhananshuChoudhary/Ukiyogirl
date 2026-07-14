const fs = require('fs');
let content = fs.readFileSync('src/components/AboutAuthor.tsx', 'utf8');

// Section wrapper
content = content.replace(/bg-beige-warm\/40/, "bg-[#0E1A2F] text-[#FDFBF7]");

// Background blur elements
content = content.replace(/bg-golden-accent\/5/, "bg-golden-accent/10");
content = content.replace(/bg-kashmir-light\/20/, "bg-white/5");

// Text colors
content = content.replace(/text-kashmir-deep/g, "text-white");
content = content.replace(/text-kashmir-lake/g, "text-golden-accent/80");

// Specific text alphas
content = content.replace(/text-white\/80/g, "text-[#D5E1ED]");
content = content.replace(/text-white\/70/g, "text-[#D5E1ED]/80");
content = content.replace(/text-white\/50/g, "text-[#D5E1ED]/50");

// Borders
content = content.replace(/border-golden-accent\/15/g, "border-white/10");
content = content.replace(/border-white\/5/g, "border-white/10");

// Backgrounds
content = content.replace(/bg-beige-light\/40/g, "bg-[#142642] border border-white/10");
content = content.replace(/bg-beige-light\/60/g, "bg-white/5 border border-white/5");
content = content.replace(/bg-kashmir-light\/60/g, "bg-white/5 border border-white/10");

// We might have changed text-kashmir-deep/50 which became text-white/50, which became text-[#D5E1ED]/50
// Let's just do a manual replace

fs.writeFileSync('src/components/AboutAuthor.tsx', content);
console.log("Fixed AboutAuthor bg");
