const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

content = content.replace('{/* Center Line for desktop */}\n                  <div className="hidden md:block absolute left-1/2 top-0 bottom-[-48px] w-px bg-kashmir-mist/30 transform -translate-x-1/2" />', '');

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Removed duplicate center line");
