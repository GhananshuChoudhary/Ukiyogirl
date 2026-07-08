const fs = require('fs');
let content = fs.readFileSync('src/components/Readers.tsx', 'utf8');

// Universal Dark background
content = content.replace('bg-beige-light dark:bg-[#0E1A2F]', 'bg-[#0E1A2F]');

// Section Title
content = content.replace('text-kashmir-deep dark:text-[#FDFBF7]', 'text-[#FDFBF7]');

// Section subtitle
content = content.replace('text-kashmir-deep/70 dark:text-[#FDFBF7]/70', 'text-[#FDFBF7]/70');

// Card styles
content = content.replace('bg-white dark:bg-[#131F33] border border-kashmir-mist/30 flex', 'bg-[#131F33] border border-white/10 flex');

// Floating organic pattern
content = content.replace('bg-kashmir-light rounded-full filter blur-xl opacity-30', 'bg-kashmir-lake rounded-full filter blur-xl opacity-20');

// Icon badge
content = content.replace('bg-beige-light dark:bg-white/5 border border-kashmir-mist/10', 'bg-white/5 border border-white/10');

// Card title
content = content.replace('text-kashmir-deep dark:text-[#FDFBF7]', 'text-[#FDFBF7]');

// Card description
content = content.replace('text-kashmir-deep/85 dark:text-[#FDFBF7]/90', 'text-[#FDFBF7]/90');

// Explore Pages
content = content.replace('text-kashmir-lake/80 dark:text-[#D5E1ED]', 'text-[#D5E1ED]/80');

// Quote block
content = content.replace('bg-beige-warm/40 dark:bg-white/5 border border-golden-accent/10', 'bg-white/5 border border-golden-accent/20');
content = content.replace('text-kashmir-deep/90 dark:text-[#FDFBF7]', 'text-[#FDFBF7]');


fs.writeFileSync('src/components/Readers.tsx', content);
console.log("Fixed Readers.tsx to be always dark");
