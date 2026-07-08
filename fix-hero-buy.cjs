const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const buyButton = `
            <a
              href="https://akshardhara.com/products/yun-hasee-wadiyaan?_pos=1&_sid=1670c1a1d&_ss=r"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-white text-kashmir-deep hover:bg-beige-light font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/30 group"
            >
              {t("Buy the Book", "पुस्तक विकत घ्या")}
            </a>`;

content = content.replace(
  /{t\("Meet Pavani", "पावनीची कहाणी"\)}\n\s*<\/a>/,
  `{t("Meet Pavani", "पावनीची कहाणी")}\n            </a>${buyButton}`
);

fs.writeFileSync('src/components/Hero.tsx', content);
console.log("Fixed Hero.tsx");
