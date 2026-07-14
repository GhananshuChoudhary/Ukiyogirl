const fs = require('fs');
let content = fs.readFileSync('src/components/AboutAuthor.tsx', 'utf8');

content = content.replace(/border border-white\/10 bg-\[#142642\] border border-white\/10/, "border-white/10 bg-[#142642]");
content = content.replace(/border border-kashmir-lake\/15 bg-white\/5 border border-white\/10/, "border-white/10 bg-white/5");

fs.writeFileSync('src/components/AboutAuthor.tsx', content);
console.log("Cleaned AboutAuthor bg");
