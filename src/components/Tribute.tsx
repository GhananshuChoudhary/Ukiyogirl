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
              {t("A Friend’s Heartfelt Honoring", "एका चांगल्या मित्राकडून सस्नेह दाद")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
              {t("A Tribute to Courage", "जिद्द आणि कल्पकतेला सलाम")}
            </h2>
            <div className="w-16 h-[1px] bg-golden-accent/40 mx-auto my-3" />
          </div>

          <blockquote className="font-serif italic text-base md:text-lg text-yellow-55/90 leading-relaxed max-w-2xl mx-auto">
            {t(
              "\"This website was created as a tribute to celebrate the dedication, courage, and creativity behind turning raw travel experiences, cold nights, and warm encounters into a published book.\"",
              "“हे संकेतस्थळ काश्मीरमधील प्रवासातील गोठवणाऱ्या रात्री, तिथल्या माणसांचे जिव्हाळ्याचे प्रसंग आणि अद्भुत अनुभव एका देखण्या पुस्तकाच्या रूपाने जगासमोर आणणाऱ्या तिच्या समर्पणवृत्तीला, जिद्दीला आणि कल्पकतेला दिलेला सस्नेह प्रतिसाद आहे.”"
            )}
          </blockquote>

          <div className="pt-4 space-y-4 max-w-lg mx-auto text-center md:text-left">
            <p className="font-sans text-xs text-kashmir-mist/80 leading-relaxed font-light text-center">
              {t(
                "At an age when most are looking for instructions, Pavani (Ukiyogirl) decided to author her own coordinates. She took her vulnerability, her pensiveness, her Marathi roots, her dreamlike explorations of Himalayan lakes, and bound them forever in ink.",
                "ज्या वयात बहुतांश लोक मार्गदर्शनाच्या शोधात असतात, तिथे पावनीने (Ukiyogirl) स्वतःच्या कर्तृत्वाने एक आगळी वाट निवडली. तिने तिचे भावविश्व, चिंतनशीलता, मराठी मातीचे संस्कार आणि हिमालयातील गोठलेल्या सरोवरांचा नयनरम्य प्रवास शब्दांच्या अद्भुत रंगांत कायमचा बांधून ठेवला."
              )}
            </p>
            <p className="font-sans text-xs text-golden-accent/90 font-mono text-center uppercase tracking-widest font-semibold">
              {t("Proud of your first publication, Pavani!", "तुझ्या या पहिल्या देखण्या पुस्तकाबद्दल आम्हा सर्वांना सार्थ अभिमान आहे, पावनी!")}
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
            
            <span className="font-sans text-[10px] text-kashmir-mist font-light">
              {t("By her proud friend • 2026", "एका जीवलग मित्राकडून सस्नेह • २०२६")}
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
