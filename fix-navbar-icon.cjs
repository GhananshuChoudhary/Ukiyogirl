const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

if (!content.includes('ShoppingBag')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, "import { $1, ShoppingBag } from 'lucide-react';");
}

content = content.replace(/\{t\('Buy Now', 'विकत घ्या'\)\}/g, "<ShoppingBag className=\"h-4 w-4\" /> {t('Buy Now', 'विकत घ्या')}");

fs.writeFileSync('src/components/Navbar.tsx', content);
console.log("Fixed Navbar icons");
