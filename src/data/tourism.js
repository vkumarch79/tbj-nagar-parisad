// पर्यटन — त्रिवेणीगंज और सुपौल ज़िले में घूमने की जगहें
//
// हर जगह का एक { } ब्लॉक है:
// - type: "religious" (धार्मिक), "nature" (प्राकृतिक), "village" (ग्रामीण) या "facility" (सुविधाएँ — स्टेशन, होटल)
// - local: true — त्रिवेणीगंज शहर की जगह ("त्रिवेणीगंज में" टैग दिखता है)
// - distance: त्रिवेणीगंज से दूरी (जैसे { hi: "लगभग 20 किमी", en: "About 20 km" }) — न हो तो हटा दें
// - photos: फोटो public/tourism/ में रखें — पहली फोटो कार्ड पर दिखती है; खाली [] हो तो आइकन दिखता है
// - mapQuery: Google Maps पर खोजने का पता (अंग्रेज़ी में) — "मैप पर देखें" और यात्रा रूट इसी से बनते हैं
// - highlights: मुख्य आकर्षण (जितने चाहें)

export const tourismOrigin = "Triveniganj, Supaul, Bihar"; // यात्रा यहीं से शुरू होती है

// ऊपर चलने वाली फोटो-पट्टी — ये फोटो एक लाइन में लगातार चलती हैं
export const tourismRibbon = [
  "/tourism/durga-mandir.jpg",
  "/tourism/kali-mandir.jpg",
  "/tourism/singheshwar-mandir.jpg",
  "/tourism/triveniganj-station.jpg",
  "/tourism/banner.jpg",
  "/tourism/hotel-balaji.jpg",
];

export const tourismTypes = [
  { value: "all", label: { hi: "सभी", en: "All" } },
  { value: "religious", label: { hi: "धार्मिक", en: "Religious" } },
  { value: "nature", label: { hi: "प्राकृतिक", en: "Nature" } },
  { value: "village", label: { hi: "ग्रामीण", en: "Village" } },
  { value: "facility", label: { hi: "सुविधाएँ", en: "Facilities" } },
];

export const places = [
  // ── त्रिवेणीगंज शहर ──
  {
    slug: "badi-durga-mandir",
    type: "religious",
    local: true,
    icon: "🛕",
    name: { hi: "बड़ी दुर्गा मंदिर", en: "Badi Durga Mandir" },
    location: { hi: "मेन रोड, त्रिवेणीगंज", en: "Main Road, Triveniganj" },
    photos: ["/tourism/durga-mandir.jpg"],
    desc: {
      hi: "त्रिवेणीगंज मेन रोड पर स्थित माँ दुर्गा का प्रसिद्ध मंदिर — नारंगी रंग का ऊँचा शिखर दूर से ही दिखाई देता है। यह शहर की पहचान और आस्था का प्रमुख केंद्र है।",
      en: "The famous temple of Goddess Durga on Triveniganj Main Road — its tall orange spire can be seen from afar. It is a landmark of the town and a major centre of faith.",
    },
    highlights: [
      { hi: "नारंगी रंग का भव्य और ऊँचा शिखर", en: "Grand, tall orange spire" },
      { hi: "दुर्गा पूजा पर विशेष सजावट, पूजा और मेला", en: "Special decorations, puja and fair during Durga Puja" },
      { hi: "मेन रोड पर — आसानी से पहुँचा जा सकता है", en: "On the main road — easy to reach" },
    ],
    tip: {
      hi: "दुर्गा पूजा (नवरात्रि) के दिनों में शाम को जाएँ — रोशनी और सजावट देखने लायक होती है।",
      en: "Visit in the evening during Durga Puja (Navratri) — the lights and decorations are worth seeing.",
    },
    mapQuery: "Durga Mandir, Main Road, Triveniganj, Supaul, Bihar",
  },
  {
    slug: "kali-mandir-mela-ground",
    type: "religious",
    local: true,
    icon: "🌺",
    name: { hi: "काली मंदिर, मेला ग्राउंड", en: "Kali Mandir, Mela Ground" },
    location: { hi: "मेला ग्राउंड, त्रिवेणीगंज", en: "Mela Ground, Triveniganj" },
    photos: ["/tourism/kali-mandir.jpg"],
    desc: {
      hi: "त्रिवेणीगंज के मेला ग्राउंड में स्थित माँ काली का भव्य मंदिर — सफ़ेद और लाल रंग का बहुमंज़िला शिखर इसकी खास पहचान है। पूजा और मेले के समय यहाँ खूब रौनक रहती है।",
      en: "The grand temple of Goddess Kali at the Triveniganj Mela Ground — its multi-tiered white-and-red spire is its signature. It is full of life during pujas and fairs.",
    },
    highlights: [
      { hi: "सफ़ेद-लाल बहुमंज़िला सुंदर शिखर", en: "Beautiful multi-tiered white-and-red spire" },
      { hi: "मेला ग्राउंड — त्योहारों पर मेला और रौनक", en: "Mela ground — fairs and festivities on festivals" },
      { hi: "खुला परिसर, परिवार के साथ घूमने के लिए अच्छा", en: "Open premises, good for a family outing" },
    ],
    tip: {
      hi: "काली पूजा और मेले के समय ज़रूर जाएँ — भीड़ में बच्चों का ध्यान रखें।",
      en: "Don't miss it during Kali Puja and the fair — keep an eye on children in the crowd.",
    },
    mapQuery: "Kali Mandir, Mela Ground, Triveniganj, Supaul, Bihar",
  },
  {
    slug: "triveniganj-railway-station",
    type: "facility",
    local: true,
    icon: "🚉",
    name: { hi: "त्रिवेणीगंज रेलवे स्टेशन", en: "Triveniganj Railway Station" },
    location: { hi: "त्रिवेणीगंज", en: "Triveniganj" },
    photos: ["/tourism/triveniganj-station.jpg"],
    desc: {
      hi: "त्रिवेणीगंज का रेलवे स्टेशन — बाहर से आने वाले यात्रियों के लिए शहर पहुँचने का आसान रास्ता। स्टेशन से शहर के मंदिर और बाज़ार ऑटो या रिक्शा से पहुँचे जा सकते हैं।",
      en: "Triveniganj railway station — an easy way for visitors to reach the town. Temples and markets in town can be reached by auto or rickshaw from the station.",
    },
    highlights: [
      { hi: "शहर का अपना रेलवे स्टेशन", en: "The town's own railway station" },
      { hi: "स्टेशन से ऑटो / रिक्शा उपलब्ध", en: "Autos / rickshaws available from the station" },
    ],
    tip: {
      hi: "ट्रेन का समय यात्रा से पहले NTES या IRCTC पर ज़रूर जाँच लें।",
      en: "Check train timings on NTES or IRCTC before you travel.",
    },
    mapQuery: "Triveniganj railway station, Supaul, Bihar",
  },
  {
    slug: "hotel-shree-balajee",
    type: "facility",
    local: true,
    icon: "🏨",
    name: { hi: "होटल श्री बालाजी", en: "Hotel Shree Balajee" },
    location: { hi: "पंचमुखी, त्रिवेणीगंज", en: "Panchmukhi, Triveniganj" },
    photos: ["/tourism/hotel-balaji.jpg"],
    desc: {
      hi: "बाहर से आने वाले यात्रियों और परिवारों के लिए त्रिवेणीगंज में ठहरने की सुविधा — शहर के मंदिरों और बाज़ार के पास।",
      en: "A place to stay in Triveniganj for visitors and families — close to the town's temples and market.",
    },
    highlights: [
      { hi: "शहर में रुकने की सुविधा", en: "Stay facility in town" },
      { hi: "मंदिरों और बाज़ार के पास", en: "Near temples and the market" },
    ],
    tip: {
      hi: "त्योहारों के समय कमरा पहले से बुक कर लें।",
      en: "Book your room in advance during festivals.",
    },
    mapQuery: "Hotel Shree Balajee, Triveniganj, Supaul, Bihar",
  },
  // ── आस-पास ──
  {
    slug: "singheshwar-sthan",
    type: "religious",
    icon: "🔱",
    name: { hi: "बाबा सिंहेश्वर स्थान", en: "Baba Singheshwar Sthan" },
    location: { hi: "सिंहेश्वर, मधेपुरा", en: "Singheshwar, Madhepura" },
    distance: { hi: "त्रिवेणीगंज से लगभग 20 किमी", en: "About 20 km from Triveniganj" },
    photos: ["/tourism/singheshwar-mandir.jpg"],
    desc: {
      hi: "मधेपुरा ज़िला मुख्यालय से लगभग 6 किलोमीटर उत्तर में स्थित भगवान शिव का प्रसिद्ध और प्राचीन मंदिर। सफ़ेद-लाल शिखर और नारंगी खंभों वाला यह भव्य मंदिर दूर-दूर तक आस्था का बड़ा केंद्र है।",
      en: "A famous, ancient temple of Lord Shiva about 6 km north of the Madhepura district headquarters. With its white-and-red spire and orange pillars, this grand temple is a major centre of faith for the whole region.",
    },
    highlights: [
      { hi: "प्राचीन शिव मंदिर — क्षेत्र का प्रमुख तीर्थ", en: "Ancient Shiva temple — a major pilgrimage site of the region" },
      { hi: "महाशिवरात्रि पर विशाल मेला और भारी भीड़", en: "Huge fair and crowds on Mahashivratri" },
      { hi: "सावन में जलाभिषेक के लिए दूर-दूर से श्रद्धालु", en: "Devotees come from far away for jalabhishek in Sawan" },
      { hi: "मान्यता है कि इसका नाम श्रृंगी ऋषि से जुड़ा है", en: "Its name is believed to be linked to sage Shringi Rishi" },
    ],
    tip: {
      hi: "त्रिवेणीगंज से आधे दिन में आराम से दर्शन करके लौट सकते हैं। सावन और महाशिवरात्रि में सुबह जल्दी निकलें।",
      en: "An easy half-day trip from Triveniganj. During Sawan and Mahashivratri, leave early in the morning.",
    },
    mapQuery: "Baba Singheshwar Sthan, Singheshwar, Madhepura, Bihar",
  },
  // ── सुपौल ज़िला ──
  {
    slug: "kosi-barrage",
    type: "nature",
    icon: "🌉",
    name: { hi: "कोसी नदी एवं कोसी बराज", en: "Kosi River & Kosi Barrage" },
    location: { hi: "भीमनगर, सुपौल", en: "Bhimnagar, Supaul" },
    photos: ["/tourism/kosi-barrage.jpg"],
    desc: {
      hi: "भारत और नेपाल से होकर बहने वाली कोसी नदी पर बना विशाल बराज। नदी का चौड़ा पाट, बराज के दर्जनों फाटक और शाम का नज़ारा देखने लायक है — यह परिवार के साथ पिकनिक के लिए लोकप्रिय जगह है।",
      en: "A massive barrage on the Kosi, a trans-boundary river flowing through India and Nepal. The wide river, dozens of barrage gates and the evening view make it a popular family picnic spot.",
    },
    highlights: [
      { hi: "कोसी नदी और बराज का शानदार नज़ारा", en: "Grand view of the Kosi river and barrage" },
      { hi: "पिकनिक और फोटोग्राफी के लिए बढ़िया जगह", en: "Great for picnics and photography" },
      { hi: "नदी में मछली पकड़ना यहाँ का प्रमुख व्यवसाय है", en: "Fishing is a major livelihood on the river" },
      { hi: "आस-पास कटैया पावर प्रोजेक्ट और अन्य पिकनिक स्थल", en: "Katiya power project and other picnic spots nearby" },
    ],
    tip: {
      hi: "शाम के समय जाएँ — सूर्यास्त का दृश्य सबसे सुंदर होता है। बराज क्षेत्र में सुरक्षा नियमों का पालन करें।",
      en: "Visit in the evening for the best sunset view. Follow the safety rules in the barrage area.",
    },
    mapQuery: "Kosi Barrage, Bhimnagar, Supaul, Bihar",
  },
  {
    slug: "vishnu-mandir",
    type: "religious",
    icon: "🛕",
    name: { hi: "विष्णु मंदिर", en: "Vishnu Mandir" },
    location: { hi: "सुपौल", en: "Supaul" },
    photos: ["/tourism/vishnu-mandir.jpg", "/tourism/vishnu-mandir-2.jpg", "/tourism/vishnu-mandir-3.jpg"],
    desc: {
      hi: "भगवान विष्णु (हरि, नारायण) को समर्पित यह सुंदर मंदिर अपनी दक्षिण भारतीय शैली की रंग-बिरंगी नक्काशी के लिए प्रसिद्ध है। देश के कई हिस्सों से श्रद्धालु यहाँ दर्शन के लिए आते हैं।",
      en: "Dedicated to Lord Vishnu (Hari, Narayana), this beautiful temple is known for its colourful South-Indian style carvings. Devotees from many parts of the country come here for darshan.",
    },
    highlights: [
      { hi: "दक्षिण भारतीय शैली का रंगीन गोपुरम", en: "Colourful South-Indian style gopuram" },
      { hi: "मूर्तियों और दीवारों पर बारीक नक्काशी", en: "Fine carvings on idols and walls" },
      { hi: "शांत और भक्तिमय वातावरण", en: "Peaceful, devotional atmosphere" },
    ],
    tip: {
      hi: "सुबह या शाम की आरती के समय जाएँ। मंदिर में शालीन कपड़े पहनें।",
      en: "Visit during the morning or evening aarti. Dress modestly inside the temple.",
    },
    mapQuery: "Vishnu Mandir, Supaul, Bihar",
  },
  {
    slug: "kapileshwar-mandir",
    type: "religious",
    icon: "🔱",
    name: { hi: "कपिलेश्वर मंदिर", en: "Kapileshwar Mandir" },
    location: { hi: "सुपौल", en: "Supaul" },
    photos: [],
    desc: {
      hi: "भगवान शिव को समर्पित ऐतिहासिक मंदिर। महाशिवरात्रि पर यहाँ बड़ी संख्या में श्रद्धालु पूजा-अर्चना के लिए आते हैं।",
      en: "A historic temple dedicated to Lord Shiva. Large numbers of devotees offer prayers here during Mahashivratri.",
    },
    highlights: [
      { hi: "प्राचीन शिव मंदिर", en: "Ancient Shiva temple" },
      { hi: "महाशिवरात्रि पर विशेष पूजा और मेला", en: "Special puja and fair on Mahashivratri" },
    ],
    tip: {
      hi: "महाशिवरात्रि पर भारी भीड़ होती है — सुबह जल्दी पहुँचें।",
      en: "It gets very crowded on Mahashivratri — reach early in the morning.",
    },
    mapQuery: "Kapileshwar Mandir, Supaul, Bihar",
  },
  {
    slug: "tintolia-kali-mandir",
    type: "religious",
    icon: "🌺",
    name: { hi: "तिनटोलिया काली मंदिर", en: "Tintolia Kali Mandir" },
    location: { hi: "सुपौल", en: "Supaul" },
    photos: [],
    desc: {
      hi: "माँ काली को समर्पित प्रसिद्ध मंदिर। माँ काली शक्ति, परिवर्तन और समय की देवी हैं — दूर-दूर से भक्त यहाँ दर्शन के लिए आते हैं।",
      en: "A famous temple dedicated to Goddess Kali — the goddess of power, change and time. Devotees come from far and wide for darshan.",
    },
    highlights: [
      { hi: "माँ काली का प्रसिद्ध शक्ति स्थल", en: "Renowned shrine of Goddess Kali" },
      { hi: "नवरात्रि और काली पूजा पर विशेष आयोजन", en: "Special events on Navratri and Kali Puja" },
    ],
    tip: {
      hi: "काली पूजा और नवरात्रि में यहाँ की रौनक देखने लायक होती है।",
      en: "The festive atmosphere during Kali Puja and Navratri is worth seeing.",
    },
    mapQuery: "Tintolia Kali Mandir, Supaul, Bihar",
  },
  {
    slug: "hanuman-mandir",
    type: "religious",
    icon: "🚩",
    name: { hi: "हनुमान मंदिर", en: "Hanuman Mandir" },
    location: { hi: "सुपौल शहर का केंद्र", en: "Supaul town centre" },
    photos: [],
    desc: {
      hi: "सुपौल शहर के बीचों-बीच स्थित भगवान हनुमान का मंदिर। दीवारों पर की गई नक्काशी दूर-दूर से लोगों को आकर्षित करती है।",
      en: "A temple of Lord Hanuman right in the centre of Supaul town. The carvings on its walls attract visitors from far away.",
    },
    highlights: [
      { hi: "दीवारों पर सुंदर नक्काशी", en: "Beautiful wall carvings" },
      { hi: "मंगलवार और शनिवार को विशेष भीड़", en: "Busy on Tuesdays and Saturdays" },
    ],
    tip: {
      hi: "शहर के बीच में है — बाज़ार घूमने के साथ आसानी से जा सकते हैं।",
      en: "It is in the town centre — easy to combine with a market visit.",
    },
    mapQuery: "Hanuman Mandir, Supaul, Bihar",
  },
  {
    slug: "dharahara",
    type: "village",
    icon: "🌳",
    name: { hi: "धरहरा गाँव", en: "Dharahara Village" },
    location: { hi: "बिहार", en: "Bihar" },
    photos: [],
    desc: {
      hi: "वह गाँव जहाँ बेटी के जन्म पर परिवार कम से कम 10 पेड़ लगाते हैं — ज़्यादातर आम और लीची। यह परंपरा पीढ़ियों से चली आ रही है और 2010 में पूरे देश में चर्चा में आई।",
      en: "The village where families plant at least 10 trees — mostly mango and litchi — when a girl is born. The generations-old tradition came into national limelight in 2010.",
    },
    highlights: [
      { hi: "बेटी के जन्म पर पेड़ लगाने की अनोखी परंपरा", en: "Unique tradition of planting trees when a girl is born" },
      { hi: "आम और लीची के घने बाग", en: "Dense mango and litchi orchards" },
    ],
    tip: {
      hi: "मई-जून में आम और लीची के मौसम में जाना सबसे अच्छा है।",
      en: "Best visited in May–June during the mango and litchi season.",
    },
    mapQuery: "Dharahara village, Bihar",
  },
];

// यात्रा की जानकारी — "कब जाएँ", "कैसे पहुँचें", "ध्यान रखें"
export const travelTips = [
  {
    icon: "🗓️",
    title: { hi: "कब जाएँ", en: "When to Visit" },
    points: [
      { hi: "अक्टूबर से मार्च — मौसम सबसे सुहाना", en: "October to March — the most pleasant weather" },
      { hi: "महाशिवरात्रि, नवरात्रि और छठ पर विशेष रौनक", en: "Festive buzz on Mahashivratri, Navratri and Chhath" },
      { hi: "बरसात (जुलाई–सितंबर) में नदी किनारे सावधानी रखें", en: "Take care near rivers in the monsoon (July–September)" },
    ],
  },
  {
    icon: "🚌",
    title: { hi: "कैसे पहुँचें", en: "How to Reach" },
    points: [
      { hi: "सड़क: त्रिवेणीगंज से सुपौल होकर बस, ऑटो या निजी वाहन", en: "Road: bus, auto or own vehicle from Triveniganj via Supaul" },
      { hi: "रेल: सुपौल स्टेशन या सहरसा जंक्शन", en: "Rail: Supaul station or Saharsa Junction" },
      { hi: "हवाई: नज़दीकी हवाई अड्डा दरभंगा", en: "Air: nearest airport is Darbhanga" },
    ],
  },
  {
    icon: "🎒",
    title: { hi: "ध्यान रखें", en: "Keep in Mind" },
    points: [
      { hi: "मंदिरों में शालीन कपड़े पहनें", en: "Dress modestly in temples" },
      { hi: "पानी की बोतल और ज़रूरी दवाइयाँ साथ रखें", en: "Carry water and essential medicines" },
      { hi: "कचरा केवल कूड़ेदान में डालें — शहर को साफ़ रखें", en: "Use dustbins — keep the town clean" },
    ],
  },
];
