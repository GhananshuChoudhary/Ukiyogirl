import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Filter gallery items based on active category trigger
  const filteredGallery = GALLERY.filter((img) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Landscapes') {
      return img.category === 'Peaks & Valleys' || img.category === 'Water & Soul' || img.category === 'Seasons' || img.category === 'Eternal Ice';
    }
    if (selectedCategory === 'The Author') return img.category === 'The Author';
    if (selectedCategory === 'The Book') return img.category === 'The Book';
    return true;
  });

  const categories = ['All', 'Landscapes', 'The Author', 'The Book'];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'All':
        return t('All', 'सर्व छायाचित्रे');
      case 'Landscapes':
        return t('Landscapes', 'निसर्ग दृश्ये');
      case 'The Author':
        return t('The Author', 'लेखिका');
      case 'The Book':
        return t('The Book', 'पुस्तक');
      default:
        return cat;
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-beige-light relative overflow-hidden">
      
      {/* Structural decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-golden-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5">
            <Camera className="h-4 w-4" />
            {t("Vivid Snapshots", "जिवंत क्षणचित्रे")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("The Kashmir Gallery", "काश्मीर प्रवास गॅलरी")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
            {t("Beautiful Kashmiri landscapes, manuscript drafts, and behind-the-scenes memories captured during her expedition.", "या प्रवासादरम्यान टिपलेली अद्भुत काश्मिरी दृश्ये, हस्तलिखितांचे मसुदे आणि प्रवासातील गोड स्मृती.")}
          </p>
        </div>

        {/* Category Toggles Slider */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-kashmir-deep text-white shadow-md'
                  : 'bg-white border border-kashmir-mist/30 hover:border-kashmir-lake/40 text-kashmir-deep/80'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Pinterest-style staggered masonry column grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredGallery.map((img, idx) => {
              // Map the global list index in filtered array for lightbox triggers
              return (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-md border border-kashmir-mist/20 aspect-auto bg-white cursor-pointer"
                >
                  
                  {/* Photo itself */}
                  <img
                    src={img.src}
                    alt={t(img.caption, img.captionMr)}
                    className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Elegant Hover overlay details */}
                  <div className="absolute inset-0 bg-kashmir-deep/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    
                    {/* Zoom Icon overlay */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm self-end">
                      <Eye className="h-4.5 w-4.5 text-golden-accent" />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-semibold block mb-1">
                      {t(img.category, img.categoryMr)}
                    </span>
                    <p className="font-serif italic text-sm text-beige-light leading-relaxed mb-1">
                      {t(img.caption, img.captionMr)}
                    </p>
                    <span className="font-mono text-[8px] text-kashmir-mist block mt-2">
                      {t("Click to expand photo", "मोठे करण्यासाठी क्लिक करा")}
                    </span>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Cinematic Premium Lightbox Overlay Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-kashmir-deep/95 flex flex-col items-center justify-center p-4 md:p-8"
              onClick={() => setLightboxIndex(null)}
            >
              
              {/* Close Button top right */}
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-20"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox Zoomed Image"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider Controls Container */}
              <div 
                className="relative max-w-5xl w-full flex items-center justify-center gap-4 z-10"
                onClick={(e) => e.stopPropagation()} // Stop overlay click close
              >
                
                {/* Left trigger arrow */}
                <button
                  onClick={handlePrev}
                  className="hidden md:flex p-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  aria-label="Previous Lightbox Image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Display item context */}
                <div className="flex flex-col items-center gap-4 max-w-3xl w-full">
                  <motion.div
                    key={filteredGallery[lightboxIndex].id}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative bg-black/40 rounded-2xl overflow-hidden border border-white/5 max-h-[70vh] flex items-center justify-center"
                  >
                    <img
                      src={filteredGallery[lightboxIndex].src}
                      alt={t(filteredGallery[lightboxIndex].caption, filteredGallery[lightboxIndex].captionMr)}
                      className="max-h-[70vh] max-w-full object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Caption detail overlay at low-bar */}
                  <div className="text-center space-y-1 px-4 max-w-xl">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent">
                      {t(filteredGallery[lightboxIndex].category, filteredGallery[lightboxIndex].categoryMr)} ({lightboxIndex + 1} / {filteredGallery.length})
                    </span>
                    <p className="font-serif italic text-sm md:text-base text-beige-light leading-relaxed">
                      {t(filteredGallery[lightboxIndex].caption, filteredGallery[lightboxIndex].captionMr)}
                    </p>
                  </div>
                </div>

                {/* Right trigger arrow */}
                <button
                  onClick={handleNext}
                  className="hidden md:flex p-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  aria-label="Next Lightbox Image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

              </div>

              {/* Mobile controls tray */}
              <div className="flex md:hidden gap-6 mt-6 z-10" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handlePrev}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 text-beige-light"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 text-beige-light"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
