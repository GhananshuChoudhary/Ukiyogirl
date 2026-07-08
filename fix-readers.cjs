const fs = require('fs');
let content = fs.readFileSync('src/components/Readers.tsx', 'utf8');

content = content.replace('bg-beige-light relative', 'bg-beige-light dark:bg-[#0E1A2F] relative');
content = content.replace('text-kashmir-deep">', 'text-kashmir-deep dark:text-[#FDFBF7]">');
content = content.replace('text-kashmir-deep/70 font-light max-w-lg', 'text-kashmir-deep/70 dark:text-[#FDFBF7]/70 font-light max-w-lg');
content = content.replace('text-kashmir-deep">', 'text-kashmir-deep dark:text-[#FDFBF7]">');
content = content.replace('text-kashmir-deep">', 'text-kashmir-deep dark:text-[#FDFBF7]">');
content = content.replace('text-kashmir-deep">', 'text-kashmir-deep dark:text-[#FDFBF7]">');

fs.writeFileSync('src/components/Readers.tsx', content);
console.log("Fixed Readers.tsx");
