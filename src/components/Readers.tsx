import { motion } from 'motion/react';
import { Trees, GraduationCap, MessageSquareText, BookmarkCheck, Heart } from 'lucide-react';
import { READER_BENEFITS } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Readers() {
  const { t } = useLanguage();

  const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    switch (name) {
      case 'Trees':
        return <Trees className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'MessageSquareText':
        return <MessageSquareText className={className} />;
      default:
        return <BookmarkCheck className={className} />;
    }
  };

  return (
    <section id="readers" className="py-24 px-6 bg-beige-light relative overflow-hidden">
      
      {/* Absolute decorative gradient highlights */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-kashmir-light/50 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5 font-semibold">
            <Heart className="h-4 w-4 text-golden-accent animate-pulse" />
            {t("Designed For Seekers", "जिज्ञासूंसाठी आदरपूर्वक")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("Who is this Book for?", "हे पुस्तक कोणासाठी आहे?")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light max-w-lg mx-auto leading-relaxed">
            {t(
              "Whether you're looking to explore the valleys virtually or gather the courage to write your own first chapter, there is a page here for you.",
              "तुम्हाला काश्मीरच्या दऱ्याखोऱ्यांची आभासी सफर करायची असेल किंवा स्वतःचे पहिले लेखन सुरू करण्याचे धैर्य गोळा करायचे असेल, या पुस्तकात तुमच्यासाठी नक्कीच काहीतरी आहे."
            )}
          </p>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {READER_BENEFITS.map((benefit, index) => {
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-white border border-kashmir-mist/30 flex flex-col justify-between hover:shadow-xl hover:border-kashmir-lake/20 transition-all duration-300 relative overflow-hidden text-left group"
              >
                
                {/* Floating organic pattern */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-kashmir-light rounded-full filter blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />

                <div className="space-y-4 relative z-10">
                  
                  {/* Icon badge */}
                  <div className="p-3.5 rounded-2xl bg-beige-light border border-kashmir-mist/10 text-golden-accent inline-block">
                    <IconComponent name={benefit.icon} className="h-6 w-6 stroke-[1.5]" />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-bold block">
                    {t("Ideal Read Type: ", "आदर्श वाचक वर्ग: ")}{t(benefit.target, benefit.targetMr)}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-kashmir-deep">
                    {t(benefit.title, benefit.titleMr)}
                  </h3>

                  <p className="font-sans text-xs text-kashmir-deep/75 font-light leading-relaxed">
                    {t(benefit.description, benefit.descriptionMr)}
                  </p>

                </div>

                {/* Micro accent */}
                <div className="mt-8 pt-4 w-full flex items-center justify-between text-xs font-mono tracking-wider text-kashmir-lake/60 group-hover:text-golden-accent transition-colors">
                  <span>{t("Explore Pages", "पुस्तकाची पाने चाळा")}</span>
                  <BookmarkCheck className="h-4 w-4" />
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing friendly nudge */}
        <div className="mt-16 text-center max-w-md mx-auto p-6 rounded-2xl bg-beige-warm/40 border border-golden-accent/10">
          <p className="font-serif italic text-xs text-kashmir-deep/80 leading-relaxed">
            {t(
              "\"We spend so much time searching on our screens. Sometimes, the answers are waiting in a small, printed book written by someone who dared to listen to the mountains.\"",
              "“आपण आपला बराचसा वेळ पडद्यावर गोष्टी शोधण्यात घालवतो. पण कधीकधी, खरी उत्तरे एखाद्या अशा छोट्याशा छापील पुस्तकात वाट पाहत असतात, जे डोंगर आणि दऱ्यांच्या आवाजाला शांतपणे ऐकण्याचे साहस करणाऱ्या व्यक्तीने लिहिले असते.”"
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
