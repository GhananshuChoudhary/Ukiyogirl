import { motion } from 'motion/react';
import { Heart, Scroll } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Tribute() {
  const { t } = useLanguage();

  return (
    <section id="tribute" className="py-24 px-6 bg-[#1B365D] relative overflow-hidden text-[#FDFBF7]">
      
      {/* Absolute misty visuals backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-kashmir-lake/20 rounded-full filter blur-[140px] pointer-events-none" />
        
        {/* Shifting fog light overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay animate-fog-slow"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Tribute Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glass p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl space-y-8 max-w-3xl mx-auto"
        >
          
          <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 text-golden-accent">
            <Heart className="h-8 w-8 animate-pulse-slow fill-golden-accent/20" />
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
              {t("For Pavani,", "पावनीसाठी,")}
            </h2>
            
            <p className="font-sans text-sm md:text-base text-[#D5E1ED] font-light leading-relaxed">
              {t(
                "This website exists because I wanted to celebrate someone who had the courage to turn her experiences into words.",
                "ही वेबसाइट साकारण्यामागचा उद्देश एका अशा व्यक्तीचे कौतुक करणे आहे, जिच्यात स्वतःच्या अनुभवांना शब्दांत मांडण्याचे धैर्य होते."
              )}
            </p>

            <p className="font-sans text-sm md:text-base text-[#D5E1ED] font-light leading-relaxed">
              {t(
                "Long before there was a published book, there were notebooks, observations, questions, and countless moments that deserved to be remembered. Watching those memories become a real book has been inspiring.",
                "पुस्तकाच्या रूपात प्रकाशित होण्यापूर्वी डायऱ्यांमधील पाने, बारकाईने केलेले निरीक्षण, मनातले प्रश्न आणि अशा असंख्य आठवणी होत्या ज्या जपून ठेवण्यासारख्या होत्या. त्या सर्व आठवणींचे एका देखण्या पुस्तकात रूपांतर होताना पाहणे अत्यंत प्रेरणादायी ठरले आहे."
              )}
            </p>

            <p className="font-sans text-sm md:text-base text-[#D5E1ED] font-light leading-relaxed">
              {t(
                'This is my small way of appreciating the effort, curiosity, and sincerity behind "Yun Hasee Wadiyaan."',
                "'यूँ हसी वादियाँ' या पुस्तकामागे घेतलेले अफाट परिश्रम, जिज्ञासा आणि प्रामाणिकपणाचे कौतुक करण्याचा हा माझा एक छोटासा प्रयत्न आहे."
              )}
            </p>
          </div>

          <div className="pt-6">
            <div className="w-16 h-[1px] bg-golden-accent/40 mx-auto" />
            <p className="font-serif italic text-xl text-golden-accent mt-6 font-medium">
              {t("Proud of you, Pavani.", "मला तुझा खूप अभिमान आहे, पावनी.")}
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-[#D5E1ED]/60 mt-2">
              {t("Soham", "सोहम")}
            </p>
          </div>

        </motion.div>

        {/* Small thematic detail below the tribute */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <Scroll className="h-5 w-5 text-white/20" />
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
            {t("End of the Digital Experience", "डिजिटल सफरीची सांगता")}
          </p>
        </div>

      </div>
    </section>
  );
}
