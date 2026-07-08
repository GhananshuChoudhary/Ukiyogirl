import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Compass, Heart, Leaf, Scroll } from 'lucide-react';
import { AUTHOR_INFO, TIMELINE_EVENTS, IMAGES } from '../data';
import { useLanguage } from '../LanguageContext';

export default function AboutBook() {
  const { t, language } = useLanguage();
  const [coverTab, setCoverTab] = useState<'front' | 'back'>('front');

  return (
    <section id="about-book" className="py-24 px-6 bg-beige-light relative overflow-hidden">
      
      {/* Decorative organic background touches */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-kashmir-light/50 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-beige-warm/30 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            {t("The Literary Glimpse", "साहित्याची झलक")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("About the Memoir", "पुस्तकाविषयी थोडक्यात")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
            {t(
              "Written during her early years, this book brings together travel memories, personal reflections, and the small moments that often go unnoticed.",
              "पावनीने तिच्या कोवळ्या वयात लिहिलेले हे पुस्तक प्रवासातील नितांत सुंदर आठवणी, वैयक्तिक विचार आणि आपल्याकडून अनेकदा राहून जाणाऱ्या छोट्या पण महत्त्वाच्या क्षणांना एकत्र आणते."
            )}
          </p>
        </div>

        {/* Narrative Highlights Block */}
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

          </div>

          {/* Right Visual Highlight - Interactive Book Cover Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center gap-6 w-full">
            
            {/* Tab Controls */}
            <div className="flex gap-2 p-1 rounded-xl bg-kashmir-deep/5 border border-kashmir-mist/20 w-fit">
              <button
                onClick={() => setCoverTab('front')}
                className={`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  coverTab === 'front'
                    ? 'bg-kashmir-deep text-beige-light shadow-md'
                    : 'text-kashmir-deep/70 hover:text-kashmir-deep'
                }`}
              >
                {t("Front Cover", "मुखपृष्ठ")}
              </button>
              <button
                onClick={() => setCoverTab('back')}
                className={`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  coverTab === 'back'
                    ? 'bg-kashmir-deep text-beige-light shadow-md'
                    : 'text-kashmir-deep/70 hover:text-kashmir-deep'
                }`}
              >
                {t("Back Cover", "मलपृष्ठ")}
              </button>
            </div>

            {/* Book & Descriptions Frame */}
            <div className="w-full flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-3xl bg-beige-light border border-kashmir-mist/20 shadow-xl shadow-kashmir-deep/5 min-h-[420px] relative overflow-hidden">
              
              {/* Dynamic Book Preview container */}
              <div className="w-[180px] md:w-[220px] shrink-0 aspect-[9/16] rounded-xl overflow-hidden border border-kashmir-deep/15 shadow-2xl relative group">
                <motion.img
                  key={coverTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={coverTab === 'front' ? IMAGES.bookCover : IMAGES.bookBackCover}
                  alt={coverTab === 'front' ? t("Book Front Cover", "पुस्तकाचे मुखपृष्ठ") : t("Book Back Cover", "पुस्तकाचे मलपृष्ठ")}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 pointer-events-none" />
              </div>

              {/* Cover text details */}
              <div className="flex-1 text-left flex flex-col justify-between space-y-4">
                {coverTab === 'front' ? (
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-semibold block mb-1">
                      {t("The Canvas Of Mountains", "पर्वतांचे सौंदर्य")}
                    </span>
                    <h4 className="font-serif text-xl font-semibold text-kashmir-deep leading-tight">
                      {t("Yun Hasee Wadiyaan", "यूँ हसी वादियाँ")}
                    </h4>
                    <p className="font-sans text-[11px] text-kashmir-deep/50 font-mono mt-0.5">
                      {t("By Ukiyogirl", "लेखिका: उकियोगर्ल")}
                    </p>
                    <p className="font-sans text-xs text-kashmir-deep/75 font-light leading-relaxed mt-4">
                      {t(
                        "The front cover captures the majestic snow-capped peaks of Kashmir rising into the pristine alpine blue sky, with the Indian national flag standing proud. It represents a raw, honest window to the Himalayas.",
                        "मुखपृष्ठ निळ्या निरभ्र आकाशाखाली काश्मीरच्या बर्फाच्छादित डोंगररांगांची आणि सन्मानाने फडकणाऱ्या आपल्या राष्ट्रध्वजाची नितांत सुंदर झलक दर्शवते. हे निसर्गाचे आणि पर्वतांचे एक अस्सल दर्शन आहे."
                      )}
                    </p>
                    <div className="mt-4 p-3 rounded-lg bg-beige-light border border-kashmir-mist/20 text-[10px] font-mono text-kashmir-lake leading-relaxed">
                      💡 {t("English Translation: 'Thus Smiled the Valleys'", "शीर्षकाचा अर्थ: 'Thus Smiled the Valleys'")}
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-semibold block mb-1">
                      {t("The Voice Within the Soil", "मातीचा आणि मनाचा आवाज")}
                    </span>
                    <h4 className="font-serif text-xl font-semibold text-kashmir-deep leading-tight">
                      {t("Verbatim Poetic Musings", "अस्सल अनुभूतींची साद")}
                    </h4>
                    
                    {/* Verbatim lines from Back Cover */}
                    <div className="mt-4 space-y-3 border-l-2 border-golden-accent/30 pl-3">
                      <p className="font-serif italic text-xs md:text-sm text-kashmir-deep/90 leading-relaxed font-semibold">
                        {language === 'mr' ? (
                          "“खरा निसर्ग, त्या-त्या मातीतील माणसं आणि त्यांच्याबरोबर आलेलेले अनुभव यांना सामोरे जातच तुम्ही स्वतःला शोधता...”"
                        ) : (
                          "“Confronting true nature, the people of that very soil, and the experiences that accompany them, you ultimately find yourself...”"
                        )}
                      </p>
                      <p className="font-sans text-[11px] text-kashmir-deep/70 font-light leading-relaxed">
                        {language === 'mr' ? (
                          "“प्रत्येक क्षण त्याच क्षणात जगण्याच्या ऊर्मीने उकियोगर्लने पोरसवदा वयात काश्मीरमध्ये प्रत्यक्ष अनुभवलेली गोष्ट या पुस्तकात...”"
                        ) : (
                          "“Written during the edge of adulthood with the raw desire to live every moment in its transition; stories of Kashmir not searchable on Google...”"
                        )}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-kashmir-mist/20 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-kashmir-deep/60">
                      <span>🏷️ {t("Price: ₹199", "किंमत: ₹१९९")}</span>
                      <span>📖 {t("Publisher: Swayam Prakashan", "प्रकाशक: स्वयं प्रकाशन")}</span>
                    </div>
                  </div>
                )}
                
                {/* Book Details Link / Reference info */}
                <div className="pt-2">
                  <span className="text-[10px] font-sans font-medium text-kashmir-lake bg-kashmir-light px-3 py-1.5 rounded-full inline-block leading-snug">
                    {t(AUTHOR_INFO.details.recommendation, AUTHOR_INFO.details.recommendationMr)}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Timelined Storytelling Section */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl font-light text-kashmir-deep tracking-wide flex items-center justify-center gap-2">
              <Compass className="h-5 w-5 text-golden-accent" />
              {t("The Creative Evolution Timeline", "सर्जनशील निर्मितीचा कालपट")}
            </h3>
            <p className="font-sans text-xs text-kashmir-deep/60 mt-2 font-mono uppercase tracking-widest">
              {t("How experiences turned into pages", "अनुभवांचे पानांमध्ये कसे रूपांतर झाले")}
            </p>
          </div>

          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[17px] md:left-1/2 top-10 bottom-10 w-[1.5px] bg-gradient-to-b from-golden-accent/15 via-golden-accent/50 to-golden-accent/15 transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row items-start relative w-full"
                >
                  
                  

                  {/* Anchor timeline circle indicator */}
                  <div className="absolute left-[11px] md:left-1/2 top-1.5 md:top-2 w-3.5 h-3.5 rounded-full bg-golden-accent border-[2.5px] border-beige-light  shadow-md transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} text-left`} >
                    <span className="inline-block px-2.5 py-0.5 rounded bg-kashmir-light  text-kashmir-lake  font-mono text-[9px] uppercase tracking-wider font-semibold mb-2">
                      {t(event.stage, event.stageMr)}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-kashmir-deep">
                      {t(event.title, event.titleMr)}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-kashmir-deep  tracking-wide mt-1">
                      {t(event.description, event.descriptionMr)}
                    </p>
                    <p className="font-sans text-xs text-kashmir-deep/80 font-light leading-relaxed mt-2.5 inline-block text-left">
                      {t(event.detail, event.detailMr)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
