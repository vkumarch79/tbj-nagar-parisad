import { createContext, useContext, useEffect, useState } from "react";

// भाषा का state पूरी साइट में बाँटने के लिए।
// lang: "hi" या "en"
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // चुनी हुई भाषा याद रखें, ताकि दूसरा पेज खुलने पर भी वही रहे
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "en" ? "en" : "hi";
    } catch {
      return "hi";
    }
  });

  // HTML का lang attribute भी बदलें (screen readers और browser के लिए)
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // private mode आदि में storage न मिले तो कोई बात नहीं
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// किसी भी component में: const { lang, setLang, t } = useLanguage();
// t({ hi: "नमस्ते", en: "Hello" }) → भाषा के हिसाब से सही शब्द लौटाता है।
// अगर सिर्फ़ string दी जाए तो वही लौटा देता है (जैसे फ़ोन नंबर)।
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage को LanguageProvider के अंदर इस्तेमाल करें");
  }
  const t = (value) => {
    if (typeof value === "string" || value == null) return value ?? "";
    return value[ctx.lang] ?? value.hi ?? "";
  };
  return { ...ctx, t };
}
