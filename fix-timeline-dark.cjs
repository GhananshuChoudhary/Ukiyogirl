const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

content = content.replace('bg-kashmir-light text-kashmir-lake font-mono', 'bg-kashmir-light dark:bg-white/10 text-kashmir-lake dark:text-golden-accent font-mono');
content = content.replace('border-beige-light shadow-md transform md:-translate-x-1/2', 'border-beige-light dark:border-[#0E1A2F] shadow-md transform md:-translate-x-1/2');

// We have h4 text-kashmir-deep and p text-kashmir-deep/70 to replace
content = content.replace(/text-kashmir-deep"/g, 'text-kashmir-deep dark:text-[#FDFBF7]"');
content = content.replace(/text-kashmir-deep\/70 font-light/g, 'text-kashmir-deep/70 dark:text-[#FDFBF7]/70 font-light');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Fixed timeline dark");
