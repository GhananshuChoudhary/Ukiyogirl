const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

const newText = `{/* Narrative Highlights Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-kashmir-deep/90 leading-tight">
              {t(
                "Beyond the Headlines: Discovering the Real Kashmir",
                "ठळक बातम्यांच्या पलीकडे: खऱ्या काश्मीरचा शोध"
              )}
            </h3>
            
            <p className="font-sans text-sm text-kashmir-deep/80 font-light leading-relaxed">
              {t(
                "This book is a travel memoir that goes far beyond tourism. Through her first-hand journey across Kashmir, the author explores not only its breathtaking natural beauty but also the reality hidden behind years of misconceptions, media narratives, and political conflicts.",
                "हे पुस्तक पर्यटनाच्या पलीकडे जाणारे एक प्रवासवर्णन आहे. काश्मीरच्या प्रत्यक्ष प्रवासातून लेखिकेने केवळ तिथल्या चित्तथरारक निसर्गसौंदर्याचाच शोध घेतला नाही, तर वर्षानुवर्षे असलेल्या गैरसमजांमागे, माध्यमांच्या आख्यायिकांमागे आणि राजकीय संघर्षांमागे लपलेले वास्तवही शोधून काढले आहे."
              )}
            </p>

            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
              {t(
                "Beginning with the excitement of witnessing snowfall for the very first time, the author takes readers through Kashmir's magnificent landscapes, serene rivers, snow-covered mountains, and peaceful atmosphere. The fear and uncertainty she once associated with the region are replaced by admiration for the warmth, hospitality, and resilience of its people.",
                "पहिल्यांदाच बर्फ पडताना पाहण्याच्या उत्साहापासून सुरुवात करून, लेखिका वाचकांना काश्मीरमधील विहंगम दृश्ये, शांत नद्या, बर्फाच्छादित डोंगर आणि शांत वातावरणाची सफर घडवते. या प्रदेशाशी निगडीत असलेली तिची पूर्वीची भीती आणि अनिश्चितता आता तिथल्या लोकांची आपुलकी, पाहुणचार आणि कणखरपणा याबद्दलच्या आदरात बदलते."
              )}
            </p>
            
            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
              {t(
                "The book also explores Kashmir's complex history, the issue of Pakistan-Occupied Kashmir (POK), and the impact of terrorism on the daily lives of ordinary citizens. Rather than ignoring these challenges, the author presents a balanced perspective, acknowledging the existence of security concerns while emphasizing that they should not define the identity of an entire region.",
                "या पुस्तकात काश्मीरचा गुंतागुंतीचा इतिहास, पाकव्याप्त काश्मीरचा (POK) प्रश्न आणि सामान्य नागरिकांच्या दैनंदिन जीवनावर दहशतवादाचा होणारा परिणाम यांचाही वेध घेतला आहे. या आव्हानांकडे दुर्लक्ष करण्याऐवजी, लेखिकेने सुरक्षेच्या समस्यांचे अस्तित्व मान्य करत एक संतुलित दृष्टिकोन मांडला आहे आणि हे स्पष्ट केले आहे की, अशा समस्या एखाद्या संपूर्ण प्रदेशाची ओळख ठरवू शकत नाहीत."
              )}
            </p>
            
            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
              {t(
                "A significant part of the book celebrates Kashmir's rich cultural heritage. Readers are introduced to traditional customs, local cuisine, Kahwa, Kangri, Pheran, Shikara rides, religious harmony, historic temples, mosques, gurudwaras, and dargahs that together represent the true spirit of Kashmir.",
                "पुस्तकाचा एक मोठा भाग काश्मीरच्या समृद्ध सांस्कृतिक वारशाचा उत्सव साजरा करतो. वाचकांना पारंपरिक चालीरीती, स्थानिक खाद्यपदार्थ, कावा, कांगरी, फेरण, शिकाराची सफर, धार्मिक सौहार्द, ऐतिहासिक मंदिरे, मशिदी, गुरुद्वारे आणि दर्गे यांची ओळख करून दिली जाते, जे एकत्र मिळून काश्मीरचा खरा आत्मा दर्शवतात."
              )}
            </p>

            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
              {t(
                "The author also sheds light on the efforts of the Indian Army, paramilitary forces, police officers, and local administration in maintaining peace, combating terrorism, rehabilitating drug-affected youth, and supporting the local population.",
                "शांतता राखणे, दहशतवादाचा मुकाबला करणे, अमली पदार्थांच्या आहारी गेलेल्या तरुणांचे पुनर्वसन करणे आणि स्थानिक जनतेला पाठिंबा देणे यासाठी भारतीय लष्कर, निमलष्करी दले, पोलीस अधिकारी आणि स्थानिक प्रशासन करत असलेल्या प्रयत्नांवरही लेखिका प्रकाश टाकते."
              )}
            </p>
            
            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed font-medium mt-4">
              {t(
                "More than a travel diary, this book is a story of changing perceptions. It encourages readers to look beyond stereotypes, experience Kashmir through the eyes of its people, and appreciate the region not only for its extraordinary beauty but also for its courage, culture, humanity, and hope.",
                "केवळ एक प्रवास डायरी असण्यापेक्षा, हे पुस्तक दृष्टिकोन बदलण्याची एक कथा आहे. हे पुस्तक वाचकांना साचेबद्ध विचारांच्या पलीकडे जाण्यास, तिथल्या लोकांच्या दृष्टिकोनातून काश्मीरचा अनुभव घेण्यास आणि या प्रदेशाचे केवळ असाधारण सौंदर्यच नव्हे, तर तिथले धैर्य, संस्कृती, माणुसकी आणि आशा यांची कदर करण्यास प्रवृत्त करते."
              )}
            </p>

          </div>`;

const startIdx = content.indexOf('{/* Narrative Highlights Block */}');
const endIdx = content.indexOf('{/* Right Visual Highlight - Interactive Book Cover Showcase */}');
if (startIdx !== -1 && endIdx !== -1) {
    content = content.slice(0, startIdx) + newText + '\n\n          ' + content.slice(endIdx);
    fs.writeFileSync('src/components/AboutBook.tsx', content);
    console.log('AboutBook.tsx updated successfully');
} else {
    console.log('Could not find indices');
}
