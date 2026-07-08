const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

content = content.replace('left-4 md:left-1/2', 'left-[17px] md:left-1/2');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Fixed timeline line alignment");
