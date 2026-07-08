const fs = require('fs');
let content = fs.readFileSync('src/components/Readers.tsx', 'utf8');

content = content.replace(/text-\[#FDFBF7\]/g, 'text-kashmir-deep');

fs.writeFileSync('src/components/Readers.tsx', content);
