const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

if (!content.includes('ShoppingBag')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, "import { $1, ShoppingBag } from 'lucide-react';");
}

const buyButton = `
            <a 
              href="https://akshardhara.com/products/yun-hasee-wadiyaan?_pos=1&_sid=1670c1a1d&_ss=r"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full px-4 py-2.5 rounded bg-golden-accent text-kashmir-deep hover:bg-beige-light font-sans text-[10px] uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              {t("Buy from Akshardhara", "अक्षरधारावरून विकत घ्या")}
            </a>`;

content = content.replace(/<span>\+91 9850288349 \/ 9322001009<\/span>\n            <\/div>/, `<span>+91 9850288349 / 9322001009</span>\n            </div>${buyButton}`);

fs.writeFileSync('src/components/Footer.tsx', content);
console.log("Fixed Footer.tsx");
