import { Mail, Phone, Heart, Sparkles } from 'lucide-react';
import { AUTHOR_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-kashmir-deep text-beige-light border-t border-white/5 py-16 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 text-left">
        
        {/* Left column (Author metadata) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-golden-accent animate-pulse" />
            <span className="font-serif text-xl font-semibold tracking-wider text-white">
              {t(AUTHOR_INFO.penName, AUTHOR_INFO.penNameMr)}
            </span>
          </div>
          
          <p className="font-sans text-xs text-kashmir-mist/80 max-w-sm font-light leading-relaxed">
            {t(
              `A heartfelt visual tribute site crafted with pride by a friend to celebrate ${AUTHOR_INFO.name}'s debut travel memoir.`,
              `लेखिका ${t(AUTHOR_INFO.name, AUTHOR_INFO.nameMr)} यांच्या पहिल्या काश्मीर प्रवासवर्णनानिमित्त एका मित्राने सस्नेह तयार केलेली ही एक अनोखी डिजिटल भेट.`
            )}
          </p>

          <p className="font-mono text-[10px] text-golden-accent tracking-widest uppercase">
            "काश्मीर स्पर्शाची गोष्ट" • OH BEAUTIFUL VALLEYS
          </p>
        </div>

        {/* Middle Column (Publication details) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-golden-accent">
            {t("Publication Desk", "प्रकाशन व वितरण")}
          </h4>
          
          <ul className="space-y-2.5 text-xs text-kashmir-mist/90 font-light">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-white">{t("Publisher:", "प्रकाशक:")}</span> 
              <span>{t(AUTHOR_INFO.publisher, AUTHOR_INFO.publisherMr)}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-white">{t("Format:", "स्वरूप:")}</span> 
              <span>{t("Perfect paperbound volume", "देखणी पेपरबॅक आवृत्ती")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-white">{t("Foreword:", "लेख आणि प्रस्तावना:")}</span> 
              <span>{t("Acharya Shri Avinash Dharmadhikari (Former IAS)", "मा. श्री. अविनाश धर्माधिकारी (माजी भा.प्र.से.)")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-white">{t("Status:", "स्थिती:")}</span> 
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-golden-accent font-semibold font-mono uppercase tracking-wider">
                {t("Published & Distributed", "प्रकाशित आणि वितरित")}
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column (Publisher Orders Information) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-golden-accent">
            {t("Order & Inquiries", "नोंदणी आणि चौकशी")}
          </h4>
          
          <p className="font-sans text-[11px] text-kashmir-mist/75 leading-relaxed font-light">
            {t("To procure physical copies of this memoir, reach out directly to the publishing team:", "पुस्तकाची छापील प्रत घरपोच मागवण्यासाठी खालील Swayam प्रकाशन चमूशी थेट संपर्क साधा:")}
          </p>

          <div className="space-y-2 text-xs text-kashmir-mist">
            
            <a 
              href="mailto:swayam.prakashan@gmail.com"
              className="flex items-center gap-2 hover:text-golden-accent transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0 text-golden-accent/80" />
              <span>swayam.prakashan@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 hover:text-golden-accent transition-colors">
              <Phone className="h-4 w-4 shrink-0 text-golden-accent/80" />
              <span>+91 9890811567 / 8888769659</span>
            </div>

          </div>
        </div>

      </div>

      {/* Extreme low-level details */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wide text-kashmir-mist/50">
        
        <div className="flex items-center gap-2 font-light">
          <span>&copy; {currentYear} {t(AUTHOR_INFO.name, AUTHOR_INFO.nameMr)}. {t("All Rights Reserved.", "सर्व हक्क सुरक्षित.")}</span>
        </div>

        <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-golden-accent">
          <span>{t("Made for Pavani with", "पावनीसाठी सस्नेह")}</span>
          <Heart className="h-3 w-3 fill-golden-accent stroke-none animate-pulse" />
          <span>{t("by her friend", "तिच्या एका मित्रातर्फे")}</span>
        </div>

      </div>

    </footer>
  );
}
