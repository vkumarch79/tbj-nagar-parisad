# त्रिवेणीगंज नगर परिषद — वेबसाइट

React + Vite + Tailwind CSS + shadcn-style components।

## चलाने के लिए
```bash
npm install
npm run dev
```

## फ़ोल्डर संरचना (कहाँ क्या है)

| फ़ोल्डर / फ़ाइल | काम |
|---|---|
| `src/main.jsx` | React शुरू करने वाली फ़ाइल |
| `src/App.jsx` | पूरे पेज का ढाँचा — सभी सेक्शन यहीं क्रम से जुड़ते हैं |
| `src/index.css` | Tailwind और रंगों के वेरिएबल |
| `src/data/content.js` | **सारा टेक्स्ट, नाम, सूचनाएँ, सेवाएँ यहीं बदलें** |
| `src/components/ui/` | बुनियादी UI (Button, Card, Badge) — shadcn style |
| `src/components/layout/` | ऊपर की सरकारी पट्टी, हेडर, फ़ुटर, भाषा बटन |
| `src/components/home/` | होम पेज: हीरो, 2×2 कार्ड, अध्यक्ष का संदेश, सेवाएँ |
| `src/components/work/` | विकास कार्य की सूची, कार्ड और स्टेटस टैग |
| `src/components/notices/` | ताज़ा सूचनाएँ |
| `src/components/contact/` | संपर्क जानकारी और फ़ॉर्म |
| `src/components/shared/` | सभी सेक्शन में दोबारा इस्तेमाल होने वाले हिस्से |
| `src/lib/utils.js` | `cn()` helper (class जोड़ने/मर्ज करने के लिए) |

## किसी चीज़ को कैसे बदलें
- **नाम, पता, फ़ोन, टेक्स्ट** → `src/data/content.js`
- **लोगो / फोटो** → `public/` में रखें, फिर `SiteHeader.jsx` और `HeroSection.jsx` में `<img>` लगाएँ
- **रंग** → `src/index.css` (`--primary` आदि) या `#1d4f8c` जैसे रंग जहाँ लिखे हैं
- **नया सेक्शन** → `src/components/` में नई फ़ाइल बनाएँ, फिर `App.jsx` में जोड़ें

## संपर्क फ़ॉर्म से ईमेल कैसे पाएँ (Admin सेटअप)

हर संदेश admin के ईमेल पर आता है, जिसमें भेजने वाले का नाम, फ़ोन, ईमेल, प्रकार (सुझाव/शिकायत) और संदेश होता है।

1. **[formspree.io](https://formspree.io)** पर मुफ़्त खाता बनाएँ।
2. Dashboard में **New Form** बनाएँ और उसका endpoint कॉपी करें (जैसे `https://formspree.io/f/xxxxxxx`)।
3. `.env.example` को `.env` नाम से कॉपी करें और भरें:
   ```
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
   VITE_ADMIN_EMAIL=admin@example.com
   ```
4. `npm run build` या `npm run dev` दोबारा चलाएँ।

Formspree के dashboard में सारे संदेश भी सेव रहते हैं, ताकि admin कभी भी पुराने संदेश देख सके।

**बिना Formspree के:** अगर `VITE_CONTACT_ENDPOINT` खाली है, तो फ़ॉर्म भेजने पर उपयोगकर्ता का मेल ऐप खुलता है जिसमें संदेश पहले से भरा होता है (`VITE_ADMIN_EMAIL` ज़रूरी है)।

**WhatsApp और कॉल:** नंबर `src/data/content.js` में `phoneRaw` से बदलें।

**Deploy (Vercel) पर:** Vercel के Project Settings → Environment Variables में ये दोनों variables जोड़ें, फिर redeploy करें।

## TODO
- [ ] असली लोगो, अध्यक्ष की फोटो और हीरो फोटो जोड़ें
- [ ] `content.js` के सभी `[ ]` वाले स्थान भरें
- [ ] संपर्क फ़ॉर्म को असली बैकएंड (या Formspree) से जोड़ें
- [x] हिंदी/English भाषा बटन — अब काम करता है (`src/i18n/LanguageContext.jsx`)

## भाषा कैसे बदलें
हर टेक्स्ट `src/data/content.js` में `{ hi: "...", en: "..." }` के रूप में है। नया टेक्स्ट जोड़ते समय दोनों भाषाएँ भरें। Component में `const { t } = useLanguage();` लेकर `t(value)` से टेक्स्ट दिखाएँ।

संपर्क / Developer: Vikash Kumar
