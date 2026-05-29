import { Destination, Quote, TimelineEvent, ExperienceLesson, GalleryImage, ReaderBenefit } from './types';
import heroBgImg from './assets/images/kashmir_hero_1780045359772.png';
import bookCoverImg from './assets/images/book_cover_1780045380435.png';
import authorPortraitImg from './assets/images/author_portrait_1780045401192.png';
import lakeMistyImg from './assets/images/kashmir_lake_1780045423673.png';
import valleyGreenImg from './assets/images/kashmir_valley_1780045444779.png';
import lidderRiverImg from './assets/images/lidder_river_pahalgam_1780083959555.png';

// Import our generated assets directly so Vite compiles and serves them on all devices
export const IMAGES = {
  heroBg: heroBgImg,
  bookCover: bookCoverImg,
  authorPortrait: authorPortraitImg,
  lakeMisty: lakeMistyImg,
  valleyGreen: valleyGreenImg,
  lidderRiver: lidderRiverImg,
};

export const AUTHOR_INFO = {
  name: 'Ukiyogirl Pavani Jagtap',
  nameMr: 'उकियो गर्ल पावनी जगताप',
  penName: 'Ukiyogirl',
  penNameMr: 'उकियो गर्ल (Ukiyogirl)',
  tagline: 'More than a journey through Kashmir — a journey of experiences, people, nature, and self-discovery.',
  taglineMr: 'काश्मीरचा प्रवास म्हणजे केवळ फिरणे नव्हे — तर तो अनुभव, लोक, निसर्ग आणि स्वतःच्या शोधाचा एक सुंदर प्रवास आहे.',
  bio: 'Pavani Jagtap, writing under the beautiful pseudonym "ukiyo girl", represents a fresh, brave, and deeply observant young voice. Translating the transient, floating moments of life (ukiyo) into poetic prose, she set out to explore the peaks and valleys of Kashmir. At the threshold of formal citizenship, she successfully transformed emotional logs, personal anxieties, of-the-earth wisdom, and unforgettable nature encounters into a published literary memoir.',
  bioMr: 'पावनी जगताप, जी "ukiyo girl" या टोपणनावाने लिहिते, एक नवा, धाडसी आणि अत्यंत संवेदनशील तरुण आवाज आहे. आयुष्यातील क्षणभंगुर, तरंगणारे क्षण (उकियो) काव्यात्मक गद्यात मांडत, तिने काश्मीरच्या पर्वत आणि खोऱ्यांचा शोध घेण्यास सुरुवात केली. तरुण वयातच तिने आपल्या भावनिक नोंदी, वैयक्तिक शंका, मातीशी जोडलेलं शहाणपण आणि निसर्गाचे अविस्मरणीय अनुभव एका सुंदर साहित्यकृतीमध्ये रूपांतरित केले.',
  motivation: 'Driven by the philosophy that to truly see and experience nature, one must embrace fearlessness ("निर्भय"), Pavani wanted to record a Kashmir not found through standard search engine algorithms. Her book is a heartfelt inquiry into how local hospitality, cold mist, and vast expanses heal and foster quiet internal growth in youth.',
  motivationMr: 'निसर्गाचा खरा अनुभव घ्यायचा असेल तर आधी "निर्भय" व्हावे लागते, या विचाराने प्रेरित होऊन पावनीने सामान्य सर्च इंजिनच्या अल्गोरिदममध्ये न सापडणारे काश्मीर टिपायचे ठरवले. तिचे पुस्तक म्हणजे स्थानिक आदरातिथ्य, थंड धुकं आणि अथांग डोंगररांगा कशा प्रकारे आपल्या जखमा बऱ्या करतात आणि शांत अंतर्गत वाढीला हातभार लावतात, याचा शोध आहे.',
  bookTitle: "Yoo 'Haseen' Waadiyan",
  bookTitleMr: "यू 'हसीन' वादिया",
  bookSubtitle: "Glimpses of Kashmir (काश्मीर स्पर्शाची गोष्ट)",
  bookSubtitleMr: "काश्मीर स्पर्शाची गोष्ट (Glimpses of Kashmir)",
  publisher: 'Swayam Prakashan (स्वय प्रकाशन)',
  publisherMr: 'स्वय प्रकाशन (Swayam Prakashan)',
  details: {
    price: '₹199',
    pages: '144',
    language: 'Marathi & English reflections',
    languageMr: 'मराठी आणि इंग्रजी विचार',
    recommendation: 'Featuring a stellar foreword by Former IAS Officer Acharya Shri Avinash Dharmadhikari.',
    recommendationMr: 'माजी आय.ए.एस. अधिकारी आचार्य श्री अविनाश धर्माधिकारी यांच्या उत्कृष्ट प्रस्तावनेसह सुशोभित.'
  }
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'step-1',
    title: 'An Inner Spark & Fearlessness',
    titleMr: 'अंतर्मनातील पालवी आणि निर्भयता',
    stage: 'Step 1: The Departure',
    stageMr: 'टप्पा १ : प्रवासाची सुरुवात',
    description: 'Setting off at a tender age with a desire to touch the pristine, unsearched realities of Kashmir.',
    descriptionMr: 'काश्मीरच्या मूळ, अथांग अनपेक्षित सत्याला स्पर्श करण्याच्या इच्छेने कोवळ्या वयात प्रवासाला निघणे.',
    detail: 'To experience life unfiltered, one must step past the familiar comforts. Overcoming hesitation, Pavani packed her journal with one target: to look Kashmir in the eyes.',
    detailMr: 'आयुष्याचा न फिल्टर केलेला अनुभव घेण्यासाठी, नेहमीच्या सुखसोयींच्या पलीकडे पाऊल ठेवावे लागते. भीतीवर मात करत, पावनीने फक्त एकच ध्येय ठेवून डायरी सोबत घेतली: काश्मीरला अगदी जवळून पाहणे.'
  },
  {
    id: 'step-2',
    title: 'The Whispers of Dal Lake',
    titleMr: 'दाल लेकचे गुंजन',
    stage: 'Step 2: The Living Water',
    stageMr: 'टप्पा २ : प्रवाही जीवन',
    description: 'Spending quiet mornings on shikaras, absorbing the lifestyle of lake dwellers.',
    descriptionMr: 'शिकारावर शांत सकाळ घालवणे, तलावातील लोकांची जीवनशैली जवळून अनुभवणे.',
    detail: 'Floating amidst morning fog and lotus gardens. Learning how continuous local life on water has its own rhythm, far removed from the rush of metropolitan cities.',
    detailMr: 'सकाळचे धुकं आणि कमळांच्या बागांमधून तरंगत फिरणे. महानगरांच्या धावपळीपासून दूर, पाण्यावरील स्थानिक जीवनाला स्वतःची एक संथ आणि सुंदर लय कशी असते, हे अनुभवणे.'
  },
  {
    id: 'step-3',
    title: 'Conversations in the Pine Valleys',
    titleMr: 'पाईन खोऱ्यांमधील सुसंवाद',
    stage: 'Step 3: The People of the Soil',
    stageMr: 'टप्पा ३ : मातीची माणसे',
    description: 'Embracing the profound hospitality and stories of local Kashmiri hosts.',
    descriptionMr: 'स्थानिक काश्मिरी लोकांचे अगत्य आणि त्यांच्याकडून तिथल्या सुंदर कथा ऐकणे.',
    detail: 'Discovering that the ultimate beauty of Kashmir lies not just in its dramatic landscapes, but in the warmth of its inhabitants who share kahwa and ancient stories.',
    detailMr: 'काश्मीरचे खरे सौंदर्य केवळ तिथल्या डोंगरांमध्ये नसून, कावा चहा आणि जुन्या गोष्टी शेअर करणाऱ्या तिथल्या माणसांच्या आपुलकीमध्ये आहे, हे समजणे.'
  },
  {
    id: 'step-4',
    title: 'Penning Down the "Un-Googleable"',
    titleMr: 'गुगलवर न सापडणाऱ्या गोष्टी कागदावर उतरवणे',
    stage: 'Step 4: Putting Ink to Senses',
    stageMr: 'टप्पा ४ : अनुभूतींची शाई',
    description: 'Translating emotional logs, daily sensory peaks, and cold mountain breeze into chapters.',
    descriptionMr: 'भावनिक नोंदी, रोजचे अनुभव आणि डोंगरावरून येणारी थंड वाऱ्याची झुळूक प्रकरणांमध्ये शब्दबद्ध करणे.',
    detail: 'Writing primarily on the transition into adulthood, documenting small stories, spiritual awakenings, and tiny moments that no travel agency or map pin can ever highlight.',
    detailMr: 'प्रामुख्याने तारुण्यातील बदलांवर लिहीत, छोट्या कथा, अध्यात्मिक जागृती आणि कोणत्याही ट्रॅव्हल एजन्सी किंवा नकाशावर न सापडणारे सूक्ष्म क्षण डायरीत टिपणे.'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-dal',
    name: 'Dal Lake & Floating Meadows',
    nameMr: 'दाल लेक आणि तरंगती कुरणे',
    description: 'Where mornings are defined by rows of colorful shikaras, silent drifting mist, and floating flower markets carrying centuries of cultural heritage.',
    descriptionMr: 'जिथे सकाळची सुरुवात रंगीबेरंगी शिकारांच्या ओळींनी, संथ धुक्याने आणि शतकांची सांस्कृतिक परंपरा जपणाऱ्या तरंगत्या फुलांच्या बाजारपेठेने होते.',
    tag: 'Serenity',
    tagMr: 'शांतता',
    image: IMAGES.lakeMisty,
    season: 'Autumn / Spring',
    seasonMr: 'शरद / वसंत ऋतू',
    climate: 'Chilly morning breeze',
    climateMr: 'थंडगार सकाळची हवा'
  },
  {
    id: 'dest-gulmarg',
    name: 'Pine-Forested Valleys of Gulmarg',
    nameMr: 'गुलमर्गची देवदार (पाईन) जंगले',
    description: 'Expansive pastures surrounded by majestic snow-clad Himalayan peaks, where mist floats lazily between giant pines and wildflowers paint the earth.',
    descriptionMr: 'बर्फाच्छादित भव्य हिमालयाने वेढलेले अथांग कुरण, जिथे देवदार झाडांमधून धुकं रेंगाळतं आणि रांगडी रानफुले जमिनीला रंगीबेरंगी करतात.',
    tag: 'Majestic Peaks',
    tagMr: 'भव्य शिखरे',
    image: IMAGES.valleyGreen,
    season: 'Year-round',
    seasonMr: 'वर्षभर कधीही',
    climate: 'Crisp alpine air',
    climateMr: 'ल्हाददायक डोंगराळ हवा'
  },
  {
    id: 'dest-pahalgam',
    name: 'Lidder River',
    nameMr: 'लिडर नदी',
    description: 'The glorious, icy-blue glacial waters of the Lidder River rushing through Pahalgam, flowing gracefully amidst dense pine forests.',
    descriptionMr: 'पहलगामच्या सुंदर खोऱ्यांमधून खळाळत वाहणारे, निळेशार थंडगार लिडर नदीचे पाणी, जे आजूबाजूच्या घनदाट देवदार वनांची शोभा वाढवते.',
    tag: 'Glacial Waters',
    tagMr: 'थंडगार प्रवाह',
    image: IMAGES.lidderRiver,
    season: 'Summer Glow',
    seasonMr: 'उन्हाळ्याचा काळ',
    climate: 'Cool and rushing',
    climateMr: 'थंड आणि प्रवाही हवा'
  },
  {
    id: 'dest-sonamarg',
    name: 'The Meadow of Gold',
    nameMr: 'सोनमर्ग - सोन्याचे कुरण',
    description: 'Framed by grand glaciers and high-altitude mountain passes. A gateway to ancient trade routes where the ground sits closest to the clouds.',
    descriptionMr: 'भव्य हिमनद्या आणि उंच घाटांनी नटलेले. प्राचीन व्यापारी मार्गांचे प्रवेशद्वार, जिथे जमीन जणू ढगांच्या अगदी जवळ पोहोचल्यासारखी वाटते.',
    tag: 'Eternal Snow',
    tagMr: 'शाश्वत बर्फ',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800',
    season: 'Early Summer',
    seasonMr: 'उन्हाळ्याची सुरुवात',
    climate: 'Snow-cooled wind',
    climateMr: 'बर्फाळून आलेला थंड वारा'
  }
];

export const QUOTES: Quote[] = [
  {
    id: 'q1',
    text: "True nature and continuous life cannot be googled. To experience them, you have to become 'fearless' (निर्भय) and let the land lead you inside your own soul.",
    textMr: "खरा निसर्ग आणि अखंड जीवन गुगलवर शोधता येत नाही. ते अनुभवण्यासाठी, तुम्हाला 'निर्भय' व्हावे लागते आणि या मातीला तुमच्या आत्म्यात स्थान द्यावे लागते.",
    bookText: "खरा निसर्ग आणि अव्याहत जीवन प्रत्यक्ष पाहून अनुभवण्यासाठी तुम्हाला 'निर्भय' व्हावे लागेल...!",
    chapter: "Introduction: The Call of Mist",
    chapterMr: "प्रस्तावना: धुक्याची साद",
    page: "Page 05",
    pageMr: "पान ०५"
  },
  {
    id: 'q2',
    text: "Encountering the honest, soil-scented people of Kashmir and sharing their daily moments makes you look in the mirror and discover who you truly are.",
    textMr: "काश्मीरच्या प्रामाणिक आणि मातीचा गंध असलेल्या माणसांना भेटणे आणि त्यांच्या क्षणांमध्ये सहभागी होणे, आपल्याला आरशात स्वतःला पाहण्यास आणि आपण कोण आहोत हे शोधण्यास भाग पाडते.",
    bookText: "खरा निसर्ग, त्या-त्या मातीतील माणसं आणि त्यांच्याबरोबर आलेलेले अनुभव यांना सामोरे जातच तुम्ही स्वतःला शोधता...",
    chapter: "Chapter 3: The Clay Cup of Kahwa",
    chapterMr: "प्रकरण ३: कावाचा मातीचा कप",
    page: "Page 42",
    pageMr: "पान ४२"
  },
  {
    id: 'q3',
    text: "Every single moment, lived with an urgent passion to exist fully in that precise transition, became a small page in this young girl's tribute to Kashmir's touch.",
    textMr: "प्रत्येक क्षण, त्याच क्षणात पूर्णपणे जगण्याच्या उत्कट इच्छेने आणि त्या कोवळ्या वयात अनुभवलेला काश्मीरचा स्पर्श या पुस्तकाच्या पानापानांतून उमटला आहे.",
    bookText: "प्रत्येक क्षण त्याच क्षणात जगण्याच्या ऊर्मीने पोरसवदा वयात काश्मीरमध्ये प्रत्यक्ष अनुभवलेली ही गोष्ट आहे.",
    chapter: "Chapter 7: Writing in the Cold",
    chapterMr: "प्रकरण ७: थंडीत केलेली लेखन साधना",
    page: "Page 98",
    pageMr: "पान ९८"
  }
];

export const EXPERIENCES: ExperienceLesson[] = [
  {
    id: 'l1',
    title: 'Conquering the Mirror of Fear',
    titleMr: 'भीतीच्या आरशावर मात',
    subtitle: 'Internal Shift',
    subtitleMr: 'अंतर्गत बदल',
    icon: 'Compass',
    text: 'Traveling alone to high altitudes forces a quietening of modern insecurities. Confronting vast silent mountains turns external noise into clean internal space.',
    textMr: 'एकट्याने उंच पर्वतांवर प्रवास केल्याने आपल्या अनेक आधुनिक असुरक्षितता शांत होतात. महाकाय, शांत डोंगररांगांना सामोरे जाताना बाहेरचे कोलाहल विरून अंतर्मनात एक सुंदर शांतता निर्माण होते.',
    lesson: 'Fearlessness ("निर्भयता") is not the absence of doubt, but the courage to sit in companionship with the unknown.',
    lessonMr: 'भीती नसणे म्हणजे शंकेचा अभाव नव्हे, तर अनोळखी प्रवासातही स्वतःच्या अस्तित्वावर विश्वास ठेवून पुढे जाण्याचे धैर्य असणे होय.'
  },
  {
    id: 'l2',
    title: 'The Art of Un-Googleable Truths',
    titleMr: 'गुगलवर न सापडणाऱ्या सत्यांची कला',
    subtitle: 'Mindfulness',
    subtitleMr: 'जागरुकता / ध्यान',
    icon: 'Feather',
    text: 'Standard travel reviews index coordinates but entirely skip the warmth of a local house-owner wrapping a warm blanket around a shivering traveler, or the precise smell of woodfire mixing with morning pine fog.',
    textMr: 'नियमित प्रवास मार्गदर्शक केवळ पत्ते आणि गुगल पिन देतात, परंतु थंडीत कुडकुडणाऱ्या प्रवाशाभोवती प्रेमाने उबदार घोंगडी गुंडाळणारा स्थानिक माणूस आणि लाकूड पेटवून निघणारा धूर अन् पाईनचे धुकं यांचे मिश्रण यातील प्रेम त्यात कधीच सापडत नाही.',
    lesson: 'The most precious moments of life cannot be digitized or cataloged; they must be felt directly.',
    lessonMr: 'आयुष्यातील सर्वात अनमोल क्षण कधीही डिजिटल स्वरूपात जतन करता येत नाहीत; ते केवळ प्रत्यक्ष जागेवरच अनुभवावे लागतात.'
  },
  {
    id: 'l3',
    title: 'Rooted Simplicity',
    titleMr: 'मातीशी जोडलेले साधेपण',
    subtitle: 'Human Connection',
    subtitleMr: 'मानवी नातेसंबंध',
    icon: 'Heart',
    text: 'Living alongside the boat-dwellers on Dal Lake reveals an exquisite humility. Contentment is defined not by accumulation, but by the steady, graceful rhythm of day and night, water and wind.',
    textMr: 'दाल लेकमधील बोटींवर राहणाऱ्या लोकांसोबत वेळ घालवून एक नितांत सुंदर साधेपणा आणि नम्रता पाहायला मिळते. समाधान हे वस्तू जमा करण्यात नसून दिवस-रात्र, पाणी आणि वाऱ्याच्या नैसर्गिक प्रवाहात आनंदी राहण्यात आहे.',
    lesson: 'We need far less than we think to experience profound emotional abundance.',
    lessonMr: 'प्रचंड मानसिक मोकळेपण आणि निखळ आनंद मिळवण्यासाठी आपल्याला भौतिक गोष्टींची खूपच कमी गरज असते.'
  }
];

export const GALLERY: GalleryImage[] = [
  {
    id: 'gal-1',
    src: IMAGES.lakeMisty,
    caption: 'Quiet ripples on Dal Lake during dawn. A lone boat sits in deep blue contemplation.',
    captionMr: 'पहाटेच्या वेळी दाल लेकवर उठणारे संथ तरंग. खोल निळ्या विचारात विसावलेली एक शांत बोट.',
    category: 'Water & Soul',
    categoryMr: 'पाणी आणि आत्मा',
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    src: IMAGES.authorPortrait,
    caption: 'Her hand-written travel notebook reflecting transient floating life moments in Kashmir.',
    captionMr: 'काश्मीरमधील क्षणभंगुर आणि तरंगणाऱ्या सुंदर आठवणी टिपणारी तिची स्वतःच्या हस्ताक्षरातील डायरी.',
    category: 'The Author',
    categoryMr: 'लेखिका आणि लिखाण',
    aspect: 'portrait'
  },
  {
    id: 'gal-3',
    src: IMAGES.valleyGreen,
    caption: 'The majestic pine groves of Gulmarg shrouded in soft wisps of morning fog.',
    captionMr: 'सकाळच्या पांढऱ्याशुभ्र धुक्यात वेढलेली गुलमर्गची सुंदर देवदार झाडे आणि पर्वत.',
    category: 'Peaks & Valleys',
    categoryMr: 'शिखरे आणि खोरी',
    aspect: 'landscape'
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800',
    caption: 'Snowcapped peaks kissing the clear sky over the western pastures of Kashmir.',
    captionMr: 'काश्मीरच्या पश्चिमेकडील कुरणांवरून निरभ्र आकाशाला स्पर्श करणारी बर्फाच्छादित शिखरे.',
    category: 'Eternal Ice',
    categoryMr: 'शाश्वत बर्फाच्छादन',
    aspect: 'landscape'
  },
  {
    id: 'gal-5',
    src: IMAGES.bookCover,
    caption: 'A physical copy of "Yoo Haseen Waadiyan" — a dream materialized over sleepless cold nights.',
    captionMr: '"यू हसीन वादिया" पुस्तकाची छापील प्रत — थंड आणि जागून काढलेल्या रात्रींचे साकारलेले एक स्वप्न.',
    category: 'The Book',
    categoryMr: 'पुस्तक स्वरूप',
    aspect: 'portrait'
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800',
    caption: 'Chinar leaves transforming into blazing golden lanterns under the gentle autumn sun.',
    captionMr: 'शरद ऋतूतील कोवळ्या उन्हात सोन्यासारखी चमकणारी चिनारची पाने.',
    category: 'Seasons',
    categoryMr: 'बदलणारे ऋतू',
    aspect: 'square'
  }
];

export const READER_BENEFITS: ReaderBenefit[] = [
  {
    id: 'b1',
    title: 'For Nature Enthusiasts',
    titleMr: 'निसर्गप्रेमींसाठी',
    description: 'Immerse yourself in deeply visual, descriptive sketches of Kashmiri meadows, cold mist, and quiet waterside mornings that read like paintings.',
    descriptionMr: 'काश्मीरची हिरवीगार कुरणे, थंडगार धुके आणि पाण्याच्या शेजारी उमलणारी शांत सकाळ या चित्रासारख्या वाटणाऱ्या वर्णनांमध्ये स्वतःला हरवून टाका.',
    target: 'Seekers of Solitude',
    targetMr: 'शांततेच्या शोधात असलेले',
    icon: 'Trees'
  },
  {
    id: 'b2',
    title: 'For Students & Youth',
    titleMr: 'विद्यार्थी आणि तरुणांसाठी',
    description: 'A glowing testament of how a young woman stepped out of her comfort zone, conquered her doubts, and completed her first published book at an early age.',
    descriptionMr: 'एका तरुणीने आपल्या सोयीच्या जगातून बाहेर पडून सर्व शंकांवर मात करत इतक्या कमी वयात आपले पहिले पुस्तक कसे प्रसिद्ध केले याचे ज्वलंत उदाहरण.',
    target: 'Creatives & Dreamers',
    targetMr: 'सर्जनशील आणि स्वप्न पाहणारे',
    icon: 'GraduationCap'
  },
  {
    id: 'b3',
    title: 'For Warm Human Stories',
    titleMr: 'माणुसकीच्या सुंदर गोष्टींसाठी',
    description: 'Walk past typical tourists guides. Meet actual local families, hear their folklore, drink traditional Kahwa, and share their simple joys.',
    descriptionMr: 'नेहमीच्या पर्यटनापलीकडे जाऊन खऱ्या स्थानिक कुटुंबांना भेटा, त्यांच्या लोककथा ऐका, पारंपारिक कावा चहा प्या आणि त्यांच्या साध्या आनंदात सहभागी व्हा.',
    target: 'Travel Lovers',
    targetMr: 'भटके आणि प्रवासप्रेमी',
    icon: 'MessageSquareText'
  }
];
