import { Destination, Quote, TimelineEvent, ExperienceLesson, GalleryImage, ReaderBenefit } from './types';
import heroBgImg from './assets/images/kashmir_hero_1780045359772.png';
import bookBackCoverImg from './assets/images/kashmir_hero_back_cover_1780116849448.png';
import bookCoverImg from './assets/images/book_cover_1780045380435.png';
import authorPortraitImg from './assets/images/author_portrait_1780045401192.png';
import lakeMistyImg from './assets/images/kashmir_lake_1780045423673.png';
import valleyGreenImg from './assets/images/kashmir_valley_1780045444779.png';
import lidderRiverImg from './assets/images/lidder_river_pahalgam_1780083959555.png';
import chinarAutumnLakeImg from './assets/images/chinar_autumn_lake_1780084819897.png';

// Import our generated assets directly so Vite compiles and serves them on all devices
export const IMAGES = {
  heroBg: heroBgImg,
  bookBackCover: bookBackCoverImg,
  bookCover: bookCoverImg,
  authorPortrait: authorPortraitImg,
  lakeMisty: lakeMistyImg,
  valleyGreen: valleyGreenImg,
  lidderRiver: lidderRiverImg,
  chinarAutumnLake: chinarAutumnLakeImg,
};

export const AUTHOR_INFO = {
  name: 'Ukiyogirl Pavani Jagtap',
  nameMr: 'उकियो गर्ल पावनी जगताप',
  penName: 'Ukiyogirl',
  penNameMr: 'उकियो गर्ल (Ukiyogirl)',
  tagline: 'Some journeys end when you return home. This one became a book.',
  taglineMr: 'काही प्रवास आपण घरी आलो की संपतात. पण हा प्रवास एका गोड पुस्तकात बदलला...',
  bio: 'Pavani Jagtap writes under the name "Ukiyogirl". She has a quiet way of noticing things that many people miss — a passing conversation, a changing sky, or a feeling hidden inside an ordinary moment. Writing became her way of preserving memories before they slipped away. At a young age, she turned her travel journals and personal reflections into her first published book.',
  bioMr: 'पावनी जगताप "Ukiyogirl" या नावाने लिहिते. तिच्याकडे गोष्टी न्याहाळण्याची आणि अनुभवण्याची एक अतिशय शांत शैली आहे जी सहसा इतरांच्या नजरेतून सुटते — एखादा सहज झालेला संवाद, बदलणारे आकाश किंवा रोजच्या क्षणात दडलेली गोड भावना. आठवणी सुटून जाण्याआधी त्यांना जपण्याची लेखन हे तिचे माध्यम बनले. अतिशय कोवळ्या वयात तिने आपल्या प्रवासातील डायरी आणि वैयक्तिक विचारांना पहिल्या छापील पुस्तकाचे रूप दिले.',
  motivation: "She wasn't looking for the Kashmir people usually search for online. She was interested in the people she met, the stories she heard, and the feelings that stayed with her.",
  motivationMr: 'तिला सामान्यतः इंटरनेटवर शोधले जाणारे काश्मीर अनुभवायचे नव्हते. तिला रस होता तिथे भेटलेल्या माणसांमध्ये, त्यांच्या तोंडून ऐकलेल्या कथांमध्ये आणि प्रवासादरम्यान मनात कायम घर करून राहिलेल्या भावनांमध्ये.',
  bookTitle: "Yoo 'Haseen' Waadiyan",
  bookTitleMr: "यूँ 'हसीं' वादियाँ",
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
    detail: 'She knew the journey would be unfamiliar, but curiosity felt stronger than hesitation. She carried a notebook, an open mind, and a desire to experience Kashmir beyond photographs and headlines.',
    detailMr: 'प्रवास अगदी नवीन आणि अनोळखी असेल हे तिला माहीत होते, पण मनातील कुतूहल हे कोणत्याही शंकेपेक्षा मोठे होते. सोबत एक लहान डायरी, मोकळं मन आणि फोटो किंवा बातम्यांच्या पलीकडचे खरेखुरे काश्मीर अनुभवण्याची गोड इच्छा घेऊन ती घराबाहेर पडली.'
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
    text: "Every moment I lived there left something behind — a memory, a lesson, or a feeling that eventually found its way onto these pages",
    textMr: "तिथे घालवलेल्या प्रत्येक क्षणाने माझ्या मनात काहीतरी मागे सोडले — एखादी आठवण, शिकवण किंवा अशी भावना जिने अखेर या पुस्तकाच्या पानांवर स्वतःची जागा शोधून काढली.",
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
    lesson: "Courage doesn't always arrive loudly. Sometimes it appears quietly, in the moment you decide to take the next step anyway.",
    lessonMr: 'धाडस नेहमीच मोठ्या आवाजात समोर येत नाही. काहीवेळा ते अगदी शांतपणे पाऊल टाकतं, अशा वेळी जेव्हा तुम्ही कोणताही विचार न करता पुढचे पाऊल उचलण्याचे ठरवता.'
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
    lesson: 'Some experiences make sense only when you live them yourself.',
    lessonMr: 'काही अनुभवांचा खरा अर्थ तेव्हाच समजतो जेव्हा तुम्ही स्वतः ते अनुभवता.'
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
    lesson: 'The happiest moments are often simpler than we expect.',
    lessonMr: 'सर्वात मोठे सुख आणि आनंदाचे क्षण आपण विचार करतो त्यापेक्षा कितीतरी पटीने साधे असतात.'
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
    src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
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
    id: 'gal-5',
    src: IMAGES.bookCover,
    caption: 'A physical copy of "Yoo Haseen Waadiyan" — a dream materialized over sleepless cold nights.',
    captionMr: '"यूँ हसीं वादियाँ" पुस्तकाची छापील प्रत — थंड आणि जागून काढलेल्या रात्रींचे साकारलेले एक स्वप्न.',
    category: 'The Book',
    categoryMr: 'पुस्तक स्वरूप',
    aspect: 'portrait'
  },
  {
    id: 'gal-6',
    src: IMAGES.chinarAutumnLake,
    caption: 'Golden Chinar tree by the mirror-like lake reflecting serenity and the quiet passage of time.',
    captionMr: 'दर्पणसदृश शांत सरोवराच्या काठावर सोन्यासारखे चकाकणारे चिनारचे झाड, जे सुसंवाद आणि शांततेचे प्रतीक आहे.',
    category: 'Seasons',
    categoryMr: 'बदलणारे ऋतू',
    aspect: 'landscape'
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
    description: 'A reminder that meaningful journeys often begin with a single brave decision.',
    descriptionMr: 'एक सुंदर आठवण की अर्थपूर्ण प्रवासाची सुरुवात सहसा एका छोट्या पण धाडसी निर्णयाने होते.',
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
