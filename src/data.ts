import { Destination, Quote, TimelineEvent, ExperienceLesson, GalleryImage, ReaderBenefit } from './types';
import heroBgImg from './assets/images/kashmir_hero_1780045359772.png';
import bookBackCoverImg from './assets/images/WhatsApp_Image_2026_06_09_back.jpeg';
import bookCoverImg from './assets/images/WhatsApp_Image_2026_06_09.jpeg';
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
  bookTitle: "Yun Hasee Wadiyaan",
  bookTitleMr: "यूँ 'हसी' वादियाँ",
  bookSubtitle: "Thus Smiled the Valleys (काश्मीर स्पर्शाची गोष्ट)",
  bookSubtitleMr: "काश्मीर स्पर्शाची गोष्ट (Thus Smiled the Valleys)",
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
    title: 'Planning the Journey',
    titleMr: 'प्रवासाचे नियोजन',
    stage: 'The Spark',
    stageMr: 'ठिणगी',
    description: 'An educational field visit opportunity.',
    descriptionMr: 'शैक्षणिक भेटीची एक संधी.',
    detail: 'The author gets the opportunity to visit Kashmir through the Chanakya Institute during an educational field visit, with complete support and encouragement from her parents.',
    detailMr: 'चाणक्य इन्स्टिट्यूटच्या माध्यमातून शैक्षणिक भेटीदरम्यान लेखिकेला काश्मीरला भेट देण्याची संधी मिळते, सोबत पालकांचा पूर्ण पाठिंबा आणि प्रोत्साहन असते.'
  },
  {
    id: 'step-2',
    title: 'Beginning the Adventure',
    titleMr: 'साहसाची सुरुवात',
    stage: 'Departure',
    stageMr: 'प्रस्थान',
    description: 'Traveling towards Jammu and Kashmir.',
    descriptionMr: 'जम्मू आणि काश्मीरच्या दिशेने प्रवास.',
    detail: 'The journey begins as the author travels towards Jammu and Kashmir with excitement and curiosity.',
    detailMr: 'मनात खूप सारा उत्साह आणि कुतूहल घेऊन लेखिका जम्मू आणि काश्मीरच्या दिशेने प्रवासाला निघते.'
  },
  {
    id: 'step-3',
    title: 'First Experience of Snowfall',
    titleMr: 'बर्फवृष्टीचा पहिला अनुभव',
    stage: 'The White Blanket',
    stageMr: 'पांढरी चादर',
    description: 'Witnessing snowfall for the first time.',
    descriptionMr: 'पहिल्यांदाच बर्फ पडताना पाहणे.',
    detail: 'For the first time in her life, she witnesses snowfall and is amazed by the beauty of the Valley.',
    detailMr: 'आयुष्यात पहिल्यांदाच ती बर्फवृष्टी पाहते आणि खोऱ्याचे सौंदर्य पाहून थक्क होते.'
  },
  {
    id: 'step-4',
    title: 'Discovering the Beauty of Kashmir',
    titleMr: 'काश्मीरच्या सौंदर्याचा शोध',
    stage: 'Exploration',
    stageMr: 'अन्वेषण',
    description: 'Exploring the breathtaking landscapes.',
    descriptionMr: 'निसर्गरम्य दृश्यांचा अनुभव घेणे.',
    detail: 'She explores rivers, mountains, valleys, lakes, and breathtaking landscapes that redefine her image of Kashmir.',
    detailMr: 'नद्या, पर्वत, दऱ्या, सरोवरे आणि चित्तथरारक निसर्गसौंदर्य पाहिल्यावर, तिच्या मनात असलेले काश्मीरचे चित्र पूर्णपणे बदलून जाते.'
  },
  {
    id: 'step-5',
    title: 'Breaking Misconceptions',
    titleMr: 'गैरसमज दूर होणे',
    stage: 'Reality',
    stageMr: 'वास्तव',
    description: 'Realizing the truth beyond rumors.',
    descriptionMr: 'अफवांच्या पलीकडचे सत्य जाणून घेणे.',
    detail: 'The author realizes that the Kashmir she experiences is very different from the one portrayed through rumors and media. Her perception changes completely.',
    detailMr: 'अफवा आणि माध्यमांद्वारे रंगवलेल्या काश्मीरपेक्षा, तिने अनुभवलेले काश्मीर खूप वेगळे असल्याचे तिच्या लक्षात येते. तिचा दृष्टिकोन पूर्णपणे बदलतो.'
  },
  {
    id: 'step-6',
    title: 'Understanding History & Reality',
    titleMr: 'इतिहास आणि वास्तवाची जाणीव',
    stage: 'The Context',
    stageMr: 'संदर्भ',
    description: 'Learning about the political and historical background.',
    descriptionMr: 'राजकीय आणि ऐतिहासिक पार्श्वभूमी समजून घेणे.',
    detail: 'She learns about Kashmir\'s historical background, political conflicts, POK, and the challenges faced by local communities.',
    detailMr: 'काश्मीरची ऐतिहासिक पार्श्वभूमी, राजकीय संघर्ष, POK आणि स्थानिक समुदायांसमोरील आव्हाने याबद्दल ती जाणून घेते.'
  },
  {
    id: 'step-7',
    title: 'Meeting the People',
    titleMr: 'स्थानिकांशी भेट',
    stage: 'Connections',
    stageMr: 'नातेसंबंध',
    description: 'Experiencing local hospitality.',
    descriptionMr: 'स्थानिक पाहुणचाराचा अनुभव घेणे.',
    detail: 'The author interacts with local families, officers, and community members, experiencing their kindness, hospitality, and resilience.',
    detailMr: 'ती स्थानिक कुटुंबे, अधिकारी आणि लोकांशी संवाद साधते आणि त्यांची आपुलकी, पाहुणचार आणि कणखरपणा अनुभवते.'
  },
  {
    id: 'step-8',
    title: 'Exploring Culture & Traditions',
    titleMr: 'संस्कृती आणि परंपरेची ओळख',
    stage: 'Heritage',
    stageMr: 'वारसा',
    description: 'Experiencing Kashmiri traditions.',
    descriptionMr: 'काश्मिरी परंपरांचा अनुभव घेणे.',
    detail: 'She experiences Kashmiri traditions, including Kahwa, Kangri, Pheran, local cuisine, religious places, and cultural practices.',
    detailMr: 'ती कावा, कांगरी, फेरण, स्थानिक खाद्यपदार्थ, धार्मिक स्थळे आणि काश्मिरी संस्कृतीचा प्रत्यक्ष अनुभव घेते.'
  },
  {
    id: 'step-9',
    title: 'Learning About Security & Peace',
    titleMr: 'सुरक्षा आणि शांततेची जाणीव',
    stage: 'Protection',
    stageMr: 'संरक्षण',
    description: 'Understanding the dedication of forces.',
    descriptionMr: 'संरक्षण दलांच्या समर्पणाची जाणीव.',
    detail: 'Through conversations with Army officers, police personnel, SHOs, IAS officers, and a Brigadier, she understands the dedication and sacrifices made to protect both the people and the nation.',
    detailMr: 'लष्करी अधिकारी, पोलीस, SHO, IAS अधिकारी आणि ब्रिगेडियर यांच्याशी संवाद साधून, देश आणि लोकांच्या सुरक्षेसाठी केलेल्या बलिदानाची आणि समर्पणाची तिला जाणीव होते.'
  },
  {
    id: 'step-10',
    title: 'Fighting Drugs & Terrorism',
    titleMr: 'अमली पदार्थ आणि दहशतवादाविरुद्ध लढा',
    stage: 'Rehabilitation',
    stageMr: 'पुनर्वसन',
    description: 'Witnessing initiatives for youth welfare.',
    descriptionMr: 'तरुणांच्या कल्याणासाठी राबवलेले उपक्रम पाहणे.',
    detail: 'The author learns how terrorism affects Kashmiri youth and how rehabilitation centres, libraries, and awareness programs help young people build a better future.',
    detailMr: 'दहशतवादाचा तरुणांवर होणारा परिणाम आणि व्यसनमुक्ती केंद्रे, ग्रंथालये व जनजागृती मोहीम तरुणांचे भविष्य कसे घडवत आहेत, हे ती जवळून पाहते.'
  },
  {
    id: 'step-11',
    title: 'A Place That Felt Like Home',
    titleMr: 'घरासारखी वाटणारी जागा',
    stage: 'Belonging',
    stageMr: 'आपुलकी',
    description: 'Developing a deep emotional connection.',
    descriptionMr: 'एक खोल भावनिक नाते निर्माण होणे.',
    detail: 'Instead of feeling homesick, the author develops a deep emotional connection with Kashmir and its people, creating memories that remain with her forever.',
    detailMr: 'घराची आठवण येण्याऐवजी, तिचे काश्मीर आणि तिथल्या लोकांशी एक अतूट भावनिक नाते निर्माण होते, ज्यामुळे कायम लक्षात राहणाऱ्या आठवणी तयार होतात.'
  },
  {
    id: 'step-12',
    title: 'A Changed Perspective',
    titleMr: 'बदललेला दृष्टिकोन',
    stage: 'Transformation',
    stageMr: 'परिवर्तन',
    description: 'Leaving with a transformed outlook.',
    descriptionMr: 'बदललेल्या दृष्टिकोनासह निरोप घेणे.',
    detail: 'The journey concludes with a completely transformed outlook. The author leaves Kashmir with a deeper appreciation for its beauty, culture, humanity, and the importance of understanding reality beyond stereotypes.',
    detailMr: 'तिचा दृष्टिकोन पूर्णपणे बदललेला असतो. काश्मीरचे सौंदर्य, संस्कृती, माणुसकी आणि अफवांच्या पलीकडील वास्तव समजून घेण्याचे महत्त्व जाणून ती काश्मीरचा निरोप घेते.'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-jammu',
    name: 'Jammu',
    nameMr: 'जम्मू',
    description: 'The gateway to the journey, known for its spiritual significance and vibrant atmosphere.',
    descriptionMr: 'प्रवासाचे प्रवेशद्वार, त्याच्या अध्यात्मिक महत्त्व आणि चैतन्यमय वातावरणासाठी ओळखले जाते.',
    tag: 'Spiritual Gateway',
    tagMr: 'अध्यात्मिक प्रवेशद्वार',
    image: IMAGES.lidderRiver,
    season: 'Autumn / Spring',
    seasonMr: 'शरद / वसंत ऋतू',
    climate: 'Vibrant & Sacred',
    climateMr: 'चैतन्यमय आणि पवित्र'
  },
  {
    id: 'dest-srinagar',
    name: 'Srinagar & Dal Lake',
    nameMr: 'श्रीनगर आणि दाल लेक',
    description: 'The heart of Kashmir, famous for Dal Lake, Shikara rides, Mughal Gardens, and its rich cultural heritage.',
    descriptionMr: 'काश्मीरचे हृदय, दाल लेक, शिकाराची सफर, मुघल गार्डन्स आणि त्याच्या समृद्ध सांस्कृतिक वारशासाठी प्रसिद्ध.',
    tag: 'Heart of Kashmir',
    tagMr: 'काश्मीरचे हृदय',
    image: IMAGES.lakeMisty,
    season: 'Year-round',
    seasonMr: 'वर्षभर कधीही',
    climate: 'Crisp morning breeze',
    climateMr: 'थंडगार सकाळची हवा'
  },
  {
    id: 'dest-baramulla',
    name: 'Baramulla',
    nameMr: 'बारामुल्ला',
    description: 'A historic town known for its ancient temples, scenic landscapes, and warm local communities.',
    descriptionMr: 'एक ऐतिहासिक शहर, त्याच्या प्राचीन मंदिरांसाठी, निसर्गरम्य दृश्यांसाठी आणि तिथल्या प्रेमळ लोकांसाठी ओळखले जाते.',
    tag: 'Historic Town',
    tagMr: 'ऐतिहासिक शहर',
    image: IMAGES.valleyGreen,
    season: 'Summer Glow',
    seasonMr: 'उन्हाळ्याचा काळ',
    climate: 'Cool and serene',
    climateMr: 'थंड आणि शांत'
  },
  {
    id: 'dest-temples',
    name: 'Ancient Spiritual Heritage',
    nameMr: 'प्राचीन अध्यात्मिक वारसा',
    description: 'Exploring sacred sites like Shahi Putri Mata Temple, Jabal Durga Temple, Raghunath Temple, and Baba Wali Mata Mahakali Temple.',
    descriptionMr: 'शाही पुत्री माता मंदिर, जबल दुर्गा मंदिर, रघुनाथ मंदिर आणि बाबा वाली माता महाकाली मंदिर यांसारख्या पवित्र स्थळांची भेट.',
    tag: 'Sacred Harmony',
    tagMr: 'पवित्र सौहार्द',
    image: IMAGES.chinarAutumnLake,
    season: 'Early Summer',
    seasonMr: 'उन्हाळ्याची सुरुवात',
    climate: 'Peaceful and historic',
    climateMr: 'शांत आणि ऐतिहासिक'
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
    caption: 'A physical copy of "Yun Hasee Wadiyaan" — a dream materialized over sleepless cold nights.',
    captionMr: '"यूँ हसी वादियाँ" पुस्तकाची छापील प्रत — थंड आणि जागून काढलेल्या रात्रींचे साकारलेले एक स्वप्न.',
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
