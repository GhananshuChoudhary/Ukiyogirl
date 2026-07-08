const fs = require('fs');

let journey = fs.readFileSync('src/components/Journey.tsx', 'utf8');
journey = journey.replace(/border-white\/5/g, 'border-beige-light/10');
fs.writeFileSync('src/components/Journey.tsx', journey);

let tribute = fs.readFileSync('src/components/Tribute.tsx', 'utf8');
tribute = tribute.replace(/border-white\/5/g, 'border-beige-light/10');
fs.writeFileSync('src/components/Tribute.tsx', tribute);

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace(/border-white\/5/g, 'border-beige-light/10');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

console.log("Fixed remaining border-white");
