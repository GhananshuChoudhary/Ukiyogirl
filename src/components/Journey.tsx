import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, Sun, BookOpen } from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import { useLanguage } from '../LanguageContext';

export default function Journey() {
  const [selectedDest, setSelectedDest] = useState<Destination>(DESTINATIONS[0]);
  const { t, language } = useLanguage();

  return (
    <section id="destinations" className="py-24 px-6 bg-beige-light relative overflow-hidden">
      
      {/* Decorative ambient blurred spots */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-kashmir-light/40 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5">
            <Compass className="h-4 w-4 animate-spin-slow" />
            {t("Interactive Landscape Map", "परस्परसंवादी निसर्ग सफर")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("Kashmir Through Her Eyes", "तिच्या नजरेतून काश्मीर")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light max-w-lg mx-auto">
            {t("These are the physical, quiet coordinates that birthed Pavani's essays. Discover their atmospheres and how they inspired the book.", "ही ती प्रत्यक्ष आणि शांत ठिकाणे आहेत ज्यांनी पावनीच्या निबंधांना जन्म दिला. तिने तेथील वातावरण कसे अनुभवले आणि या पुस्तकाला कशी प्रेरणा मिळाली ते पाहा.")}
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Destination Selectable Cards List (4 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block text-left mb-2 pl-1">
              {t("Select a location to explore logs:", "अनुभव पाहण्यासाठी ठिकाण निवडा:")}
            </span>
            
            <div className="space-y-3">
              {DESTINATIONS.map((dest) => {
                const isSelected = selectedDest.id === dest.id;
                return (
                  <motion.button
                    key={dest.id}
                    onClick={() => setSelectedDest(dest)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-kashmir-deep border-kashmir-deep text-beige-light shadow-lg shadow-kashmir-deep/15'
                        : 'bg-white/60 border-kashmir-mist/30 hover:border-kashmir-lake/45 text-kashmir-deep'
                    }`}
                  >
                    
                    {/* Visual miniature circle */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <img
                        src={dest.image}
                        alt={t(dest.name, dest.nameMr)}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-white/10 text-golden-accent' : 'bg-kashmir-light text-kashmir-lake font-bold'
                        }`}>
                          {t(dest.tag, dest.tagMr)}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-semibold tracking-wide">
                        {t(dest.name, dest.nameMr)}
                      </h4>
                    </div>

                  </motion.button>
                );
              })}
            </div>

          </div>

          {/* Right Side: Immersive Selected Details Showcase with high fidelity design (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="rounded-3xl overflow-hidden border border-kashmir-mist/25 bg-white shadow-xl flex flex-col h-full"
              >
                
                {/* Large high-resolution visual banner */}
                <div className="h-64 md:h-80 w-full relative overflow-hidden select-none">
                  <img
                    src={selectedDest.image}
                    alt={t(selectedDest.name, selectedDest.nameMr)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradients on banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                  
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-semibold block mb-1">
                      {t("Featured Destination", "विशेष आकर्षण")}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-white tracking-wide">
                      {t(selectedDest.name, selectedDest.nameMr)}
                    </h3>
                  </div>
                </div>

                {/* Narrative logs block */}
                <div className="p-6 md:p-8 space-y-6 text-left flex-1">
                  
                  <p className="font-sans text-sm md:text-base text-kashmir-deep/90 font-light leading-relaxed">
                    {t(selectedDest.description, selectedDest.descriptionMr)}
                  </p>

                  {/* Travel season coordinates grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-kashmir-mist/30">
                    
                    <div className="flex items-start gap-2.5">
                      <Calendar className="h-4.5 w-4.5 text-golden-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                          {t("Best Season", "उत्तम काळ")}
                        </span>
                        <p className="font-sans text-xs font-semibold text-kashmir-deep">
                          {t(selectedDest.season, selectedDest.seasonMr)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Sun className="h-4.5 w-4.5 text-golden-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                          {t("Atmospheric Climate", "हवामान")}
                        </span>
                        <p className="font-sans text-xs font-semibold text-kashmir-deep">
                          {t(selectedDest.climate, selectedDest.climateMr)}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Little quote highlight showing how she captured it locally */}
                  <div className="p-4 rounded-xl bg-beige-light border border-golden-accent/10 flex gap-3 items-center mt-2.5">
                    <BookOpen className="h-5 w-5 text-golden-accent shrink-0" />
                    <span className="font-serif italic text-xs text-kashmir-deep/80">
                      {language === 'mr' ? (
                        `"धुक्याची प्रत्येक नवीन लाट आपल्यासोबत शतकांचा इतिहास वाहून आणते. ${selectedDest.nameMr} मध्ये असताना मी खऱ्या शांततेमध्ये कशा प्रकारे लिहावे हे शिकले."`
                      ) : (
                        `"Each wave of mist carries the voices of centuries. In ${selectedDest.name}, I learned what it means to write from silence."`
                      )}
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
