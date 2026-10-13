import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// मुख्य मेन्यू — "/#about" जैसे लिंक, ताकि किसी भी पेज से होम के सेक्शन पर पहुँचें
// स्क्रॉल पर ऊपर चिपका रहता है, जिस सेक्शन पर हों वह नीला दिखता है
export default function SiteNav() {
  const { t } = useLanguage();
  // प्रोजेक्ट / योजना / सूचना पेज पर उसका मेन्यू नीला दिखे
  const path = window.location.pathname;
  const pageMenu = { "/projects/": "#work", "/schemes/": "#schemes", "/notices/": "#notices", "/suraksha": "#safety" };
  const initial = Object.entries(pageMenu).find(([prefix]) => path.startsWith(prefix))?.[1] ?? navItems[0].href;
  const [active, setActive] = useState(initial);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const link = (n) => (
    <a
      key={n.href}
      href={`/${n.href}`}
      onClick={() => setOpen(false)}
      className={`block px-4 py-3 text-sm font-bold transition-colors sm:text-base ${
        active === n.href ? "bg-[#123b63] text-white" : "text-foreground hover:text-[#123b63]"
      }`}
    >
      {t(n.label)}
    </a>
  );

  return (
    <nav className="sticky top-0 z-40 border-b-4 border-[#e8a33c] bg-white shadow-sm">
      <div className="container">
        <div className="hidden justify-center lg:flex">{navItems.map(link)}</div>

        <div className="flex items-center justify-between lg:hidden">
          <span className="text-sm font-bold text-[#123b63]">{t(site.name)}</span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t(ui.openMenu)}
            aria-expanded={open}
            className="p-3 text-[#123b63]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && <div className="border-t pb-2 lg:hidden">{navItems.map(link)}</div>}
      </div>
    </nav>
  );
}
