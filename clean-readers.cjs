const fs = require('fs');
let content = fs.readFileSync('src/components/Readers.tsx', 'utf8');

// Use semantic classes, removing `dark:` overrides
content = content.replace(/dark:bg-\[#[0-9A-Fa-f]+\]/g, '');
content = content.replace(/dark:text-kashmir-deep/g, '');
content = content.replace(/dark:text-\[#[0-9A-Fa-f]+\]\/([0-9]+)/g, '');
content = content.replace(/dark:text-\[#[0-9A-Fa-f]+\]/g, '');
content = content.replace(/dark:border-\[#[0-9A-Fa-f]+\]/g, '');
content = content.replace(/dark:border-white\/10/g, '');
content = content.replace(/dark:bg-white\/[0-9]+/g, '');
content = content.replace(/bg-white\b/g, 'bg-beige-light');
content = content.replace(/bg-white\/50/g, 'bg-kashmir-mist/20');
content = content.replace(/dark:bg-kashmir-lake/g, '');
content = content.replace(/dark:opacity-20/g, '');
content = content.replace(/dark:border-golden-accent\/20/g, '');
content = content.replace(/text-kashmir-deep  /g, 'text-kashmir-deep ');

fs.writeFileSync('src/components/Readers.tsx', content);
console.log("Cleaned Readers.tsx");
