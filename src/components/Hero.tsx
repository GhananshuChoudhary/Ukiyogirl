import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { IMAGES, AUTHOR_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kashmir-deep text-beige-light pt-24 pb-16">
      
      {/* Absolute background image with high opacity and blend */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={IMAGES.heroBg}
          alt={t("Kashmir Mountains under Morning Fog", "सकाळच्या धुक्यातील काश्मीरचे पर्वत")}
          className="w-full h-full object-cover opacity-35 object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kashmir-deep via-kashmir-deep/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-kashmir-deep via-transparent to-kashmir-deep/50" />
      </div>

      {/* Shifting Morning Mist / Light Fog Layers */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute -inset-[50%] bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-overlay animate-fog-slow"
        />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-25 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Poetry, Pen Name, and Headlines */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] uppercase tracking-widest text-golden-accent font-mono"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t("A Friend’s Tribute to her Journey", "एका मित्राची शब्दभेट आणि आदरंजली")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide leading-none text-beige-light">
              {t("Introducing", "सादर करत आहोत")}
              <span className="block font-medium text-golden-accent font-sans tracking-tight mt-1 text-4xl md:text-6xl">
                {t(AUTHOR_INFO.penName, AUTHOR_INFO.penNameMr)}
              </span>
            </h1>
          </motion.div>

          {/* Book Title Metadata Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif italic text-lg text-kashmir-mist tracking-wide"
          >
            {t("and her debut publication: ", "आणि तिचे पहिले प्रकाशन: ")}
            <span className="text-white font-medium not-italic font-sans">{t(AUTHOR_INFO.bookTitle, AUTHOR_INFO.bookTitleMr)}</span> ({t(AUTHOR_INFO.bookSubtitle, AUTHOR_INFO.bookSubtitleMr)})
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-sans text-sm md:text-base text-kashmir-mist max-w-xl font-light leading-relaxed tracking-wide"
          >
            "{t(AUTHOR_INFO.tagline, AUTHOR_INFO.taglineMr)}"
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a
              href="#about-book"
              className="px-6 py-3 rounded-lg bg-golden-accent text-kashmir-deep hover:bg-beige-warm font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/30 group animate-pulse-slow"
            >
              {t("Explore the Journey", "प्रवास अनुभवून पहा")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#about-author"
              className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
            >
              <Compass className="h-4 w-4 text-kashmir-mist" />
              {t("Meet Pavani", "पावनीची कहाणी")}
            </a>
          </motion.div>

          {/* Quote Preview Anchor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 pt-6 border-t border-white/5 flex items-start gap-4"
          >
            <span className="font-serif text-3xl text-golden-accent/30 leading-none">“</span>
            <p className="font-serif italic text-xs md:text-sm text-kashmir-mist/80 leading-relaxed max-w-sm">
              "खरा निसर्ग आणि अव्याहत जीवन प्रत्यक्ष पाहण्यासाठी तुम्हाला 'निर्भय' व्हावे लागेल...!"
            </p>
          </motion.div>

        </div>

        {/* Right Side: Prominent Book Cover Showcase with subtle float hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end py-6"
        >
          <div className="relative group p-4">
            
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-4 bg-golden-accent/5 rounded-full filter blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Simulated 3D Book Container with Hover Floating Effect */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotateY: [1, 5, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-[240px] md:w-[320px] aspect-[3/4] shadow-2xl shadow-black/80 rounded-lg overflow-hidden border border-white/15 transform hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={IMAGES.bookCover}
                alt={t("Book Cover: Yoo 'Haseen' Waadiyan", "पुस्तकाचे मुखपृष्ठ: यू 'हसीन' वादिया")}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
              
              {/* Ribbon Accent */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-golden-accent text-kashmir-deep font-mono text-[8px] uppercase tracking-widest font-semibold shadow-sm animate-pulse">
                {t("New Release", "नवे प्रकाशन")}
              </div>
            </motion.div>

            {/* Drop Shadow effect on rustic tabletop placement */}
            <div className="absolute bottom-1 left-8 right-8 h-4 bg-black/60 filter blur-xl rounded-full z-0 opacity-80" />
          </div>
        </motion.div>

      </div>

      {/* Elegant Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block select-none pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-mist/40">{t("Scroll Down", "खाली सरकावा")}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-golden-accent/60 to-transparent" />
        </motion.div>
      </div>

    </section>
  );
}
