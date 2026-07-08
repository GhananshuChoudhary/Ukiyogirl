const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const buyBtnDesktop = `
            <a
              href="https://akshardhara.com/products/yun-hasee-wadiyaan?_pos=1&_sid=1670c1a1d&_ss=r"
              target="_blank"
              rel="noopener noreferrer"
              className={\`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 hover:shadow-sm \${
                scrolled
                  ? 'bg-kashmir-deep text-beige-light hover:bg-kashmir-lake'
                  : 'bg-golden-accent text-kashmir-deep hover:bg-beige-warm'
              }\`}
            >
              {t('Buy Now', 'विकत घ्या')}
            </a>`;

content = content.replace(/<a\s*href="#about-book"\s*className=\{`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 hover:shadow-sm \$\{\s*scrolled\s*\?\s*'bg-kashmir-deep text-beige-light hover:bg-kashmir-lake'\s*:\s*'bg-golden-accent text-kashmir-deep hover:bg-beige-warm'\s*\}\`\}\s*>\s*<BookOpen className="h-3\.5 w-3\.5" \/>\s*\{t\('Explore Book', 'पुस्तक उघडा'\)\}\s*<\/a>/, buyBtnDesktop);

const buyBtnMobile = `
            <a
              href="https://akshardhara.com/products/yun-hasee-wadiyaan?_pos=1&_sid=1670c1a1d&_ss=r"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 rounded-xl bg-kashmir-deep text-beige-light hover:bg-kashmir-lake font-sans text-xs uppercase tracking-widest font-semibold transition-all mt-3 flex items-center justify-center gap-2"
            >
              {t('Buy Now', 'विकत घ्या')}
            </a>`;

content = content.replace(/<a\s*href="#about-book"\s*onClick=\{[^}]*\}\s*className="px-5 py-3 rounded-xl bg-kashmir-deep text-beige-light hover:bg-kashmir-lake font-sans text-xs uppercase tracking-widest font-semibold transition-all mt-3 flex items-center justify-center gap-2"\s*>\s*<BookOpen className="h-4 w-4 text-beige-light" \/>\s*\{t\('Explore Book', 'पुस्तक उघडा'\)\}\s*<\/a>/, buyBtnMobile);

fs.writeFileSync('src/components/Navbar.tsx', content);
console.log("Fixed Navbar.tsx");
