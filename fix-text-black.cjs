const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

content = content.replace(/text-gray-700/g, 'text-black');
content = content.replace(/text-gray-800/g, 'text-black');
content = content.replace(/text-gray-600/g, 'text-black');
content = content.replace(/text-kashmir-deep\/60/g, 'text-black dark:text-[#FDFBF7]/60');
content = content.replace(/text-kashmir-deep\/70/g, 'text-black dark:text-[#FDFBF7]/70');
content = content.replace(/text-kashmir-deep\/80/g, 'text-black dark:text-[#FDFBF7]/80');
content = content.replace(/text-kashmir-deep\/50/g, 'text-black dark:text-[#FDFBF7]/50');
content = content.replace(/text-kashmir-deep\/90/g, 'text-black dark:text-[#FDFBF7]/90');
content = content.replace(/text-kashmir-deep /g, 'text-black dark:text-[#FDFBF7] ');
content = content.replace(/text-kashmir-deep"/g, 'text-black dark:text-[#FDFBF7]"');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Fixed text to black");
