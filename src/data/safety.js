// सुरक्षा एवं सूचना — थाने की दैनिक रिपोर्ट, केस सूची और दुर्घटना / अज्ञात व्यक्ति सूचना
//
// ⚠️ isSample: true रहने तक पेज पर "नमूना डेटा" की चेतावनी दिखती है।
//    असली आँकड़े भरने के बाद इसे false कर दें।
//
// नियम (गलत जानकारी से किसी को नुकसान न हो, इसलिए):
// - आँकड़े सिर्फ़ थाने के आधिकारिक रिकॉर्ड से भरें
// - केस में नाम (accused) सिर्फ़ status "arrested" या "jailed" पर दिखता है
// - status "false" (झूठा / फ़र्ज़ी आरोप) वाले केस में नाम कभी नहीं दिखता
// - sensitive: true (महिला / यौन अपराध, नाबालिग से जुड़े केस) में नाम कभी नहीं दिखता — कानूनन ज़रूरी

export const isSample = true;

export const policeStation = {
  name: { hi: "त्रिवेणीगंज थाना", en: "Triveniganj Police Station" },
  phone: "", // थाने का नंबर (जैसे "9431822XXX") — खाली हो तो 112 दिखेगा
  source: { hi: "स्रोत: त्रिवेणीगंज थाना (दैनिक रिपोर्ट)", en: "Source: Triveniganj Police Station (daily report)" },
};

// अपराध के प्रकार — रिपोर्ट में इन्हीं नामों की गिनती भरें
export const crimeTypes = [
  { key: "theft", icon: "👜", label: { hi: "चोरी / लूट", en: "Theft / Robbery" } },
  { key: "fight", icon: "⚠️", label: { hi: "मारपीट / झगड़ा", en: "Assault / Fight" } },
  { key: "accident", icon: "🚑", label: { hi: "सड़क दुर्घटना", en: "Road Accident" } },
  { key: "liquor", icon: "🚫", label: { hi: "शराब / नशा", en: "Liquor / Drugs" } },
  { key: "other", icon: "📁", label: { hi: "अन्य", en: "Other" } },
];

// हर दिन की एक लाइन — नई तारीख नीचे जोड़ते जाएँ (पुरानी लाइनें इतिहास बनती हैं)
// falseCases: जाँच में झूठे / फ़र्ज़ी पाए गए केस, arrested: गिरफ़्तार, jailed: जेल भेजे गए
export const dailyReports = [
  { date: "2026-09-01", theft: 2, fight: 1, accident: 1, liquor: 2, other: 0, falseCases: 0, arrested: 6, jailed: 4 },
  { date: "2026-09-02", theft: 0, fight: 2, accident: 2, liquor: 0, other: 2, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-09-03", theft: 3, fight: 3, accident: 0, liquor: 0, other: 0, falseCases: 1, arrested: 0, jailed: 0 },
  { date: "2026-09-04", theft: 1, fight: 0, accident: 2, liquor: 2, other: 1, falseCases: 0, arrested: 1, jailed: 0 },
  { date: "2026-09-05", theft: 1, fight: 2, accident: 1, liquor: 0, other: 2, falseCases: 0, arrested: 4, jailed: 2 },
  { date: "2026-09-06", theft: 1, fight: 0, accident: 2, liquor: 2, other: 2, falseCases: 0, arrested: 5, jailed: 0 },
  { date: "2026-09-07", theft: 0, fight: 0, accident: 2, liquor: 0, other: 1, falseCases: 1, arrested: 2, jailed: 1 },
  { date: "2026-09-08", theft: 3, fight: 2, accident: 1, liquor: 0, other: 0, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-09-09", theft: 3, fight: 2, accident: 2, liquor: 1, other: 1, falseCases: 0, arrested: 1, jailed: 1 },
  { date: "2026-09-10", theft: 1, fight: 2, accident: 0, liquor: 1, other: 1, falseCases: 0, arrested: 5, jailed: 0 },
  { date: "2026-09-11", theft: 2, fight: 2, accident: 2, liquor: 1, other: 2, falseCases: 1, arrested: 9, jailed: 7 },
  { date: "2026-09-12", theft: 0, fight: 0, accident: 1, liquor: 1, other: 2, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-09-13", theft: 3, fight: 2, accident: 2, liquor: 1, other: 2, falseCases: 1, arrested: 0, jailed: 0 },
  { date: "2026-09-14", theft: 2, fight: 1, accident: 2, liquor: 0, other: 1, falseCases: 0, arrested: 1, jailed: 1 },
  { date: "2026-09-15", theft: 1, fight: 1, accident: 1, liquor: 1, other: 1, falseCases: 0, arrested: 1, jailed: 1 },
  { date: "2026-09-16", theft: 3, fight: 2, accident: 0, liquor: 1, other: 2, falseCases: 1, arrested: 6, jailed: 2 },
  { date: "2026-09-17", theft: 3, fight: 1, accident: 0, liquor: 0, other: 0, falseCases: 0, arrested: 1, jailed: 0 },
  { date: "2026-09-18", theft: 0, fight: 3, accident: 2, liquor: 0, other: 1, falseCases: 1, arrested: 0, jailed: 0 },
  { date: "2026-09-19", theft: 3, fight: 2, accident: 2, liquor: 2, other: 1, falseCases: 0, arrested: 8, jailed: 0 },
  { date: "2026-09-20", theft: 3, fight: 3, accident: 1, liquor: 1, other: 1, falseCases: 0, arrested: 7, jailed: 6 },
  { date: "2026-09-21", theft: 0, fight: 1, accident: 0, liquor: 0, other: 1, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-09-22", theft: 0, fight: 0, accident: 0, liquor: 2, other: 0, falseCases: 0, arrested: 1, jailed: 0 },
  { date: "2026-09-23", theft: 0, fight: 1, accident: 2, liquor: 1, other: 0, falseCases: 1, arrested: 2, jailed: 2 },
  { date: "2026-09-24", theft: 2, fight: 3, accident: 0, liquor: 0, other: 1, falseCases: 1, arrested: 3, jailed: 3 },
  { date: "2026-09-25", theft: 2, fight: 0, accident: 0, liquor: 0, other: 2, falseCases: 1, arrested: 2, jailed: 1 },
  { date: "2026-09-26", theft: 1, fight: 0, accident: 0, liquor: 2, other: 1, falseCases: 0, arrested: 4, jailed: 0 },
  { date: "2026-09-27", theft: 2, fight: 0, accident: 2, liquor: 1, other: 2, falseCases: 1, arrested: 2, jailed: 1 },
  { date: "2026-09-28", theft: 1, fight: 2, accident: 2, liquor: 0, other: 2, falseCases: 0, arrested: 3, jailed: 3 },
  { date: "2026-09-29", theft: 1, fight: 1, accident: 2, liquor: 1, other: 1, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-09-30", theft: 3, fight: 2, accident: 0, liquor: 2, other: 2, falseCases: 1, arrested: 7, jailed: 5 },
  { date: "2026-10-01", theft: 2, fight: 0, accident: 0, liquor: 0, other: 0, falseCases: 1, arrested: 0, jailed: 0 },
  { date: "2026-10-02", theft: 1, fight: 3, accident: 2, liquor: 2, other: 0, falseCases: 1, arrested: 5, jailed: 5 },
  { date: "2026-10-03", theft: 0, fight: 0, accident: 1, liquor: 2, other: 0, falseCases: 1, arrested: 1, jailed: 1 },
  { date: "2026-10-04", theft: 2, fight: 0, accident: 2, liquor: 1, other: 1, falseCases: 1, arrested: 5, jailed: 0 },
  { date: "2026-10-05", theft: 1, fight: 1, accident: 0, liquor: 0, other: 0, falseCases: 1, arrested: 2, jailed: 0 },
  { date: "2026-10-06", theft: 3, fight: 2, accident: 0, liquor: 2, other: 2, falseCases: 0, arrested: 0, jailed: 0 },
  { date: "2026-10-07", theft: 0, fight: 1, accident: 1, liquor: 0, other: 0, falseCases: 0, arrested: 1, jailed: 0 },
  { date: "2026-10-08", theft: 2, fight: 1, accident: 2, liquor: 1, other: 1, falseCases: 1, arrested: 2, jailed: 0 },
  { date: "2026-10-09", theft: 2, fight: 3, accident: 2, liquor: 2, other: 2, falseCases: 1, arrested: 8, jailed: 2 },
  { date: "2026-10-10", theft: 1, fight: 0, accident: 1, liquor: 0, other: 2, falseCases: 0, arrested: 1, jailed: 0 },
];

// केस सूची (वैकल्पिक) — status: "registered" (दर्ज), "investigation" (जाँच जारी), "arrested", "jailed", "false"
export const cases = [
  {
    date: "2026-10-10",
    type: "theft",
    area: { hi: "[मोहल्ला / वार्ड]", en: "[Locality / Ward]" },
    status: "arrested",
    accused: { hi: "[आरोपी का नाम]", en: "[Accused name]" },
    note: { hi: "[संक्षिप्त विवरण — जैसे बाइक चोरी, बरामद]", en: "[Short note — e.g. bike theft, recovered]" },
  },
  {
    date: "2026-10-09",
    type: "fight",
    area: { hi: "[मोहल्ला / वार्ड]", en: "[Locality / Ward]" },
    status: "investigation",
    note: { hi: "[संक्षिप्त विवरण]", en: "[Short note]" },
  },
  {
    date: "2026-10-09",
    type: "other",
    area: { hi: "[मोहल्ला / वार्ड]", en: "[Locality / Ward]" },
    status: "false",
    note: { hi: "[जाँच में आरोप झूठा पाया गया]", en: "[Allegation found false on investigation]" },
  },
  {
    date: "2026-10-08",
    type: "liquor",
    area: { hi: "[मोहल्ला / वार्ड]", en: "[Locality / Ward]" },
    status: "jailed",
    accused: { hi: "[आरोपी का नाम]", en: "[Accused name]" },
    note: { hi: "[संक्षिप्त विवरण]", en: "[Short note]" },
  },
];

// दुर्घटना / अज्ञात व्यक्ति सूचना — परिवार पहचान सकें
// kind: "deceased" (मृत) या "injured" (घायल), status: "unidentified" या "identified"
// photo: सिर्फ़ चेहरे की साफ़ फोटो (खून / चोट वाली नहीं) — पेज पर धुँधली दिखती है, क्लिक पर साफ़
export const missingPersons = [
  {
    id: "A-2026-014",
    kind: "deceased",
    status: "unidentified",
    date: "2026-10-09",
    place: { hi: "[जगह — जैसे NH-327A, पिलुवाहा मोड़ के पास]", en: "[Place — e.g. near ... on NH]" },
    gender: { hi: "पुरुष", en: "Male" },
    age: { hi: "लगभग [35–40] वर्ष", en: "About [35–40] years" },
    clothes: { hi: "[नीली शर्ट, काली पैंट]", en: "[Blue shirt, black trousers]" },
    marks: { hi: "[पहचान चिह्न — जैसे दाहिने हाथ पर टैटू]", en: "[Identifying mark — e.g. tattoo on right hand]" },
    belongings: { hi: "[साथ मिला सामान — जैसे मोबाइल, घड़ी]", en: "[Belongings — e.g. mobile, watch]" },
    keptAt: { hi: "[सदर अस्पताल, सुपौल]", en: "[Sadar Hospital, Supaul]" },
    photo: "",
  },
  {
    id: "A-2026-013",
    kind: "injured",
    status: "unidentified",
    date: "2026-10-07",
    place: { hi: "[जगह]", en: "[Place]" },
    gender: { hi: "पुरुष", en: "Male" },
    age: { hi: "लगभग [20–25] वर्ष", en: "About [20–25] years" },
    clothes: { hi: "[कपड़ों का विवरण]", en: "[Clothing]" },
    marks: { hi: "", en: "" },
    belongings: { hi: "[सामान]", en: "[Belongings]" },
    keptAt: { hi: "[रेफ़रल अस्पताल, त्रिवेणीगंज]", en: "[Referral Hospital, Triveniganj]" },
    photo: "",
  },
  {
    id: "A-2026-011",
    kind: "deceased",
    status: "identified",
    date: "2026-10-02",
    place: { hi: "[जगह]", en: "[Place]" },
    gender: { hi: "महिला", en: "Female" },
    age: { hi: "लगभग [50] वर्ष", en: "About [50] years" },
    clothes: { hi: "", en: "" },
    marks: { hi: "", en: "" },
    belongings: { hi: "", en: "" },
    keptAt: { hi: "", en: "" },
    photo: "",
  },
];
