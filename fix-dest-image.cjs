const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(/'https:\/\/images\.unsplash\.com\/photo-1620023023023-9366dbf20387\?auto=format&fit=crop&q=80&w=800'/g, 'IMAGES.lidderRiver');

fs.writeFileSync('src/data.ts', content);
console.log("Fixed Jammu image");
