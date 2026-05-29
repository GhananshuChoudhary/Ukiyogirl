import { motion } from 'motion/react';
import { Compass, Feather, Heart, Milestone, Award } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Lessons() {
  const { t } = useLanguage();

  // Helper to map string IDs to Lucide React components dynamically
  const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    switch (name) {
      case 'Compass':
        return <Compass className={className} />;
      case 'Feather':
        return <Feather className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      default:
        return <Milestone className={className} />;
    }
  };

  return (
    <section id="lessons" className="py-24 px-6 bg-beige-warm/30 relative overflow-hidden">
      
      {/* Absolute serene dark aesthetic backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-kashmir-light/40 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5">
            <Milestone className="h-4.5 w-4.5" />
            {t("Internal Transformations", "अंतर्मनाचा शांत प्रवास")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("Experiences & Lessons Learned", "अनुभव आणि शिकलेले धडे")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light max-w-lg mx-auto leading-relaxed">
            {t(
              "The external peaks of Kashmir were mirrored by deep internal milestones. Read what Ukiyogirl uncovered about fear, mindfulness, and hospitality.",
              "काश्मीरची उत्तुंग बाह्य शिखरे जणू अंतर्मनातील सखोल टप्प्यांचे प्रतिबिंब होते. उकियो गर्लने भीती, सजगता (mindfulness) आणि मानवी आदरातिथ्याबद्दल काय अनुभवले ते वाचा."
            )}
          </p>
        </div>

        {/* Narrative columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {EXPERIENCES.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.18 }}
                className="p-8 rounded-3xl bg-white border border-kashmir-mist/20 hover:border-golden-accent/25 transition-all duration-300 relative flex flex-col justify-between hover:shadow-xl group"
              >
                
                {/* Header indicators */}
                <div className="space-y-4">
                  
                  {/* Step counter and icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-beige-light border border-kashmir-mist/10 text-golden-accent transition-transform duration-300 group-hover:scale-105">
                      <IconComponent name={exp.icon} className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    
                    {/* Big beautiful numeral index */}
                    <span className="font-serif text-4xl md:text-5xl font-light text-golden-accent/20 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-kashmir-lake font-bold block">
                      {t(exp.subtitle, exp.subtitleMr)}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-kashmir-deep">
                      {t(exp.title, exp.titleMr)}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-kashmir-deep/75 font-light leading-relaxed pt-2">
                    {t(exp.text, exp.textMr)}
                  </p>

                </div>

                {/* Wisdom Callout Frame on bottom */}
                <div className="mt-8 pt-6 border-t border-kashmir-light bg-beige-light/40 -mx-8 -mb-8 p-8 rounded-b-3xl">
                  <span className="font-serif italic text-xs font-semibold text-golden-accent flex items-center gap-1.5 mb-1">
                    <Award className="h-3.5 w-3.5" />
                    {t("Wisdom Gained:", "मिळालेली शिकवण:")}
                  </span>
                  <p className="font-serif italic text-xs leading-relaxed text-kashmir-deep/80">
                    "{t(exp.lesson, exp.lessonMr)}"
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
