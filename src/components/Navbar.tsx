import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, BookOpen, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  authorName: string;
  authorNameMr: string;
}

export default function Navbar({ authorName, authorNameMr }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('The Book', 'पुस्तक'), href: '#about-book' },
    { label: t('The Author', 'लेखिका'), href: '#about-author' },
    { label: t('Destinations', 'ठिकाण'), href: '#destinations' },
    { label: t('Quotes', 'विचार'), href: '#quotes' },
    { label: t('Gallery', 'गॅलरी'), href: '#gallery' },
    { label: t('Lessons', 'धडे'), href: '#lessons' },
    { label: t('Tribute', 'आदरांजली'), href: '#tribute' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-light shadow-md' : 'bg-transparent'
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Sparkles className="h-5 w-5 text-golden-accent animate-pulse" />
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wider text-kashmir-deep transition-colors group-hover:text-kashmir-lake">
              {t(authorName, authorNameMr)}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-xs uppercase tracking-widest text-kashmir-deep/80 hover:text-kashmir-lake transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-golden-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Premium Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kashmir-deep/10 hover:border-kashmir-deep/20 bg-white/30 hover:bg-white/60 text-kashmir-deep text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer shadow-sm select-none"
              title={t('Switch to Marathi', 'इंग्रजीमध्ये बदलावे')}
            >
              <Languages className="h-3.5 w-3.5 text-golden-accent" />
              <span className="font-semibold">{language === 'en' ? 'मराठी' : 'English'}</span>
            </button>

            <a
              href="#about-book"
              className="px-4 py-2 rounded-lg bg-kashmir-deep text-beige-light hover:bg-kashmir-lake font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 hover:shadow-sm"
            >
              <BookOpen className="h-3.5 w-3.5" />
              {t('Explore Book', 'पुस्तक उघडा')}
            </a>
          </div>

          {/* Mobile Actions and Hamburguer */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-kashmir-deep/10 bg-white/40 text-kashmir-deep text-xs font-mono transition-all"
            >
              <Languages className="h-3 w-3 text-golden-accent" />
              <span className="font-semibold text-[10px]">{language === 'en' ? 'मराठी' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-kashmir-deep focus:outline-none"
              aria-label="Toggle Navigation Grid"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 glass shadow-xl rounded-2xl p-6 md:hidden flex flex-col gap-4 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-lg tracking-wide text-beige-light hover:text-kashmir-mist transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#about-book"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 rounded-xl bg-beige-light text-kashmir-deep hover:bg-beige-warm font-sans text-xs uppercase tracking-widest font-semibold transition-all mt-3 flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-kashmir-deep" />
              {t('Explore Book', 'पुस्तक उघडा')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
