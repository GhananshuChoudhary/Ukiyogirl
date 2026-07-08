const fs = require('fs');
let content = fs.readFileSync('src/components/Readers.tsx', 'utf8');

// Section Background
content = content.replace('bg-[#0E1A2F] relative overflow-hidden', 'bg-beige-warm dark:bg-[#0E1A2F] relative overflow-hidden');

// Section Heading
content = content.replace('text-[#FDFBF7]">', 'text-kashmir-deep dark:text-[#FDFBF7]">');

// Section Paragraph
content = content.replace('text-[#FDFBF7]/70 font-light', 'text-kashmir-deep/70 dark:text-[#FDFBF7]/70 font-light');

// Card Background
content = content.replace('bg-[#131F33] border border-white/10', 'bg-white dark:bg-[#131F33] border border-kashmir-mist/30 dark:border-white/10');

// Card Title
content = content.replace('text-[#FDFBF7]">', 'text-kashmir-deep dark:text-[#FDFBF7]">');

// Card Paragraph
content = content.replace('text-[#FDFBF7]/90 font-light', 'text-kashmir-deep/85 dark:text-[#FDFBF7]/90 font-light');

// Floating organic pattern
content = content.replace('bg-kashmir-lake rounded-full filter blur-xl opacity-20', 'bg-kashmir-mist dark:bg-kashmir-lake rounded-full filter blur-xl opacity-30 dark:opacity-20');

// Icon badge
content = content.replace('bg-white/5 border border-white/10', 'bg-beige-light dark:bg-white/5 border border-kashmir-mist/30 dark:border-white/10');

// Explore Pages
content = content.replace('text-[#D5E1ED]/80 group-hover:text-golden-accent', 'text-kashmir-lake dark:text-[#D5E1ED]/80 group-hover:text-golden-accent');

// Closing quote block
content = content.replace('bg-white/5 border border-golden-accent/20', 'bg-white/50 dark:bg-white/5 border border-kashmir-mist/30 dark:border-golden-accent/20');
content = content.replace('text-[#FDFBF7] leading-relaxed', 'text-kashmir-deep dark:text-[#FDFBF7] leading-relaxed');


fs.writeFileSync('src/components/Readers.tsx', content);
console.log("Fixed Readers.tsx to be responsive to light/dark mode");
