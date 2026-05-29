import { motion } from 'motion/react';
import { BookOpen, Compass, Heart, Leaf, Scroll } from 'lucide-react';
import { AUTHOR_INFO, TIMELINE_EVENTS } from '../data';
import { useLanguage } from '../LanguageContext';

export default function AboutBook() {
  const { t } = useLanguage();

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
              "Written from a sincere, youthful perspective, ",
              "एका संवेदनशील, तरुण दृष्टिकोनातून लिहिलेले, "
            )}
            <span className="italic font-serif text-kashmir-deep font-medium">
              "{t(AUTHOR_INFO.bookTitle, AUTHOR_INFO.bookTitleMr)}"
            </span>{" "}
            {t(
              " is a heartfelt chronicle that blends travelogue logs with quiet individual introspection.",
              " हे एक हृदयस्पर्शी लिखाण आहे जे प्रवासवर्णनाच्या नोंदी आणि शांत वैयक्तिक आत्मपरीक्षण यांचे उत्कृष्ट मिश्रण करते."
            )}
          </p>
        </div>

        {/* Narrative Highlights Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-kashmir-deep/90 leading-tight">
              {t(
                "An Authentic Look at Kashmir, Born out of Fearless Observations.",
                "निर्भय निरीक्षणांतून जन्मलेले काश्मीरचे एक अस्सल दर्शन."
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

          {/* Right Visual Highlight - Glass Backed Literary Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="p-8 md:p-10 rounded-3xl glass-light relative overflow-hidden text-left border border-kashmir-mist/25 max-w-lg w-full">
              
              {/* Decorative vintage paper texture background simulated */}
              <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-repeat bg-[radial-gradient(#2d4c6f_1px,transparent_1px)]" style={{ backgroundSize: '16px 16px' }} />
              
              <Scroll className="h-8 w-8 text-golden-accent/60 mb-6" />
              <h4 className="font-serif text-xs uppercase tracking-widest text-golden-accent font-semibold mb-2">
                {t("Back Cover Extract (English)", "बॅक कव्हर सारांश (मराठीत)")}
              </h4>
              
              <blockquote className="font-serif italic text-base md:text-lg text-kashmir-deep/90 leading-relaxed mb-6">
                {t(
                  "“Every moment, lived with an urgent passion to exist fully in that precise transition, 'Ukiyogirl' at a young age wrote the story of 'Kashmir Sparshachi' (Touch of Kashmir) — a reality not searchable on Google...”",
                  "“प्रत्येक क्षण, त्याच क्षणात पूर्णपणे जगण्याच्या ऊर्मीने उकियो गर्लने तरुण वयात काश्मीर स्पर्शाची गोष्ट लिहिली — हे एक असे वास्तव आहे जे गुगलवर कधीही शोधून सापडणार नाही...”"
                )}
              </blockquote>

              <div className="border-t border-kashmir-mist/30 pt-4 flex justify-between items-center text-xs">
                <div>
                  <span className="font-sans font-semibold text-kashmir-deep block">
                    {t(AUTHOR_INFO.name, AUTHOR_INFO.nameMr)}
                  </span>
                  <span className="font-mono text-[9px] text-kashmir-deep/60">
                    {t("Debut Publication", "पहिलेच पुस्तक")}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-kashmir-deep/5 font-mono text-[10px] text-kashmir-lake font-medium">
                  {t("Marathi & English Support", "मराठी आणि इंग्रजी")}
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
