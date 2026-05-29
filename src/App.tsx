import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import AboutAuthor from './components/AboutAuthor';
import Journey from './components/Journey';
import QuoteCarousel from './components/QuoteCarousel';
import Gallery from './components/Gallery';
import Lessons from './components/Lessons';
import Readers from './components/Readers';
import Tribute from './components/Tribute';
import Footer from './components/Footer';
import { AUTHOR_INFO } from './data';
import { LanguageProvider } from './LanguageContext';

function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-golden-accent transition-all duration-75 ease-out shadow-[0_0_8px_rgba(197,164,120,0.6)]" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-beige-light flex flex-col antialiased selection:bg-golden-accent/35 selection:text-kashmir-deep overflow-x-hidden">
        
        {/* Dynamic scroll indicator */}
        <ReadingProgressBar />

        {/* Dynamic Floating Head Navigation bar */}
        <Navbar authorName={AUTHOR_INFO.penName} authorNameMr={AUTHOR_INFO.penNameMr} />

        {/* Main Narrative Blocks */}
        <main className="flex-grow">
          
          {/* Full screen majestic hero display */}
          <Hero />

          {/* Beautiful storyline & memoir objectives */}
          <AboutBook />

          {/* Meet the author contemplative details */}
          <AboutAuthor />

          {/* Dynamic Interactive locations cards */}
          <Journey />

          {/* Glassmorphic quote slider with original Marathi translations */}
          <QuoteCarousel />

          {/* Pinterest-style staggered masonry with premium Lightbox preview */}
          <Gallery />

          {/* Experiences & life lessons learnt timeline */}
          <Lessons />

          {/* Targeting key benefit readers metrics */}
          <Readers />

          {/* Heartfelt friendship dedication highlight */}
          <Tribute />

        </main>

        {/* Structured coordinates, copyrights and publishing orders footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}

