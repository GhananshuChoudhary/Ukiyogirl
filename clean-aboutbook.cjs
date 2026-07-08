const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

content = content.replace(/text-black dark:text-\[#FDFBF7\]\/([0-9]+)/g, 'text-kashmir-deep/$1');
content = content.replace(/text-black dark:text-\[#FDFBF7\]/g, 'text-kashmir-deep');
content = content.replace(/text-black/g, 'text-kashmir-deep');
content = content.replace(/dark:border-\[#0E1A2F\]/g, '');
content = content.replace(/dark:bg-white\/10/g, '');
content = content.replace(/dark:text-golden-accent/g, '');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Cleaned AboutBook.tsx");
