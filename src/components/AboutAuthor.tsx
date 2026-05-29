import { motion } from 'motion/react';
import { Award, Compass, Heart, BookOpen } from 'lucide-react';
import { AUTHOR_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function AboutAuthor() {
  const { t } = useLanguage();

  return (
    <section id="about-author" className="py-24 px-6 bg-beige-warm/40 relative overflow-hidden">
      
      {/* Structural background highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-golden-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[500px] h-[500px] bg-kashmir-light/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title container */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5">
            <Heart className="h-4 w-4" />
            {t("The Soul behind the Pen", "लेखणी मागचा संवेदनशील चेहरा")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("Meet the Author", "लेखिकेविषयी थोडेसे")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
        </div>

        {/* Content layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author picture with organic framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group p-4 max-w-sm w-full">
              
              {/* Backing structural color card */}
              <div className="absolute inset-0 bg-kashmir-deep rounded-2xl transform rotate-3 scale-[1.01] opacity-90 transition-transform duration-500 group-hover:rotate-1" />
              
              {/* Elegant floating placeholder container representing author's spirit without photographic image */}
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-gradient-to-b from-kashmir-deep to-kashmir-lake transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1 flex flex-col justify-between p-8 text-left">
                
                {/* Artistic background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                <div className="space-y-2 relative z-10">
                  <div className="w-8 h-px bg-golden-accent" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-golden-accent">
                    {t("The Spirit of Ukiyo", "उकियो दर्शन आणि भावना")}
                  </span>
                </div>

                <div className="space-y-4 relative z-10">
                  <Heart className="h-10 w-10 text-golden-accent/80 stroke-[1.2] animate-pulse" />
                  <div>
                    <h4 className="font-serif text-2xl font-light text-beige-light leading-snug">
                      {t("ukiyo girl", "उकियो गर्ल")}
                    </h4>
                    <p className="font-sans text-[11px] text-kashmir-mist tracking-wide uppercase mt-1">
                      काश्मीर स्पर्शाची गोष्ट
                    </p>
                  </div>
                </div>

              </div>

              {/* Little Floating Badge */}
              <div className="absolute -bottom-2 -right-2 z-20 bg-golden-accent text-kashmir-deep px-4 py-2 rounded-xl shadow-lg border border-beige-light flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide">
                <Award className="h-4 w-4 animate-bounce" />
                {t("Ukiyo Girl", "उकियो गर्ल")}
              </div>

            </div>
          </div>

          {/* Right Column: Bio and Motivational blocks */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-kashmir-lake font-bold block">
                {t("Reflective Biography", "भावुक जीवनप्रवास")}
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-light text-kashmir-deep leading-tight">
                {t(AUTHOR_INFO.name, AUTHOR_INFO.nameMr)}
              </h3>
              <p className="font-mono text-xs text-golden-accent italic">
                {t("Writing under the pen name ", "या टोपणनावाने लेखन ")}
                <span className="font-sans font-semibold not-italic">"{t(AUTHOR_INFO.penName, AUTHOR_INFO.penNameMr)}"</span>
              </p>
            </div>

            <p className="font-sans text-sm md:text-base text-kashmir-deep/80 font-light leading-relaxed">
              {t(AUTHOR_INFO.bio, AUTHOR_INFO.bioMr)}
            </p>

            <div className="p-6 rounded-2xl border border-golden-accent/15 bg-white/40 space-y-3 shadow-sm text-sm">
              <h4 className="font-serif text-base font-semibold text-kashmir-deep flex items-center gap-2">
                <Compass className="h-4.5 w-4.5 text-golden-accent" />
                {t("Her Driving Motivation", "तिची मुख्य प्रेरणा")}
              </h4>
              <p className="font-sans text-kashmir-deep/70 font-light leading-relaxed">
                {t(AUTHOR_INFO.motivation, AUTHOR_INFO.motivationMr)}
              </p>
            </div>

            {/* Publication metadata stats panel */}
            <div className="pt-4 border-t border-kashmir-deep/5 space-y-4">
              <h4 className="font-serif text-xs uppercase tracking-widest text-golden-accent font-bold">
                {t("Physical Book Particulars", "पुस्तकाचे तांत्रिक तपशील")}
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="p-3.5 rounded-xl bg-white/60 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                    {t("Publisher", "प्रकाशक")}
                  </span>
                  <span className="font-sans text-xs font-semibold text-kashmir-deep mt-0.5 block">
                    {t(AUTHOR_INFO.publisher, AUTHOR_INFO.publisherMr)}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/60 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                    {t("Volume Price", "किंमत")}
                  </span>
                  <span className="font-sans text-xs font-semibold text-kashmir-deep mt-0.5 block">
                    {AUTHOR_INFO.details.price}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/60 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                    {t("Format", "पृष्ठे (पाने)")}
                  </span>
                  <span className="font-sans text-xs font-semibold text-kashmir-deep mt-0.5 block">
                    {AUTHOR_INFO.details.pages} {t("Pages", "पाने")}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/60 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-deep/50 block">
                    {t("Language Option", "भाषा पर्याय")}
                  </span>
                  <span className="font-sans text-xs font-semibold text-kashmir-deep mt-0.5 block">
                    {t(AUTHOR_INFO.details.language, AUTHOR_INFO.details.languageMr)}
                  </span>
                </div>

              </div>
              
              {/* Foreword/Award recommendation details hook */}
              <div className="p-4 rounded-xl border border-kashmir-lake/15 bg-kashmir-light/60 flex items-start gap-3 mt-4">
                <BookOpen className="h-5 w-5 text-kashmir-lake shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-wider font-semibold text-kashmir-deep">
                    {t("Precious Introductory Guide", "अमुल्य प्रस्तावना आणि परिचय")}
                  </h5>
                  <p className="font-sans text-[11px] text-kashmir-deep/70 mt-1 leading-relaxed">
                    {t(AUTHOR_INFO.details.recommendation, AUTHOR_INFO.details.recommendationMr)} {t("Features deep, philosophic annotations guiding readers into a meditative travel mindset.", "यात वाचकाला एका ध्यानस्थ प्रवासी मानसिकतेत घेऊन जाणाऱ्या सखोल आणि तत्त्वज्ञानयुक्त टिप्पण्या आहेत.")}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
