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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-kashmir-deep/90 leading-tight">
              {t(
                "Kashmir Through Curious Eyes",
                "कुतूहल आणि जिज्ञासू नजरेतून काश्मीर"
              )}
            </h3>
            
            <p className="font-sans text-sm md:text-base text-kashmir-deep/80 font-light leading-relaxed">
              {t(
                "This isn't just another travel brochure or tourist guide detailing hotels and packages. It is a genuine record of a young woman's interaction with the freezing wind, golden meadows, peaceful valleys, and local warmth in Kashmir.",
                "हे हॉटेल्स आणि पॅकेजची माहिती देणारे सामान्य प्रवासी माहितीपत्रक किंवा टूर गाइड नाही. हे काश्मीरमधील बोचरी थंडी, सोनेरी कुरणे, शांत खोऱ्या आणि स्थानिक आगत्य यांच्याशी एका तरुणीने साधलेल्या संवादाचे अस्सल चिंतन आहे."
              )}
            </p>

            <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
              {t(
                "When ukiyo girl traveled, she paid close attention to the small things: the unique smell of woodsmoke floating over Dal Lake at 5 AM, the slow, rhythmic paddle of a boatman, and how shared cups of Kahwa tea have the power to break down barriers of language and culture.",
                "जेव्हा उकियो गर्लने प्रवास केला, तेव्हा तिने लहान गोष्टींकडे बारकाईने लक्ष दिले: पहाटे ५ वाजता दाल लेकवर रेंगाळणारा लाकडाच्या धुराचा अनोखा सुवास, एका नावाड्याच्या वल्ह्याची संथ लय आणि कावा चहाच्या कपांमुळे भाषा आणि संस्कृतीचे अंतर कशा प्रकारे मिटते."
              )}
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-xl border border-kashmir-mist/30 bg-white/50 flex gap-3 items-start hover:shadow-sm transition-shadow">
                <Leaf className="h-5 w-5 text-golden-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-kashmir-deep">
                    {t("Nature-Centric", "निसर्गाभिमुख")}
                  </h4>
                  <p className="font-sans text-[11px] text-kashmir-deep/70 mt-1">
                    {t(
                      "Deep descriptions of misty mountains, pine wind, and calm boat paths.",
                      "धुकेयुक्त पर्वत, पाईन वारे आणि बोटींच्या शांत वाटा यांचे सखोल वर्णन."
                    )}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-kashmir-mist/30 bg-white/50 flex gap-3 items-start hover:shadow-sm transition-shadow">
                <Heart className="h-5 w-5 text-golden-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-kashmir-deep">
                    {t("Human Unity", "मानवी एकात्मता")}
                  </h4>
                  <p className="font-sans text-[11px] text-kashmir-deep/70 mt-1">
                    {t(
                      "Capturing the pure, honest hospitalities of local Kashmiri households.",
                      "स्थानिक काश्मिरी कुटुंबांचे अस्सल आणि प्रामाणिक आदरातिथ्य टिपणे."
                    )}
                  </p>
                </div>
              </div>

            </div>

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
            <div className="w-full flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-3xl bg-white border border-kashmir-mist/20 shadow-xl shadow-kashmir-deep/5 min-h-[420px] relative overflow-hidden">
              
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
                      💡 {t("English Translation: 'Oh, Beautiful Valleys'", "शीर्षकाचा अर्थ: 'Oh, Beautiful Valleys'")}
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
          <div className="absolute left-4 md:left-1/2 top-10 bottom-10 w-[1.5px] bg-gradient-to-b from-golden-accent/15 via-golden-accent/50 to-golden-accent/15 transform md:-translate-x-1/2" />

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
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } relative`}
                >
                  
                  {/* Anchor timeline circle indicator */}
                  <div className="absolute left-[11px] md:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-golden-accent border-[2.5px] border-beige-light shadow-md transform md:-translate-x-1/2 z-10" />

                  {/* Left spacing for layout symmetry on desktops */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:pl-12 pl-12 text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-kashmir-light text-kashmir-lake font-mono text-[9px] uppercase tracking-wider font-semibold mb-2">
                      {t(event.stage, event.stageMr)}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-kashmir-deep">
                      {t(event.title, event.titleMr)}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-golden-accent tracking-wide mt-1">
                      {t(event.description, event.descriptionMr)}
                    </p>
                    <p className="font-sans text-xs text-kashmir-deep/70 font-light leading-relaxed mt-2.5">
                      {t(event.detail, event.detailMr)}
                    </p>
                  </div>

                  {/* Empty grid element on the opposite side of the timeline */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
