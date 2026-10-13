// सारी सामग्री यहीं से बदलें।
// हर टेक्स्ट { hi: "...", en: "..." } के रूप में है — दोनों भाषाएँ यहीं भरें।
// जहाँ [ ] लिखा है, वहाँ असली जानकारी भरें।

export const site = {
  name: { hi: "त्रिवेणीगंज नगर परिषद", en: "Triveniganj Nagar Parishad" },
  district: { hi: "सुपौल", en: "Supaul" },
  state: { hi: "बिहार", en: "Bihar" },
  pin: "852139",
  tagline: {
    hi: "स्वच्छ, सुंदर और विकसित त्रिवेणीगंज।",
    en: "Clean, beautiful and developed Triveniganj.",
  },
  taglineSub: {
    hi: "2022 से भरोसा, 2027 तक प्रतिबद्धता।",
    en: "Trusted since 2022, committed till 2027.",
  },
  // प्रदर्शित नंबर और WhatsApp/Call के लिए (देश कोड सहित, बिना + और स्पेस)
  phone: "+91 95230 59179",
  phoneRaw: "919523059179",
  // संपर्क सेक्शन के नक्शे में दिखने वाली जगह (Google Maps पर खोज)
  mapQuery: "Nagar Parishad Office, Triveniganj, Supaul, Bihar 852139",
  // admin का ईमेल — .env में VITE_ADMIN_EMAIL से भरें (नीचे README देखें)
  adminEmail: import.meta.env.VITE_ADMIN_EMAIL || "",
  address: {
    hi: "नगर परिषद कार्यालय, त्रिवेणीगंज, सुपौल, बिहार - 852139",
    en: "Nagar Parishad Office, Triveniganj, Supaul, Bihar - 852139",
  },
  developer: "Vikash Kumar",
  // लोगो public/logo.png में है; hero अभी डमी फोटो है — असली फोटो public/ में रखकर "/hero.jpg" लिखें
  logo: "/logo.png",
  heroImage: "https://picsum.photos/seed/triveniganj-hero/1920/900",
  // ऊपर पीली पट्टी में चलने वाली घोषणा
  announcement: {
    hi: "2022 से साथ है तो 2027 में भी साथ रहेंगे — [अपनी घोषणा यहाँ लिखें]",
    en: "Together since 2022, together again in 2027 — [write your announcement here]",
  },
};

// आपातकालीन नंबर — स्क्रीन के ऊपर दाईं ओर हमेशा दिखते हैं, क्लिक पर सीधे कॉल
// फुटर में ज़रूरी हेल्पलाइन (राष्ट्रीय नंबर) — क्लिक पर कॉल
export const helplines = [
  { number: "112", label: { hi: "पुलिस / आपातकाल", en: "Police / Emergency" } },
  { number: "108", label: { hi: "एम्बुलेंस", en: "Ambulance" } },
  { number: "102", label: { hi: "जननी एम्बुलेंस", en: "Mother & Child Ambulance" } },
  { number: "101", label: { hi: "अग्निशमन", en: "Fire" } },
  { number: "1098", label: { hi: "चाइल्ड हेल्पलाइन", en: "Child Helpline" } },
  { number: "181", label: { hi: "महिला हेल्पलाइन", en: "Women Helpline" } },
];

export const emergency = {
  title: { hi: "आपातकालीन संपर्क", en: "Emergency" },
  numbers: [
    {
      number: "108",
      label: { hi: "एम्बुलेंस / आपातकाल", en: "Emergency Ambulance" },
      desc: { hi: "दुर्घटना, गंभीर बीमारी", en: "Accidents, critical illness" },
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      number: "102",
      label: { hi: "जननी एम्बुलेंस", en: "Mother & Child Ambulance" },
      desc: { hi: "गर्भवती महिला व नवजात", en: "Pregnant women & newborns" },
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ],
};

// मुख्य मेन्यू — href उसी सेक्शन की id है; क्रम होम पेज के सेक्शन के क्रम जैसा रखें
export const navItems = [
  { href: "#home", label: { hi: "होम", en: "Home" } },
  { href: "#about", label: { hi: "हमारे बारे में", en: "About" } },
  { href: "#councillors", label: { hi: "पार्षद", en: "Councillors" } },
  { href: "#services", label: { hi: "सेवाएँ", en: "Services" } },
  { href: "#work", label: { hi: "प्रोजेक्ट", en: "Projects" } },
  { href: "#schemes", label: { hi: "योजनाएँ", en: "Schemes" } },
  { href: "#notices", label: { hi: "सूचनाएँ", en: "Notices" } },
  { href: "#safety", label: { hi: "सुरक्षा", en: "Safety" } },
  { href: "#tourism", label: { hi: "पर्यटन", en: "Tourism" } },
  { href: "#gallery", label: { hi: "फोटो", en: "Gallery" } },
  { href: "#contact", label: { hi: "हमसे जुड़ें", en: "Contact" } },
];

export const hero = {
  welcome: { hi: "आपका स्वागत है", en: "Welcome to" },
  title: { hi: "त्रिवेणीगंज नगर परिषद में", en: "Triveniganj Nagar Parishad" },
  subtitle: { hi: "2027 का चुनाव", en: "Election 2027" },
};

export const chairperson = {
  name: { hi: "संगीता कुमारी यादव", en: "Sangita Kumari Yadav" },
  photo: "/chairperson.jpg",
  title: {
    hi: "अध्यक्ष (मुख्य पार्षद), त्रिवेणीगंज नगर परिषद",
    en: "Chairperson (Mukhya Parshad), Triveniganj Nagar Parishad",
  },
  messageTitle: { hi: "नगरवासियों के नाम संदेश", en: "Message to Citizens" },
  messageHeading: {
    hi: "त्रिवेणीगंज मेरा नगर ही नहीं, मेरा अपना परिवार है।",
    en: "Triveniganj is not just my town, it is my own family.",
  },
  messageParagraphs: [
    {
      hi: "मैं संगीता कुमारी यादव, त्रिवेणीगंज नगर परिषद की अध्यक्ष, अपने त्रिवेणीगंज नगर परिषद के सभी सम्मानित नगरवासियों को हृदय से प्रणाम एवं हार्दिक स्वागत करती हूँ।",
      en: "I, Sangita Kumari Yadav, Chairperson of Triveniganj Nagar Parishad, offer my heartfelt greetings and a warm welcome to all the respected citizens of Triveniganj Nagar Parishad.",
    },
    {
      hi: "त्रिवेणीगंज मेरे लिए केवल एक नगर परिषद नहीं, बल्कि हमारा अपना घर, हमारी अपनी मिट्टी और हमारा अपना परिवार है। यहाँ के प्रत्येक वार्ड, प्रत्येक मोहल्ले और प्रत्येक नगरवासी से मेरा आत्मीय संबंध है।",
      en: "For me, Triveniganj is not just a Nagar Parishad — it is our own home, our own soil and our own family. I share a close bond with every ward, every neighbourhood and every citizen here.",
    },
    {
      hi: "2022 के नगर निकाय चुनाव में आपने जिस विश्वास और आशीर्वाद के साथ हमें अपना प्रतिनिधित्व करने का अवसर दिया, उसके लिए मैं आप सभी का हृदय से आभार व्यक्त करती हूँ। आपने जो जिम्मेदारी हमें सौंपी है, उसे पूरी निष्ठा और ईमानदारी से निभाना हमारा कर्तव्य है।",
      en: "I sincerely thank all of you for the trust and blessings with which you gave us the opportunity to represent you in the 2022 municipal election. It is our duty to fulfil the responsibility you have entrusted to us with complete dedication and honesty.",
    },
    {
      hi: "आपके सहयोग और मार्गदर्शन से हमारा त्रिवेणीगंज विकास की राह पर निरंतर आगे बढ़ रहा है। हमारा प्रयास है कि हमारे नगर में बेहतर सड़कें, नालियाँ, स्वच्छता, पेयजल, स्ट्रीट लाइट और अन्य आवश्यक नागरिक सुविधाएँ मजबूत हों और हर नगरवासी को अपने नगर में बेहतर सुविधाएँ मिल सकें।",
      en: "With your support and guidance, our Triveniganj is steadily moving forward on the path of development. Our effort is to strengthen roads, drains, sanitation, drinking water, street lights and other essential civic facilities so that every citizen gets better amenities in their town.",
    },
    {
      hi: "आने वाले समय में भी नगरवासियों की जरूरतों और सुझावों को सर्वोच्च प्राथमिकता देते हुए जनहित के आवश्यक कार्यों को आगे बढ़ाने का निरंतर प्रयास किया जाएगा। हमारा सपना है कि त्रिवेणीगंज एक स्वच्छ, सुंदर, सुरक्षित और सुविधासंपन्न नगर बने, जहाँ हर परिवार गर्व के साथ कह सके — यह हमारा त्रिवेणीगंज है।",
      en: "In the coming years too, we will keep giving the highest priority to the needs and suggestions of citizens and continue to take forward work in the public interest. Our dream is for Triveniganj to become a clean, beautiful, safe and well-equipped town, where every family can proudly say — this is our Triveniganj.",
    },
    {
      hi: "मैं आप सभी नगरवासियों से इसी तरह अपना स्नेह, सहयोग और मार्गदर्शन बनाए रखने का आग्रह करती हूँ। आपके सुझाव हमारे लिए दिशा हैं और आपका विश्वास हमारी सबसे बड़ी ताकत है।",
      en: "I request all citizens to continue giving us your affection, cooperation and guidance. Your suggestions are our direction and your trust is our greatest strength.",
    },
    {
      hi: "आइए, हम सब मिलकर अपने त्रिवेणीगंज को और बेहतर बनाएँ। अपने नगर के विकास में सहभागी बनें और मिलकर एक सुंदर भविष्य की ओर आगे बढ़ें।",
      en: "Come, let us all work together to make our Triveniganj even better. Take part in the development of your town and let us move together towards a beautiful future.",
    },
  ],
  quote: {
    hi: "आपका विश्वास हमारी ताकत है, आपका सुझाव हमारी दिशा है और त्रिवेणीगंज का विकास हमारा संकल्प है।",
    en: "Your trust is our strength, your suggestions our direction, and Triveniganj's development our resolve.",
  },
  // दाईं ओर नीला कार्ड
  boxTitle: { hi: "नागरिक सर्वोपरि", en: "Citizens First" },
  boxText: {
    hi: "हर नागरिक की आवाज़, हर वार्ड का विकास और बेहतर नागरिक सुविधाएँ हमारी प्राथमिकता हैं।",
    en: "Every citizen's voice, every ward's development and better civic facilities are our priority.",
  },
  points: [
    { hi: "स्वच्छ एवं सुंदर त्रिवेणीगंज", en: "Clean and beautiful Triveniganj" },
    { hi: "बेहतर सड़क एवं नाली व्यवस्था", en: "Better roads and drainage" },
    { hi: "स्वच्छ पेयजल की सुविधा", en: "Clean drinking water" },
    { hi: "मजबूत स्वच्छता व्यवस्था", en: "Strong sanitation system" },
    { hi: "बेहतर स्ट्रीट लाइट व्यवस्था", en: "Better street lighting" },
    { hi: "डिजिटल नागरिक सेवाओं को बढ़ावा", en: "Promoting digital citizen services" },
  ],
};

export const heroButtons = [
  { label: { hi: "सेवाएँ देखें", en: "Explore Services" }, href: "#services", variant: "solid" },
  { label: { hi: "ताज़ा सूचनाएँ", en: "View Notices" }, href: "#notices", variant: "outline" },
];

// काम की सूचियाँ — कार्ड के popup और प्रोजेक्ट पेज दोनों में दिखती हैं
export const missionList = [
    { hi: "नागरिकों को बेहतर और पारदर्शी सेवाएँ प्रदान करना", en: "Provide better and transparent services to citizens" },
    { hi: "स्वच्छता एवं सफाई व्यवस्था में सुधार करना", en: "Improve cleanliness and sanitation" },
    { hi: "सड़क और नाली व्यवस्था को बेहतर बनाना", en: "Improve roads and drainage" },
    { hi: "स्वच्छ पेयजल की उपलब्धता सुनिश्चित करना", en: "Ensure availability of clean drinking water" },
    { hi: "नागरिक शिकायतों का समय पर समाधान करना", en: "Resolve citizen complaints on time" },
    { hi: "नगर परिषद क्षेत्र में डिजिटल नागरिक सेवाओं को बढ़ावा देना", en: "Promote digital citizen services in the Nagar Parishad" },
    { hi: "सभी वार्डों में आवश्यक नागरिक सुविधाओं का विकास करना", en: "Develop essential civic facilities in all wards" },
    { hi: "जल आपूर्ति व्यवस्था को और बेहतर करना", en: "Further improve the water supply system" },
    { hi: "स्वच्छता एवं कचरा प्रबंधन को मजबूत करना", en: "Strengthen sanitation and waste management" },
    { hi: "स्ट्रीट लाइट एवं सार्वजनिक प्रकाश व्यवस्था में सुधार", en: "Improve street lights and public lighting" },
    { hi: "नागरिक शिकायतों के लिए बेहतर डिजिटल व्यवस्था", en: "Better digital system for citizen complaints" },
    { hi: "नगर परिषद क्षेत्र में हरित एवं स्वच्छ वातावरण को बढ़ावा देना", en: "Promote a green and clean environment" },
    { hi: "नागरिक सुविधाओं के लिए नई विकास परियोजनाओं पर कार्य करना", en: "Work on new development projects for civic facilities" },
  ];

export const completedList = [
    { hi: "सड़क एवं नाली से संबंधित विकास कार्य", en: "Road and drainage development work" },
    { hi: "स्वच्छता एवं सफाई अभियान", en: "Cleanliness and sanitation drives" },
    { hi: "जल आपूर्ति व्यवस्था में सुधार", en: "Improvement in water supply" },
    { hi: "सार्वजनिक क्षेत्रों की सफाई एवं रखरखाव", en: "Cleaning and maintenance of public areas" },
    { hi: "नागरिक सुविधा से संबंधित आवश्यक कार्य", en: "Essential work related to civic facilities" },
    { hi: "स्ट्रीट लाइट एवं सार्वजनिक प्रकाश व्यवस्था", en: "Street lights and public lighting" },
  ];

export const futureList = [
    { hi: "युवाओं के लिए रोजगार एवं स्वरोजगार के नए अवसरों को बढ़ावा देना", en: "Promote new employment and self-employment opportunities for youth" },
    { hi: "युवाओं को कौशल विकास एवं व्यावसायिक प्रशिक्षण से जोड़ना", en: "Connect youth with skill development and vocational training" },
    { hi: "महिलाओं के लिए सिलाई, हस्तशिल्प, लघु उद्योग एवं अन्य स्वरोजगार के अवसर बढ़ाना", en: "Increase tailoring, handicraft, small industry and other self-employment opportunities for women" },
    { hi: "स्थानीय युवाओं को सरकारी एवं निजी रोजगार योजनाओं की जानकारी उपलब्ध कराना", en: "Provide local youth information on government and private job schemes" },
    { hi: "छात्र-छात्राओं के लिए बेहतर शिक्षा एवं डिजिटल शिक्षा की सुविधाओं को बढ़ावा देना", en: "Promote better and digital education facilities for students" },
    { hi: "आर्थिक रूप से कमजोर विद्यार्थियों को शिक्षा एवं छात्रवृत्ति योजनाओं से जोड़ने में सहायता करना", en: "Help economically weaker students access education and scholarship schemes" },
  ];

// कार्ड पर क्लिक करने से popup खुलता है — modal.items की सूची या सुझाव फ़ॉर्म
export const featureCards = [
  {
    icon: "📄",
    title: { hi: "हमारा मिशन", en: "Our Mission" },
    desc: {
      hi: "हर वार्ड, हर नागरिक का सम्मान और बेहतर सुविधाएँ हर परिवार तक पहुँचाना।",
      en: "Development in every ward, respect for every citizen and better facilities for every family.",
    },
    modal: {
      title: { hi: "सबका साथ सबका विकास", en: "Sabka Saath Sabka Vikas" },
      items: missionList,
    },
  },
  {
    icon: "🏠",
    title: { hi: "पूर्ण की गई सफल परियोजनाएँ", en: "Completed Projects" },
    desc: {
      hi: "2022 के नगर निकाय चुनाव में किए गए वादों को पूरा करने के लिए हुए विकास कार्य।",
      en: "Development work completed to fulfil the promises made in the 2022 Municipal Election.",
    },
    modal: {
      title: { hi: "पूर्ण की गई परियोजनाएँ", en: "Completed Projects" },
      items: completedList,
    },
  },
  {
    icon: "🤝",
    title: { hi: "2027 में फिर से एक साथ", en: "Together Again in 2027" },
    desc: {
      hi: "आगे की विकास योजनाएँ — सड़क, पानी, स्वच्छता और शिक्षा।",
      en: "Upcoming development plans — roads, water, sanitation and education.",
    },
    modal: {
      title: { hi: "चुनाव के बाद हमारा मिशन", en: "Our Mission After the Election" },
      items: futureList,
    },
  },
  {
    icon: "📢",
    title: { hi: "अपना सुझाव दें", en: "Give Your Suggestion" },
    desc: {
      hi: "नगर विकास के लिए अपने विचार और सुझाव हमें भेजें।",
      en: "Share your ideas for Nagar Parishad development.",
    },
    // form: true — popup में नागरिक प्रतिक्रिया फ़ॉर्म (नीचे feedbackForm) खुलता है
    modal: { title: { hi: "अपना सुझाव दें", en: "Give Your Suggestion" }, form: true },
  },
];

// विकास परियोजनाएँ — हर एक का अपना पेज /projects/<slug> पर खुलता है
// status: "ongoing", "completed" या "future"
// image: कार्ड की फोटो, photos: पेज पर दिखने वाली फोटो (सब डमी — असली फोटो public/ में रखकर "/road1.jpg" जैसे लिखें)
export const workItems = [
  {
    slug: "ongoing",
    icon: "🛣️",
    image: "https://picsum.photos/seed/triveniganj-road/600/400",
    photos: [
      "https://picsum.photos/seed/triveniganj-road/800/600",
      "https://picsum.photos/seed/triveniganj-road1/800/600",
      "https://picsum.photos/seed/triveniganj-road2/800/600",
    ],
    title: { hi: "सबका साथ सबका विकास", en: "Sabka Saath Sabka Vikas" },
    desc: {
      hi: "हर वार्ड का विकास, हर नागरिक का सम्मान और हर परिवार तक बेहतर सुविधाएँ पहुँचाना।",
      en: "Development of every ward, respect for every citizen and better facilities for every family.",
    },
    status: "ongoing",
    items: missionList,
  },
  {
    slug: "completed",
    icon: "💧",
    image: "https://picsum.photos/seed/triveniganj-water/600/400",
    photos: [
      "https://picsum.photos/seed/triveniganj-water/800/600",
      "https://picsum.photos/seed/triveniganj-water1/800/600",
      "https://picsum.photos/seed/triveniganj-clean1/800/600",
      "https://picsum.photos/seed/triveniganj-clean2/800/600",
      "https://picsum.photos/seed/triveniganj-light1/800/600",
      "https://picsum.photos/seed/triveniganj-ghat1/800/600",
    ],
    title: { hi: "पूर्ण की गई सफल परियोजनाएँ", en: "Successfully Completed Projects" },
    desc: {
      hi: "2022 के नगर निकाय चुनाव में किए गए वादों को पूरा करने के लिए अब तक किए गए विकास कार्य।",
      en: "Development work done so far to fulfil the promises made in the 2022 municipal election.",
    },
    status: "completed",
    items: completedList,
  },
  {
    slug: "future",
    icon: "🎓",
    image: "https://picsum.photos/seed/triveniganj-school/600/400",
    photos: [
      "https://picsum.photos/seed/triveniganj-edu1/800/600",
      "https://picsum.photos/seed/triveniganj-edu2/800/600",
      "https://picsum.photos/seed/triveniganj-edu3/800/600",
      "https://picsum.photos/seed/triveniganj-edu4/800/600",
      "https://picsum.photos/seed/triveniganj-edu5/800/600",
    ],
    title: { hi: "चुनाव के बाद हमारा मिशन", en: "Our Mission After the Election" },
    desc: { hi: "2027 की विकास योजनाएँ", en: "Development plans for 2027" },
    status: "future",
    items: futureList,
  },
];

// action: बटन का टेक्स्ट — ui में से कोई एक
export const services = [
  {
    icon: "📄",
    title: { hi: "जन्म प्रमाण पत्र", en: "Birth Certificate" },
    desc: { hi: "जन्म प्रमाण पत्र के लिए आवेदन करें", en: "Apply for a birth certificate" },
    action: "applyNow",
  },
  {
    icon: "📄",
    title: { hi: "मृत्यु प्रमाण पत्र", en: "Death Certificate" },
    desc: { hi: "मृत्यु प्रमाण पत्र के लिए आवेदन करें", en: "Apply for a death certificate" },
    action: "applyNow",
  },
  {
    icon: "🏠",
    title: { hi: "संपत्ति कर", en: "Property Tax" },
    desc: { hi: "संपत्ति कर का ऑनलाइन भुगतान करें", en: "Pay property tax online" },
    action: "viewService",
  },
  {
    icon: "💧",
    title: { hi: "जल आपूर्ति", en: "Water Supply" },
    desc: { hi: "जल आपूर्ति सेवाएँ", en: "Water supply services" },
    action: "viewService",
  },
  {
    icon: "🧹",
    title: { hi: "स्वच्छता", en: "Sanitation" },
    desc: { hi: "स्वच्छता संबंधी सेवाएँ", en: "Sanitation services" },
    action: "viewService",
  },
  {
    icon: "📢",
    title: { hi: "सार्वजनिक शिकायत", en: "Public Complaint" },
    desc: { hi: "शिकायत दर्ज करें", en: "Register a complaint" },
    action: "register",
  },
];

// आँकड़े — value असली संख्या से बदलें
export const stats = [
  { icon: "👥", value: 25, suffix: "K", label: { hi: "नागरिक", en: "Citizens" }, desc: { hi: "जनसंख्या", en: "Population" } },
  { icon: "🏘️", value: 27, label: { hi: "वार्ड", en: "Wards" }, desc: { hi: "नगर परिषद वार्ड", en: "Municipal wards" } },
  { icon: "🏗️", value: 12, label: { hi: "परियोजनाएँ", en: "Projects" }, desc: { hi: "विकास परियोजनाएँ", en: "Development projects" } },
  { icon: "📋", value: 8, label: { hi: "सेवाएँ", en: "Services" }, desc: { hi: "नागरिक सेवाएँ", en: "Citizen services" } },
];

// सरकारी योजनाएँ अलग फ़ाइल data/schemes.js में हैं

// फोटो गैलरी (coverflow)
// फोटो public/gallery/ में हैं — अभी AI से बनी नमूना फोटो हैं, असली फोटो उसी नाम से बदल दें
export const gallery = [
  { image: "/gallery/01-office.jpg", title: { hi: "नगर परिषद कार्यालय", en: "Municipal Office" } },
  { image: "/gallery/02-development.jpg", title: { hi: "विकास कार्य", en: "Development Work" } },
  { image: "/gallery/03-clean-green.jpg", title: { hi: "स्वच्छ एवं हरित", en: "Clean & Green" } },
  { image: "/gallery/04-water.jpg", title: { hi: "जल सेवाएँ", en: "Water Services" } },
  { image: "/gallery/05-road.jpg", title: { hi: "सड़क निर्माण", en: "Road Construction" } },
  { image: "/gallery/06-public-meeting.jpg", title: { hi: "जन सभा", en: "Public Meeting" } },
  { image: "/gallery/07-drain.jpg", title: { hi: "नाली निर्माण", en: "Drain Construction" } },
  { image: "/gallery/08-street-light.jpg", title: { hi: "स्ट्रीट लाइट", en: "Street Lights" } },
  { image: "/gallery/09-cleanliness.jpg", title: { hi: "स्वच्छता अभियान", en: "Cleanliness Drive" } },
  { image: "/gallery/10-plantation.jpg", title: { hi: "पौधारोपण", en: "Tree Plantation" } },
  { image: "/gallery/11-ward-sabha.jpg", title: { hi: "वार्ड सभा", en: "Ward Sabha" } },
  { image: "/gallery/12-community-hall.jpg", title: { hi: "सामुदायिक भवन", en: "Community Hall" } },
  { image: "/gallery/13-drinking-water.jpg", title: { hi: "पेयजल सुविधा", en: "Drinking Water" } },
  { image: "/gallery/14-market.jpg", title: { hi: "बाज़ार क्षेत्र", en: "Market Area" } },
  { image: "/gallery/15-citizens.jpg", title: { hi: "नागरिक संवाद", en: "Citizen Interaction" } },
];

// सूचनाएँ अलग फ़ाइल data/notices.js में हैं

// हमारे जनप्रतिनिधि — अध्यक्ष के संदेश के नीचे कार्ड में दिखते हैं (फोटो public/ में)
// terms: जिन वर्षों में चुनाव जीते — पुराने पहले। एक से ज़्यादा हों तो "लगातार X बार" बैज दिखता है
// (लगातार नहीं जीते हों तो consecutive: false लिखें — तब "X बार निर्वाचित" दिखेगा)
export const leaders = [
  {
    photo: "/chairperson.jpg",
    name: { hi: "संगीता कुमारी यादव", en: "Sangita Kumari Yadav" },
    role: { hi: "अध्यक्ष (मुख्य पार्षद)", en: "Chairperson (Mukhya Parshad)" },
    area: { hi: "त्रिवेणीगंज नगर परिषद", en: "Triveniganj Nagar Parishad" },
    terms: ["2022"],
    featured: true,
  },
  {
    photo: "/mla.jpg",
    name: { hi: "सोनम रानी सरदार", en: "Sonam Rani Sardar" },
    role: { hi: "विधायक", en: "MLA" },
    area: { hi: "त्रिवेणीगंज विधानसभा (44), सुपौल", en: "Triveniganj Assembly (44), Supaul" },
    party: { hi: "जनता दल (यूनाइटेड)", en: "Janata Dal (United)" },
    terms: ["2025"],
  },
  {
    photo: "/mp.jpg",
    name: { hi: "दिलेश्वर कामैत", en: "Dileshwar Kamait" },
    role: { hi: "सांसद", en: "Member of Parliament" },
    area: { hi: "सुपौल लोकसभा, बिहार", en: "Supaul Lok Sabha, Bihar" },
    party: { hi: "जनता दल (यूनाइटेड)", en: "Janata Dal (United)" },
    terms: ["2019", "2024"],
  },
];

export const officials = [
  { role: { hi: "कार्यपालक पदाधिकारी", en: "Executive Officer" }, name: { hi: "[नाम]", en: "[Name]" } },
  {
    role: { hi: "अध्यक्ष (मुख्य पार्षद)", en: "Chairperson" },
    name: { hi: "संगीता कुमारी यादव", en: "Sangita Kumari Yadav" },
  },
  {
    role: { hi: "उपाध्यक्ष (उप मुख्य पार्षद)", en: "Deputy Chairperson" },
    name: { hi: "[नाम]", en: "[Name]" },
  },
  { role: { hi: "राजस्व पदाधिकारी", en: "Revenue Officer" }, name: { hi: "[नाम]", en: "[Name]" } },
];

// बटन, लेबल और छोटे टेक्स्ट — पूरी साइट में इस्तेमाल होने वाले शब्द
export const ui = {
  govBihar: { hi: "बिहार सरकार", en: "Government of Bihar" },
  viewDetails: { hi: "विवरण देखें", en: "View Details" },
  ongoing: { hi: "वादे किए काम जो अभी प्रगति पर हैं", en: "Promised work in progress" },
  completed: { hi: "वादे किए गए काम जो पूरे किए गए", en: "Promised work completed" },
  future: { hi: "नए काम जो हम और करेंगे", en: "New work we will do" },
  sectionOurWork: { hi: "विकास", en: "Development" },
  sectionWork: { hi: "विकास परियोजनाएँ", en: "Development Projects" },
  sectionServices: { hi: "नागरिक सेवाएँ", en: "Citizen Services" },
  sectionServicesTitle: { hi: "नागरिकों के लिए सेवाएँ", en: "Services for Citizens" },
  sectionSchemes: { hi: "सरकारी कार्यक्रम", en: "Government Programmes" },
  sectionSchemesTitle: { hi: "सरकारी योजनाएँ", en: "Government Schemes" },
  sectionGallery: { hi: "गैलरी", en: "Gallery" },
  sectionGalleryTitle: { hi: "फोटो गैलरी", en: "Photo Gallery" },
  sectionNotices: { hi: "जानकारी", en: "Information" },
  sectionNoticesTitle: { hi: "नवीनतम सूचनाएँ", en: "Latest Notices" },
  sectionAbout: { hi: "हमारे बारे में", en: "About Us" },
  sectionSafety: { hi: "सुरक्षा एवं सूचना", en: "Safety & Information" },
  sectionSafetyTitle: { hi: "थाना रिपोर्ट एवं दुर्घटना सूचना", en: "Police Report & Accident Notices" },
  safetyIntro: {
    hi: "त्रिवेणीगंज थाने की दैनिक अपराध रिपोर्ट, महीने का पूरा इतिहास और दुर्घटना में मिले अज्ञात व्यक्तियों की सूचना — ताकि परिवार अपनों को पहचान सकें।",
    en: "Daily crime report from Triveniganj police station, full monthly history and notices of unidentified accident victims — so families can find their loved ones.",
  },
  last7Days: { hi: "पिछले 7 दिन — कुल केस", en: "Last 7 days — total cases" },
  urgent: { hi: "ज़रूरी सूचना", en: "Urgent" },
  missingShort: {
    hi: "क्या आप इन्हें पहचानते हैं? पूरा विवरण देखें या तुरंत थाने को फ़ोन करें।",
    en: "Do you recognise them? See full details or call the police station right away.",
  },
  noUnidentified: { hi: "अभी कोई अज्ञात व्यक्ति सूचना नहीं है", en: "No unidentified person notices right now" },
  unidentifiedAlert: { hi: "अज्ञात व्यक्ति — पहचान में मदद करें", en: "unidentified persons — help identify" },
  viewFullReport: { hi: "पूरी रिपोर्ट देखें", en: "View full report" },
  latestReport: { hi: "ताज़ा रिपोर्ट", en: "Latest report" },
  sample: { hi: "नमूना", en: "Sample" },
  sampleWarning: {
    hi: "यह नमूना डेटा है — असली आँकड़े थाने की आधिकारिक रिपोर्ट से भरे जाएँगे।",
    en: "This is sample data — real figures will be filled from the official police report.",
  },
  totalCases: { hi: "कुल केस", en: "Total cases" },
  falseCases: { hi: "झूठे / फ़र्ज़ी पाए गए", en: "Found false" },
  arrested: { hi: "गिरफ़्तार", en: "Arrested" },
  jailed: { hi: "जेल भेजे गए", en: "Sent to jail" },
  dailyReport: { hi: "दैनिक रिपोर्ट", en: "Daily report" },
  selectMonth: { hi: "महीना चुनें", en: "Select month" },
  monthChart: { hi: "हर दिन के कुल केस", en: "Total cases per day" },
  clickBarHint: { hi: "किसी दिन की पट्टी पर क्लिक करें — उस दिन की रिपोर्ट ऊपर दिखेगी", en: "Click a day's bar to see that day's report above" },
  monthTotal: { hi: "महीने के कुल केस", en: "Cases this month" },
  history: { hi: "दिन-वार इतिहास", en: "Day-wise history" },
  date: { hi: "तारीख", en: "Date" },
  recentCases: { hi: "हाल के केस", en: "Recent cases" },
  accused: { hi: "आरोपी", en: "Accused" },
  innocentNote: {
    hi: "आरोपी तब तक निर्दोष है जब तक अदालत में दोष सिद्ध न हो। नाम सिर्फ़ थाने के रिकॉर्ड के अनुसार गिरफ़्तार / जेल भेजे गए लोगों के दिखाए जाते हैं।",
    en: "An accused is innocent until proven guilty in court. Names are shown only for persons arrested / jailed as per police records.",
  },
  missingTitle: { hi: "दुर्घटना / अज्ञात व्यक्ति सूचना", en: "Accident / Unidentified Persons" },
  missingIntro: {
    hi: "दुर्घटना में मिले जिन लोगों की पहचान नहीं हो पाई है — अगर आप इनमें से किसी को पहचानते हैं तो तुरंत थाने को फ़ोन करें।",
    en: "People found in accidents who have not been identified — if you recognise anyone, call the police station immediately.",
  },
  deceased: { hi: "मृत", en: "Deceased" },
  injured: { hi: "घायल", en: "Injured" },
  identified: { hi: "पहचान हो गई", en: "Identified" },
  unidentified: { hi: "पहचान नहीं हुई", en: "Unidentified" },
  identify: { hi: "पूरा विवरण", en: "Full details" },
  callPolice: { hi: "थाने को कॉल करें", en: "Call police" },
  revealPhoto: { hi: "पहचान के लिए फोटो देखें", en: "View photo to identify" },
  revealNote: { hi: "यह फोटो दुर्घटना पीड़ित की है", en: "This photo is of an accident victim" },
  dateLabel: { hi: "तारीख", en: "Date" },
  placeLabel: { hi: "जगह", en: "Place" },
  genderAge: { hi: "लिंग / उम्र", en: "Gender / Age" },
  clothes: { hi: "कपड़े", en: "Clothing" },
  marks: { hi: "पहचान चिह्न", en: "Identifying marks" },
  belongings: { hi: "साथ मिला सामान", en: "Belongings" },
  keptAt: { hi: "कहाँ रखा गया", en: "Kept at" },
  identifyHelp: {
    hi: "अगर आप इन्हें पहचानते हैं तो थाने को फ़ोन करें और पहचान पत्र लेकर पहुँचें।",
    en: "If you recognise this person, call the police station and come with an ID proof.",
  },
  sectionTourism: { hi: "पर्यटन", en: "Tourism" },
  sectionTourismTitle: { hi: "घूमने की जगहें", en: "Places to Visit" },
  tourismIntro: {
    hi: "त्रिवेणीगंज और आस-पास की खास जगहें — पसंद की जगहें चुनें और अपनी यात्रा का रास्ता देखें",
    en: "Special places in and around Triveniganj — pick your favourites and see your travel route",
  },
  viewOnMap: { hi: "मैप पर देखें", en: "View on Map" },
  addToTrip: { hi: "यात्रा में जोड़ें", en: "Add to Trip" },
  inTrip: { hi: "यात्रा में है", en: "In Trip" },
  yourTrip: { hi: "आपकी यात्रा", en: "Your Trip" },
  places: { hi: "जगहें", en: "places" },
  seeRoute: { hi: "रास्ता देखें", en: "See Route" },
  clearTrip: { hi: "साफ़ करें", en: "Clear" },
  highlightsLabel: { hi: "मुख्य आकर्षण", en: "Highlights" },
  travelTip: { hi: "यात्रा सुझाव", en: "Travel Tip" },
  planYourTrip: { hi: "यात्रा की योजना", en: "Plan Your Trip" },
  details: { hi: "पूरी जानकारी", en: "Details" },
  inTriveniganj: { hi: "त्रिवेणीगंज में", en: "In Triveniganj" },
  sectionCouncillors: { hi: "वार्ड पार्षद", en: "Ward Councillors" },
  sectionCouncillorsTitle: { hi: "हमारे 27 वार्ड पार्षद", en: "Our 27 Ward Councillors" },
  councillorsIntro: {
    hi: "अपने वार्ड के पार्षद को पहचानें — फोटो पर क्लिक करके पूरा परिचय और संपर्क देखें",
    en: "Know your ward councillor — click a photo to see the full profile and contact",
  },
  searchCouncillor: { hi: "नाम या वार्ड नंबर से खोजें…", en: "Search by name or ward number…" },
  noResults: { hi: "कोई पार्षद नहीं मिला", en: "No councillor found" },
  showMore: { hi: "और देखें", en: "Show more" },
  showLess: { hi: "कम दिखाएँ", en: "Show less" },
  ward: { hi: "वार्ड", en: "Ward" },
  profile: { hi: "परिचय", en: "Profile" },
  area: { hi: "क्षेत्र / मोहल्ला", en: "Area / Locality" },
  education: { hi: "शिक्षा", en: "Education" },
  occupation: { hi: "व्यवसाय", en: "Occupation" },
  electedYear: { hi: "निर्वाचन वर्ष", en: "Elected" },
  mobile: { hi: "मोबाइल", en: "Mobile" },
  keyWorks: { hi: "मुख्य कार्य एवं प्राथमिकताएँ", en: "Key Work & Priorities" },
  call: { hi: "कॉल करें", en: "Call" },
  viewProfile: { hi: "पूरा परिचय", en: "Full Profile" },
  timesElected: { hi: "बार निर्वाचित", en: "times elected" },
  consecutively: { hi: "लगातार", en: "Consecutively" },
  inOfficeSince: { hi: "से पद पर", en: "In office since" },
  termsLabel: { hi: "कार्यकाल", en: "Terms" },
  sectionLeaders: { hi: "जनप्रतिनिधि", en: "Public Representatives" },
  sectionLeadersTitle: { hi: "हमारे जनप्रतिनिधि", en: "Our Representatives" },
  leadersIntro: {
    hi: "त्रिवेणीगंज के विकास के लिए मिलकर काम करने वाले आपके चुने हुए प्रतिनिधि",
    en: "Your elected representatives working together for the development of Triveniganj",
  },
  newBadge: { hi: "New", en: "New" },
  applyNow: { hi: "अभी आवेदन करें →", en: "Apply Now →" },
  viewService: { hi: "सेवा देखें →", en: "View Service →" },
  register: { hi: "दर्ज करें →", en: "Register →" },
  learnMore: { hi: "और जानें →", en: "Learn More →" },
  readFullMessage: { hi: "पूरा संदेश पढ़ें", en: "Read full message" },
  readLess: { hi: "कम पढ़ें", en: "Read less" },
  knowMore: { hi: "और जानें →", en: "Know More →" },
  openMenu: { hi: "मेन्यू खोलें", en: "Open menu" },
  close: { hi: "बंद करें", en: "Close" },
  backHome: { hi: "← होम पर वापस जाएँ", en: "← Back to Home" },
  readNotice: { hi: "पूरी सूचना पढ़ें", en: "Read full notice" },
  noticeDetails: { hi: "सूचना का विवरण", en: "Notice Details" },
  noticePhotos: { hi: "फोटो", en: "Photos" },
  otherNotices: { hi: "अन्य सूचनाएँ", en: "Other Notices" },
  publishedOn: { hi: "जारी तिथि", en: "Published on" },
  allNotices: { hi: "← सभी सूचनाएँ", en: "← All Notices" },
  importantInfo: { hi: "महत्वपूर्ण जानकारी", en: "Important Information" },
  schemeDetails: { hi: "पूरी जानकारी देखें ↓", en: "View Full Details ↓" },
  getHelp: { hi: "सहायता के लिए संपर्क करें", en: "Get Assistance" },
  modalFooter: {
    hi: "आपके सुझाव और सहभागिता से नगर परिषद के विकास को बेहतर बनाने में सहायता मिलती है।",
    en: "Your suggestions and participation help improve the development of the Nagar Parishad.",
  },
  quickLinks: { hi: "त्वरित लिंक", en: "Quick Links" },
  citizenSupport: { hi: "नागरिक सहायता", en: "Citizen Support" },
  publicComplaints: { hi: "सार्वजनिक शिकायतें", en: "Public Complaints" },
  municipalInfo: { hi: "नगर परिषद जानकारी", en: "Municipal Information" },
  digitalPortal: { hi: "डिजिटल नागरिक सेवा पोर्टल", en: "Digital Citizen Service Portal" },
  sectionMessageTitle: {
    hi: "❤️ हमारे नगरवासियों के नाम — अध्यक्ष का संदेश",
    en: "❤️ Message from the Chairperson",
  },
  sectionContactLabel: { hi: "संपर्क", en: "Contact" },
  sectionContact: { hi: "हमसे संपर्क करें", en: "Contact Us" },
  contactLabelAddress: { hi: "पता", en: "Address" },
  contactLabelPhone: { hi: "फ़ोन", en: "Phone" },
  contactLabelEmail: { hi: "ईमेल", en: "Email" },
  contactMapTitle: { hi: "कार्यालय का स्थान", en: "Office Location" },
  openInMaps: { hi: "Google Maps में खोलें ↗", en: "Open in Google Maps ↗" },
  formTitle: { hi: "अपना संदेश भेजें", en: "Send Your Message" },
  formSubtitle: {
    hi: "आपका सुझाव या शिकायत सीधे नगर परिषद तक पहुँचेगी",
    en: "Your suggestion or complaint goes straight to the Nagar Parishad",
  },
  tapToCall: { hi: "कॉल करने के लिए दबाएँ", en: "Tap to call" },
  chatOnWhatsapp: { hi: "WhatsApp पर बात करें", en: "Chat on WhatsApp" },
  contactIntro: {
    hi: "किसी भी जानकारी या शिकायत के लिए कार्यालय से संपर्क करें।",
    en: "Contact the office for any information or complaint.",
  },
  formName: { hi: "आपका नाम", en: "Your name" },
  formPhone: { hi: "मोबाइल नंबर", en: "Mobile number" },
  formMessage: { hi: "आपका सुझाव / शिकायत", en: "Your suggestion / complaint" },
  formSubmit: { hi: "भेजें", en: "Send" },
  formThanks: {
    hi: "धन्यवाद! आपका संदेश प्राप्त हो गया है।",
    en: "Thank you! Your message has been received.",
  },
  footerCtaTitle: { hi: "कोई समस्या या सुझाव?", en: "Have a problem or suggestion?" },
  footerCtaText: {
    hi: "नगर परिषद आपकी सेवा में है — सीधे कॉल करें या WhatsApp पर संदेश भेजें।",
    en: "The Nagar Parishad is at your service — call directly or message us on WhatsApp.",
  },
  footerServices: { hi: "नागरिक सेवाएँ", en: "Citizen Services" },
  helplines: { hi: "ज़रूरी हेल्पलाइन", en: "Important Helplines" },
  officeNumber: { hi: "नगर परिषद कार्यालय", en: "Nagar Parishad Office" },
  backToTop: { hi: "ऊपर जाएँ", en: "Back to top" },
  madeWith: { hi: "वेबसाइट निर्माण", en: "Website by" },
  contactDeveloper: { hi: "संपर्क / Developer", en: "Contact / Developer" },
  copyright: { hi: "सर्वाधिकार सुरक्षित", en: "All rights reserved" },
  pinLabel: { hi: "पिन कोड", en: "PIN Code" },
  contactLabelWhatsapp: { hi: "WhatsApp", en: "WhatsApp" },
  btnWhatsapp: { hi: "WhatsApp पर संदेश", en: "Message on WhatsApp" },
  btnCall: { hi: "अभी कॉल करें", en: "Call Now" },
  btnEmail: { hi: "ईमेल भेजें", en: "Send Email" },
  waPrefill: {
    hi: "नमस्ते, मैं त्रिवेणीगंज नगर परिषद से जानकारी लेना चाहता/चाहती हूँ।",
    en: "Hello, I would like some information from Triveniganj Nagar Parishad.",
  },
  formEmail: { hi: "ईमेल (वैकल्पिक)", en: "Email (optional)" },
  formType: { hi: "संदेश का प्रकार", en: "Type of message" },
  typeSuggestion: { hi: "सुझाव", en: "Suggestion" },
  typeComplaint: { hi: "शिकायत", en: "Complaint" },
  formSending: { hi: "भेजा जा रहा है…", en: "Sending…" },
  formError: {
    hi: "संदेश नहीं भेजा जा सका। कृपया दोबारा प्रयास करें या WhatsApp पर संपर्क करें।",
    en: "Message could not be sent. Please try again or contact us on WhatsApp.",
  },
  formPhoneHint: { hi: "10 अंकों का मोबाइल नंबर", en: "10-digit mobile number" },
};

// "अपना सुझाव दें" popup का नागरिक प्रतिक्रिया फ़ॉर्म
export const feedbackForm = {
  wardCount: 27, // नगर परिषद में कुल वार्ड
  title: { hi: "नागरिक प्रतिक्रिया एवं जन-प्राथमिकता फॉर्म", en: "Citizen Feedback & Public Priority Form" },
  intro: {
    hi: "आपकी राय — हमारे क्षेत्र के विकास के लिए महत्वपूर्ण है।",
    en: "Your opinion matters for the development of our area.",
  },
  sectionPersonal: { hi: "आपकी जानकारी", en: "Your Information" },
  name: { hi: "नाम", en: "Name" },
  phone: { hi: "मोबाइल नंबर", en: "Mobile number" },
  age: { hi: "आपकी आयु", en: "Your age" },
  gender: { hi: "लिंग", en: "Gender" },
  genderOptions: [
    { value: "male", label: { hi: "पुरुष", en: "Male" } },
    { value: "female", label: { hi: "महिला", en: "Female" } },
  ],
  ward: { hi: "आपका वार्ड नंबर", en: "Your ward number" },
  selectWard: { hi: "वार्ड चुनें", en: "Select ward" },
  wardLabel: { hi: "वार्ड", en: "Ward" },
  join: { hi: "क्या आप हमसे जुड़ना चाहते हैं?", en: "Would you like to join us?" },
  yesNo: [
    { value: "yes", label: { hi: "हां", en: "Yes" } },
    { value: "no", label: { hi: "नहीं", en: "No" } },
  ],
  familyMembers: { hi: "आपके परिवार में कुल सदस्यों की संख्या", en: "Total members in your family" },
  eligibleVoters: {
    hi: "आपके परिवार में मतदान के योग्य सदस्यों की संख्या",
    en: "Members in your family eligible to vote",
  },
  sectionPriorities: { hi: "आपके क्षेत्र की प्राथमिकताएं", en: "Priorities of Your Area" },
  bestWork: {
    hi: "पिछले 5 वर्षों में आपको कौन-सा कार्य सबसे अच्छा लगा?",
    en: "Which work did you like most in the last 5 years?",
  },
  selectOption: { hi: "विकल्प चुनें", en: "Select an option" },
  bestWorkOptions: [
    { value: "roads_drainage", label: { hi: "सड़क एवं नाला निर्माण", en: "Roads & drainage" } },
    { value: "water_supply", label: { hi: "जलापूर्ति", en: "Water supply" } },
    { value: "street_lights", label: { hi: "स्ट्रीट लाइट", en: "Street lights" } },
    { value: "sanitation", label: { hi: "स्वच्छता", en: "Sanitation" } },
    { value: "waste_management", label: { hi: "कचरा प्रबंधन", en: "Waste management" } },
    { value: "education", label: { hi: "शिक्षा", en: "Education" } },
    { value: "other", label: { hi: "अन्य", en: "Other" } },
  ],
  expectedImprovements: {
    hi: "2027 के बाद आप अपने वार्ड में किन प्रमुख सुधारों की अपेक्षा करते हैं?",
    en: "What major improvements do you expect in your ward after 2027?",
  },
  additionalWork: {
    hi: "आपके और आपके परिवार के बेहतर भविष्य के लिए कौन-से अतिरिक्त कार्य किए जाने चाहिए?",
    en: "What additional work should be done for a better future for you and your family?",
  },
  biggestProblem: { hi: "आपके क्षेत्र की सबसे बड़ी समस्या क्या है?", en: "What is the biggest problem in your area?" },
  majorImprovement: {
    hi: "यदि नगर परिषद में एक प्रमुख सुधार करने का अवसर मिले, तो आप क्या बदलना चाहेंगे?",
    en: "If you could make one major improvement in the Nagar Parishad, what would you change?",
  },
  sectionParticipation: { hi: "विकास में आपकी भागीदारी", en: "Your Participation in Development" },
  contribution: {
    hi: "आप अपने क्षेत्र के विकास में किस प्रकार योगदान देना चाहेंगे?",
    en: "How would you like to contribute to the development of your area?",
  },
  contributionOptions: [
    { value: "suggestions", label: { hi: "सुझाव देना", en: "Giving suggestions" } },
    { value: "local_programs", label: { hi: "स्थानीय कार्यक्रमों में भाग लेना", en: "Taking part in local programmes" } },
    { value: "cleanliness_drives", label: { hi: "स्वच्छता अभियान", en: "Cleanliness drives" } },
    { value: "plantation_environment", label: { hi: "पौधारोपण एवं पर्यावरण गतिविधियां", en: "Plantation & environment activities" } },
    { value: "other", label: { hi: "अन्य", en: "Other" } },
  ],
  followUp: {
    hi: "क्या आप अपनी प्रतिक्रिया के संबंध में आगे संपर्क किए जाने की अनुमति देते हैं?",
    en: "Do you allow us to contact you further about your feedback?",
  },
  sectionOther: { hi: "अन्य सुझाव", en: "Other Suggestions" },
  otherSuggestions: {
    hi: "क्या आपके पास कोई अन्य समस्या, सुझाव या अपेक्षा है?",
    en: "Do you have any other problem, suggestion or expectation?",
  },
  candidateTitle: { hi: "उम्मीदवार का संदेश", en: "Message from the Candidate" },
  candidateMessage: {
    hi: "संगीता कुमारी यादव की ओर से संदेश: आपके द्वारा साझा की गई समस्याओं, सुझावों और प्राथमिकताओं को क्षेत्र के विकास से जुड़े मुद्दों को समझने के लिए महत्वपूर्ण नागरिक प्रतिक्रिया के रूप में लिया जाएगा।",
    en: "Message from Sangita Kumari Yadav: The problems, suggestions and priorities you share will be taken as important citizen feedback to understand the development issues of the area.",
  },
  confirmation: {
    hi: "मैं पुष्टि करता/करती हूं कि मैंने यह जानकारी अपनी इच्छा से साझा की है।",
    en: "I confirm that I have shared this information voluntarily.",
  },
  submit: { hi: "अपनी प्रतिक्रिया भेजें", en: "Submit Your Feedback" },
  sending: { hi: "भेजा जा रहा है...", en: "Sending..." },
  success: {
    hi: "आपके सुझाव के लिए धन्यवाद। हम आपसे जल्द संपर्क करेंगे।",
    en: "Thank you for your suggestion. We will contact you soon.",
  },
  error: {
    hi: "सुझाव भेजा नहीं जा सका। कृपया कुछ देर बाद फिर प्रयास करें या WhatsApp पर संपर्क करें।",
    en: "Your suggestion could not be sent. Please try again later or contact us on WhatsApp.",
  },
};
