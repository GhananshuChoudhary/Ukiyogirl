import { motion } from 'motion/react';
import { Heart, Scroll } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Tribute() {
  const { t } = useLanguage();

  return (
    <section id="tribute" className="py-24 px-6 bg-kashmir-deep relative overflow-hidden text-beige-light">
      
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
          
          {/* Sparkle emblem */}
          <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 text-golden-accent">
            <Heart className="h-6 w-6 text-golden-accent animate-pulse" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-golden-accent font-semibold block">
              {t("A Friend's Message", "जीवलग मित्राचे दोन शब्द")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight animate-fade-in">
              {t("Made for Pavani", "पावनीसाठी एक छोटीशी भेट")}
            </h2>
            <div className="w-16 h-[1px] bg-golden-accent/40 mx-auto my-3" />
          </div>

          <blockquote className="font-serif italic text-base md:text-lg text-yellow-55/90 leading-relaxed max-w-2xl mx-auto">
            {t(
              "\"This website exists because I wanted to celebrate someone who had the courage to turn her experiences into words.\"",
              "“हे संकेतस्थळ तयार करण्यामागचं कारण म्हणजे, ज्या व्यक्तीने स्वतःचे अनुभव शब्दांत मांडण्याचं धाडस केलं, तिचा हा प्रवास मला साजरा करायचा होता.”"
            )}
          </blockquote>

          <div className="pt-4 space-y-4 max-w-xl mx-auto text-center">
            <p className="font-sans text-xs md:text-sm text-kashmir-mist/80 leading-relaxed font-light text-center">
              {t(
                "Long before there was a published book, there were notebooks, observations, questions, and countless moments that deserved to be remembered. Watching those memories become a real book has been inspiring.",
                "एक छापील पुस्तक प्रत्यक्षात येण्यापूर्वी अनेक डायऱ्या, निरीक्षणं, प्रश्न आणि जपून ठेवावे असे असंख्य अनमोल क्षण होते, जे कायम लक्षात राहावेत. त्या आठवणी एका खऱ्या पुस्तकाच्या रूपाने आकाराला येताना पाहणं अतिशय प्रेरणादायी आहे."
              )}
            </p>
            <p className="font-sans text-xs md:text-sm text-kashmir-mist/80 leading-relaxed font-light text-center">
              {t(
                "This is my small way of appreciating the effort, curiosity, and sincerity behind \"Yun Hasee Wadiyaan.\"",
                "\"यूँ हसी वादियाँ\" च्या निर्मितीमागे असलेले प्रयत्न, तिचे कुतूहल आणि तिचा सच्चेपणा यांचे कौतुक करण्याचा हा माझा एक छोटासा प्रयत्न आहे."
              )}
            </p>
            <p className="font-sans text-xs md:text-sm text-golden-accent/90 font-mono text-center uppercase tracking-widest font-semibold mt-4">
              {t("Proud of you, Pavani.", "तुझा खूप खूप अभिमान वाटतो, पावनी!")}
            </p>
          </div>

          {/* Tribute Signature Detail */}
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Scroll className="h-4 w-4 text-golden-accent" />
              <span className="font-serif italic text-kashmir-mist">
                {t("\" काश्मीर स्पर्शाची गोष्ट \" — A Touch of Kashmir", "\"काश्मीर स्पर्शाची गोष्ट\" — काश्मीरचा सुखद आणि अद्भुत स्पर्श")}
              </span>
            </div>
            
            <div className="text-center md:text-right flex flex-col md:items-end gap-1 font-sans text-[10px] text-kashmir-mist font-light">
              <span>{t("By her proud friend • 2026", "एका जीवलग मित्राकडून सस्नेह • २०२६")}</span>
              <span className="text-golden-accent font-semibold tracking-wider font-mono">{t("Published: 7 June 2026", "प्रकाशन: ७ जून २०२६")}</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
