import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote as QuoteIcon, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { QUOTES } from '../data';
import { useLanguage } from '../LanguageContext';

export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  // Autoplay loop every 9 seconds for peaceful breathing rhythm
  useEffect(() => {
    const interval = setInterval(nextQuote, 9000);
    return () => clearInterval(interval);
  }, []);

  const activeQuote = QUOTES[currentIndex];

  return (
    <section id="quotes" className="py-24 px-6 bg-kashmir-deep relative overflow-hidden text-beige-light">
      
      {/* Absolute serene dark aesthetic backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kashmir-lake/20 rounded-full filter blur-[150px] opacity-80 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header markers */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-2">
            <QuoteIcon className="h-4.5 w-4.5 text-golden-accent" />
            {t("Book Quotes & Excerpts", "पुस्तकातील निवडक उतारे आणि विचार")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">
            {t("Memories in Lettering", "शब्दांत कोरलेल्या देखण्या आठवणी")}
          </h2>
          <div className="w-12 h-[1px] bg-golden-accent/45 my-2" />
        </div>

        {/* Carousel Container using Glassmorphism */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="glass p-8 md:p-14 rounded-3xl text-center flex flex-col items-center gap-8 shadow-2xl border border-white/10"
            >
              
              {/* Giant quote mark decoration */}
              <QuoteIcon className="h-10 w-10 text-golden-accent/40 animate-pulse" />

              {/* original Marathi excerpt */}
              {activeQuote.bookText && (
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent/75">
                    {t("Original Excerpt (मराठी)", "मूळ उतारा (मराठी)")}
                  </span>
                  <p className="font-serif italic text-xl md:text-2xl font-semibold leading-relaxed text-yellow-50/90 text-center select-none block max-w-2xl">
                    "{activeQuote.bookText}"
                  </p>
                </div>
              )}

              {/* Divider in glass */}
              <div className="w-24 h-[1px] bg-white/10" />

              {/* Beautiful English interpretation */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent/75">
                  {t("Reflective English Translation", "विचारशील इंग्रजी अनुवाद")}
                </span>
                <p className="font-serif italic text-base md:text-lg text-kashmir-mist leading-relaxed font-light max-w-2xl">
                  "{activeQuote.text}"
                </p>
              </div>

              {/* Footnote metadata */}
              <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 mt-2">
                <BookOpen className="h-3.5 w-3.5 text-golden-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-kashmir-mist font-semibold">
                  {t(activeQuote.chapter, activeQuote.chapterMr)}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-sans text-[10px] text-golden-accent">
                  {t(activeQuote.page || "", activeQuote.pageMr || "")}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Manual Left/Right Nav Buttons */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            
            <button
              onClick={prevQuote}
              className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-beige-light"
              aria-label="Previous Book Quote"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Custom Interactive Indicator Dots */}
            <div className="flex items-center gap-2.5">
              {QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-golden-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to Quote ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextQuote}
              className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-beige-light"
              aria-label="Next Book Quote"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
