// सूचनाएँ — होम पेज पर सूची और हर सूचना का पूरा पेज /notices/<slug> पर
//
// नई सूचना जोड़ने के लिए: नीचे सूची में एक नया { } ब्लॉक जोड़ें (कहीं भी — तारीख के हिसाब से अपने-आप सबसे ऊपर आएगी)
// - slug: URL का नाम (अंग्रेज़ी, बिना स्पेस, जैसे "holding-tax-2026")
// - date: "YYYY-MM-DD" — पिछले NEW_DAYS दिनों की सूचना पर "New" टैग दिखता है
// - image: ऊपर की बड़ी फोटो, photos: नीचे की फोटो गैलरी (डमी फोटो — असली फोटो public/ में रखकर "/notice1.jpg" जैसे लिखें)
// - points: पॉइंट-बाय-पॉइंट जानकारी
// [ ] में लिखी बातें नमूना हैं — असली जानकारी भरें

export const NEW_DAYS = 15;

export const notices = [
  {
    slug: "holding-tax",
    date: "2026-10-05",
    category: { hi: "महत्वपूर्ण सूचना", en: "Important Notice" },
    title: { hi: "होल्डिंग टैक्स जमा करने की सूचना", en: "Notice for Holding Tax Payment" },
    desc: {
      hi: "वित्तीय वर्ष 2026-27 का होल्डिंग टैक्स समय पर जमा करें और विलंब शुल्क से बचें।",
      en: "Pay the holding tax for financial year 2026-27 on time and avoid late fees.",
    },
    image: "https://picsum.photos/seed/triveniganj-notice-tax/1200/600",
    points: [
      {
        hi: "सभी भवन मालिक वित्तीय वर्ष 2026-27 का होल्डिंग टैक्स [31 अक्टूबर 2026] तक जमा करें।",
        en: "All property owners must pay the holding tax for FY 2026-27 by [31 October 2026].",
      },
      {
        hi: "टैक्स नगर परिषद कार्यालय के काउंटर पर सुबह 10 बजे से शाम 4 बजे तक जमा किया जा सकता है।",
        en: "Tax can be paid at the Nagar Parishad office counter from 10 AM to 4 PM.",
      },
      {
        hi: "जमा करते समय पिछली रसीद, होल्डिंग नंबर और आधार कार्ड साथ लाएँ।",
        en: "Bring your previous receipt, holding number and Aadhaar card when paying.",
      },
      {
        hi: "निर्धारित तिथि के बाद भुगतान पर नियमानुसार विलंब शुल्क लगेगा।",
        en: "A late fee will apply as per rules for payment after the due date.",
      },
      {
        hi: "किसी भी जानकारी के लिए नगर परिषद कार्यालय या दिए गए फ़ोन नंबर पर संपर्क करें।",
        en: "For any information, contact the Nagar Parishad office or the phone number given.",
      },
    ],
    photos: [
      "https://picsum.photos/seed/triveniganj-notice-tax1/800/600",
      "https://picsum.photos/seed/triveniganj-notice-tax2/800/600",
    ],
  },
  {
    slug: "cleanliness-drive",
    date: "2026-09-28",
    category: { hi: "स्वच्छता अभियान", en: "Cleanliness Drive" },
    title: { hi: "वार्ड-वार विशेष स्वच्छता अभियान", en: "Ward-wise Special Cleanliness Drive" },
    desc: {
      hi: "सभी वार्डों में विशेष सफाई अभियान चलाया जाएगा — नागरिकों से सहयोग का अनुरोध।",
      en: "A special cleaning drive will run in all wards — citizens are requested to cooperate.",
    },
    image: "https://picsum.photos/seed/triveniganj-notice-clean/1200/600",
    points: [
      {
        hi: "[1 अक्टूबर से 15 अक्टूबर 2026] तक सभी वार्डों में विशेष स्वच्छता अभियान चलाया जाएगा।",
        en: "A special cleanliness drive will run in all wards from [1 to 15 October 2026].",
      },
      {
        hi: "इस दौरान नालियों की सफाई, सड़कों से कचरा हटाना और फॉगिंग का कार्य किया जाएगा।",
        en: "Drain cleaning, garbage removal from roads and fogging will be done during this period.",
      },
      {
        hi: "नागरिक गीला और सूखा कचरा अलग-अलग रखें और कचरा गाड़ी को ही दें।",
        en: "Citizens should keep wet and dry waste separate and hand it only to the garbage vehicle.",
      },
      {
        hi: "सड़क या नाली में कचरा न फेंकें — यह दंडनीय है।",
        en: "Do not throw garbage on roads or in drains — it is punishable.",
      },
      {
        hi: "अपने वार्ड में सफाई से जुड़ी समस्या की सूचना वार्ड पार्षद या नगर परिषद कार्यालय को दें।",
        en: "Report cleanliness problems in your ward to the ward councillor or the Nagar Parishad office.",
      },
    ],
    photos: [
      "https://picsum.photos/seed/triveniganj-notice-clean1/800/600",
      "https://picsum.photos/seed/triveniganj-notice-clean2/800/600",
      "https://picsum.photos/seed/triveniganj-notice-clean3/800/600",
    ],
  },
  {
    slug: "ward-meeting",
    date: "2026-09-10",
    category: { hi: "सार्वजनिक जानकारी", en: "Public Information" },
    title: { hi: "वार्ड सभा की बैठक", en: "Ward Sabha Meeting" },
    desc: {
      hi: "विकास कार्यों और नागरिक समस्याओं पर चर्चा के लिए वार्ड सभा की बैठक।",
      en: "Ward Sabha meeting to discuss development work and citizen issues.",
    },
    image: "https://picsum.photos/seed/triveniganj-notice-meeting/1200/600",
    points: [
      {
        hi: "वार्ड सभा की बैठक [20 सितंबर 2026] को सुबह 11 बजे [नगर परिषद सभा भवन] में होगी।",
        en: "The Ward Sabha meeting will be held on [20 September 2026] at 11 AM at [Nagar Parishad hall].",
      },
      {
        hi: "बैठक में सड़क, नाली, पेयजल और स्ट्रीट लाइट से जुड़े कार्यों पर चर्चा होगी।",
        en: "Work related to roads, drains, drinking water and street lights will be discussed.",
      },
      {
        hi: "सभी नागरिक अपनी समस्याएँ और सुझाव लिखित रूप में ला सकते हैं।",
        en: "All citizens may bring their problems and suggestions in writing.",
      },
      {
        hi: "अधिक से अधिक संख्या में उपस्थित होकर अपने वार्ड के विकास में भागीदार बनें।",
        en: "Attend in large numbers and take part in the development of your ward.",
      },
    ],
    photos: [
      "https://picsum.photos/seed/triveniganj-notice-meeting1/800/600",
      "https://picsum.photos/seed/triveniganj-notice-meeting2/800/600",
    ],
  },
];

// तारीख के हिसाब से — सबसे नई सबसे ऊपर
export const sortedNotices = [...notices].sort((a, b) => b.date.localeCompare(a.date));

// पिछले NEW_DAYS दिनों की सूचना "नई" है
export function isNewNotice(notice) {
  const days = (Date.now() - new Date(notice.date).getTime()) / 86400000;
  return days >= 0 && days <= NEW_DAYS;
}
