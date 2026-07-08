const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

// Change golden-accent description text to a darker color in light mode
content = content.replace(
    'text-golden-accent tracking-wide',
    'text-kashmir-blue dark:text-golden-accent tracking-wide'
);

// To ensure visibility of detail text, use text-kashmir-deep/80
content = content.replace(
    'text-kashmir-deep/70 dark:text-[#FDFBF7]/70 font-light leading-relaxed mt-2.5 inline-block text-left',
    'text-kashmir-deep/80 dark:text-[#FDFBF7]/80 font-light leading-relaxed mt-2.5 inline-block text-left'
);

fs.writeFileSync('src/components/AboutBook.tsx', content);
console.log("Fixed timeline visibility in AboutBook.tsx");
