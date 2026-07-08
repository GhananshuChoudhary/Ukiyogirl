const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

const newTimelineEvents = `export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'step-1',
    title: 'Planning the Journey',
    titleMr: 'प्रवासाचे नियोजन',
    stage: 'Step 1: The Spark',
    stageMr: 'टप्पा १ : ठिणगी',
    description: 'An educational field visit opportunity.',
    descriptionMr: 'शैक्षणिक भेटीची एक संधी.',
    detail: 'The author gets the opportunity to visit Kashmir through the Chanakya Institute during an educational field visit, with complete support and encouragement from her parents.',
    detailMr: 'चाणक्य इन्स्टिट्यूटच्या माध्यमातून शैक्षणिक भेटीदरम्यान लेखिकेला काश्मीरला भेट देण्याची संधी मिळते, सोबत पालकांचा पूर्ण पाठिंबा आणि प्रोत्साहन असते.'
  },
  {
    id: 'step-2',
    title: 'Beginning the Adventure',
    titleMr: 'साहसाची सुरुवात',
    stage: 'Step 2: Departure',
    stageMr: 'टप्पा २ : प्रस्थान',
    description: 'Traveling towards Jammu and Kashmir.',
    descriptionMr: 'जम्मू आणि काश्मीरच्या दिशेने प्रवास.',
    detail: 'The journey begins as the author travels towards Jammu and Kashmir with excitement and curiosity.',
    detailMr: 'मनात खूप सारा उत्साह आणि कुतूहल घेऊन लेखिका जम्मू आणि काश्मीरच्या दिशेने प्रवासाला निघते.'
  },
  {
    id: 'step-3',
    title: 'First Experience of Snowfall',
    titleMr: 'बर्फवृष्टीचा पहिला अनुभव',
    stage: 'Step 3: The White Blanket',
    stageMr: 'टप्पा ३ : पांढरी चादर',
    description: 'Witnessing snowfall for the first time.',
    descriptionMr: 'पहिल्यांदाच बर्फ पडताना पाहणे.',
    detail: 'For the first time in her life, she witnesses snowfall and is amazed by the beauty of the Valley.',
    detailMr: 'आयुष्यात पहिल्यांदाच ती बर्फवृष्टी पाहते आणि खोऱ्याचे सौंदर्य पाहून थक्क होते.'
  },
  {
    id: 'step-4',
    title: 'Discovering the Beauty of Kashmir',
    titleMr: 'काश्मीरच्या सौंदर्याचा शोध',
    stage: 'Step 4: Exploration',
    stageMr: 'टप्पा ४ : अन्वेषण',
    description: 'Exploring the breathtaking landscapes.',
    descriptionMr: 'निसर्गरम्य दृश्यांचा अनुभव घेणे.',
    detail: 'She explores rivers, mountains, valleys, lakes, and breathtaking landscapes that redefine her image of Kashmir.',
    detailMr: 'नद्या, पर्वत, दऱ्या, सरोवरे आणि चित्तथरारक निसर्गसौंदर्य पाहिल्यावर, तिच्या मनात असलेले काश्मीरचे चित्र पूर्णपणे बदलून जाते.'
  },
  {
    id: 'step-5',
    title: 'Breaking Misconceptions',
    titleMr: 'गैरसमज दूर होणे',
    stage: 'Step 5: Reality',
    stageMr: 'टप्पा ५ : वास्तव',
    description: 'Realizing the truth beyond rumors.',
    descriptionMr: 'अफवांच्या पलीकडचे सत्य जाणून घेणे.',
    detail: 'The author realizes that the Kashmir she experiences is very different from the one portrayed through rumors and media. Her perception changes completely.',
    detailMr: 'अफवा आणि माध्यमांद्वारे रंगवलेल्या काश्मीरपेक्षा, तिने अनुभवलेले काश्मीर खूप वेगळे असल्याचे तिच्या लक्षात येते. तिचा दृष्टिकोन पूर्णपणे बदलतो.'
  },
  {
    id: 'step-6',
    title: 'Understanding History & Reality',
    titleMr: 'इतिहास आणि वास्तवाची जाणीव',
    stage: 'Step 6: The Context',
    stageMr: 'टप्पा ६ : संदर्भ',
    description: 'Learning about the political and historical background.',
    descriptionMr: 'राजकीय आणि ऐतिहासिक पार्श्वभूमी समजून घेणे.',
    detail: 'She learns about Kashmir\\'s historical background, political conflicts, POK, and the challenges faced by local communities.',
    detailMr: 'काश्मीरची ऐतिहासिक पार्श्वभूमी, राजकीय संघर्ष, POK आणि स्थानिक समुदायांसमोरील आव्हाने याबद्दल ती जाणून घेते.'
  },
  {
    id: 'step-7',
    title: 'Meeting the People',
    titleMr: 'स्थानिकांशी भेट',
    stage: 'Step 7: Connections',
    stageMr: 'टप्पा ७ : नातेसंबंध',
    description: 'Experiencing local hospitality.',
    descriptionMr: 'स्थानिक पाहुणचाराचा अनुभव घेणे.',
    detail: 'The author interacts with local families, officers, and community members, experiencing their kindness, hospitality, and resilience.',
    detailMr: 'ती स्थानिक कुटुंबे, अधिकारी आणि लोकांशी संवाद साधते आणि त्यांची आपुलकी, पाहुणचार आणि कणखरपणा अनुभवते.'
  },
  {
    id: 'step-8',
    title: 'Exploring Culture & Traditions',
    titleMr: 'संस्कृती आणि परंपरेची ओळख',
    stage: 'Step 8: Heritage',
    stageMr: 'टप्पा ८ : वारसा',
    description: 'Experiencing Kashmiri traditions.',
    descriptionMr: 'काश्मिरी परंपरांचा अनुभव घेणे.',
    detail: 'She experiences Kashmiri traditions, including Kahwa, Kangri, Pheran, local cuisine, religious places, and cultural practices.',
    detailMr: 'ती कावा, कांगरी, फेरण, स्थानिक खाद्यपदार्थ, धार्मिक स्थळे आणि काश्मिरी संस्कृतीचा प्रत्यक्ष अनुभव घेते.'
  },
  {
    id: 'step-9',
    title: 'Learning About Security & Peace',
    titleMr: 'सुरक्षा आणि शांततेची जाणीव',
    stage: 'Step 9: Protection',
    stageMr: 'टप्पा ९ : संरक्षण',
    description: 'Understanding the dedication of forces.',
    descriptionMr: 'संरक्षण दलांच्या समर्पणाची जाणीव.',
    detail: 'Through conversations with Army officers, police personnel, SHOs, IAS officers, and a Brigadier, she understands the dedication and sacrifices made to protect both the people and the nation.',
    detailMr: 'लष्करी अधिकारी, पोलीस, SHO, IAS अधिकारी आणि ब्रिगेडियर यांच्याशी संवाद साधून, देश आणि लोकांच्या सुरक्षेसाठी केलेल्या बलिदानाची आणि समर्पणाची तिला जाणीव होते.'
  },
  {
    id: 'step-10',
    title: 'Fighting Drugs & Terrorism',
    titleMr: 'अमली पदार्थ आणि दहशतवादाविरुद्ध लढा',
    stage: 'Step 10: Rehabilitation',
    stageMr: 'टप्पा १० : पुनर्वसन',
    description: 'Witnessing initiatives for youth welfare.',
    descriptionMr: 'तरुणांच्या कल्याणासाठी राबवलेले उपक्रम पाहणे.',
    detail: 'The author learns how terrorism affects Kashmiri youth and how rehabilitation centres, libraries, and awareness programs help young people build a better future.',
    detailMr: 'दहशतवादाचा तरुणांवर होणारा परिणाम आणि व्यसनमुक्ती केंद्रे, ग्रंथालये व जनजागृती मोहीम तरुणांचे भविष्य कसे घडवत आहेत, हे ती जवळून पाहते.'
  },
  {
    id: 'step-11',
    title: 'A Place That Felt Like Home',
    titleMr: 'घरासारखी वाटणारी जागा',
    stage: 'Step 11: Belonging',
    stageMr: 'टप्पा ११ : आपुलकी',
    description: 'Developing a deep emotional connection.',
    descriptionMr: 'एक खोल भावनिक नाते निर्माण होणे.',
    detail: 'Instead of feeling homesick, the author develops a deep emotional connection with Kashmir and its people, creating memories that remain with her forever.',
    detailMr: 'घराची आठवण येण्याऐवजी, तिचे काश्मीर आणि तिथल्या लोकांशी एक अतूट भावनिक नाते निर्माण होते, ज्यामुळे कायम लक्षात राहणाऱ्या आठवणी तयार होतात.'
  },
  {
    id: 'step-12',
    title: 'A Changed Perspective',
    titleMr: 'बदललेला दृष्टिकोन',
    stage: 'Step 12: Transformation',
    stageMr: 'टप्पा १२ : परिवर्तन',
    description: 'Leaving with a transformed outlook.',
    descriptionMr: 'बदललेल्या दृष्टिकोनासह निरोप घेणे.',
    detail: 'The journey concludes with a completely transformed outlook. The author leaves Kashmir with a deeper appreciation for its beauty, culture, humanity, and the importance of understanding reality beyond stereotypes.',
    detailMr: 'तिचा दृष्टिकोन पूर्णपणे बदललेला असतो. काश्मीरचे सौंदर्य, संस्कृती, माणुसकी आणि अफवांच्या पलीकडील वास्तव समजून घेण्याचे महत्त्व जाणून ती काश्मीरचा निरोप घेते.'
  }
];`;

const newDestinations = `export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-jammu',
    name: 'Jammu',
    nameMr: 'जम्मू',
    description: 'The gateway to the journey, known for its spiritual significance and vibrant atmosphere.',
    descriptionMr: 'प्रवासाचे प्रवेशद्वार, त्याच्या अध्यात्मिक महत्त्व आणि चैतन्यमय वातावरणासाठी ओळखले जाते.',
    tag: 'Spiritual Gateway',
    tagMr: 'अध्यात्मिक प्रवेशद्वार',
    image: 'https://images.unsplash.com/photo-1620023023023-9366dbf20387?auto=format&fit=crop&q=80&w=800',
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
];`;

const startTimeline = content.indexOf('export const TIMELINE_EVENTS: TimelineEvent[] = [');
const startDestinations = content.indexOf('export const DESTINATIONS: Destination[] = [');
const startJourneySteps = content.indexOf('export const JOURNEY_STEPS: TimelineEvent[] = [');

if (startTimeline !== -1 && startDestinations !== -1) {
    let newContent = content.slice(0, startTimeline) + newTimelineEvents + '\n\n' + newDestinations + '\n\n';
    
    // Check what comes after DESTINATIONS
    // it's JOURNEY_STEPS ? wait, there is no JOURNEY_STEPS in the file, it's LESSONS maybe?
    // Let's find where DESTINATIONS array ends
    let endDestinations = content.indexOf('export const QUOTES: Quote[] = [');
    if(endDestinations !== -1) {
        newContent += content.slice(endDestinations);
        fs.writeFileSync('src/data.ts', newContent);
        console.log('data.ts updated successfully');
    } else {
        console.log('Could not find QUOTES');
    }
} else {
    console.log('Could not find TIMELINE_EVENTS or DESTINATIONS');
}

