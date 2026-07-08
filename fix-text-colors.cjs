const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

// Beyond the Headlines title
content = content.replace('text-kashmir-deep/90 leading-tight', 'text-black dark:text-[#FDFBF7]/90 leading-tight');

// Paragraphs under Beyond the Headlines
content = content.replace('text-kashmir-deep/80 font-light leading-relaxed', 'text-gray-800 dark:text-[#FDFBF7]/80 font-light leading-relaxed');
content = content.replace(/text-kashmir-deep\/70 dark:text-\[#FDFBF7\]\/70/g, 'text-gray-700 dark:text-[#FDFBF7]/70');

// Creative Evolution Timeline section header
content = content.replace('text-kashmir-deep tracking-wide flex items-center justify-center gap-2', 'text-black dark:text-[#FDFBF7] tracking-wide flex items-center justify-center gap-2');
content = content.replace('text-kashmir-deep/60 mt-2 font-mono', 'text-gray-600 dark:text-[#FDFBF7]/60 mt-2 font-mono');

// Timeline Events Map
content = content.replace(/text-kashmir-deep dark:text-\[#FDFBF7\]/g, 'text-black dark:text-[#FDFBF7]');
content = content.replace(/text-kashmir-deep\/80 dark:text-\[#FDFBF7\]\/80/g, 'text-gray-700 dark:text-[#FDFBF7]/80');
content = content.replace(/text-kashmir-blue dark:text-golden-accent/g, 'text-gray-800 dark:text-golden-accent');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Fixed text colors in AboutBook.tsx");
