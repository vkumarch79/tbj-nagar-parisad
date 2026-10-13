import { ArrowUp, MapPin, MessageCircle, Phone } from "lucide-react";
import { helplines, navItems, site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// फुटर: तिरंगा पट्टी → संपर्क पट्टी → चार कॉलम (परिचय, लिंक, सेवाएँ, हेल्पलाइन) → कॉपीराइट
export default function SiteFooter() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(t(ui.waPrefill))}`;

  const services = [
    { href: "/#services", label: ui.sectionServicesTitle },
    { href: "/#schemes", label: ui.sectionSchemesTitle },
    { href: "/#notices", label: ui.sectionNoticesTitle },
    { href: "/#councillors", label: ui.sectionCouncillors },
    { href: "/suraksha", label: ui.sectionSafety },
    { href: "/#tourism", label: ui.sectionTourismTitle },
    { href: "/#contact", label: ui.publicComplaints },
  ];

  const heading = "mb-4 flex items-center gap-2 text-base font-extrabold text-white after:h-0.5 after:w-8 after:rounded-full after:bg-[#f5c542]";
  const link = "text-sm text-white/70 transition hover:translate-x-1 hover:text-[#f5c542]";

  return (
    <footer className="bg-[#0b2440] text-white/80">
      {/* तिरंगा पट्टी */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-[#ff9933]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#138808]" />
      </div>

      {/* संपर्क पट्टी */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#123b63] to-[#0b5c9b]">
        <div className="container flex flex-col items-center gap-4 py-7 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">{t(ui.footerCtaTitle)}</h3>
            <p className="mt-1 text-sm text-white/80">{t(ui.footerCtaText)}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:+${site.phoneRaw}`}
              className="flex items-center gap-2 rounded-full bg-[#f5c542] px-5 py-2.5 text-sm font-extrabold text-[#123b63] shadow transition hover:scale-105"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-extrabold text-white shadow transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* चार कॉलम */}
      <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={site.logo} alt="" className="h-14 w-14 rounded-full border-2 border-[#f5c542] object-cover" />
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-white">{t(site.name)}</h3>
              <p className="text-xs text-white/60">{t(ui.digitalPortal)}</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-[#f5c542]">{t(site.tagline)}</p>
          <p className="mt-1 text-sm text-white/70">{t(site.taglineSub)}</p>
          <p className="mt-4 flex gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f5c542]" />
            {t(site.address)}
          </p>
        </div>

        <div>
          <h4 className={heading}>{t(ui.quickLinks)}</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className={`inline-block ${link}`}>› {t(n.label)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>{t(ui.footerServices)}</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <a href={s.href} className={`inline-block ${link}`}>› {t(s.label)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>{t(ui.helplines)}</h4>
          <ul className="grid grid-cols-2 gap-2">
            {helplines.map((h) => (
              <li key={h.number}>
                <a
                  href={`tel:${h.number}`}
                  className="block rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-[#f5c542]/60"
                >
                  <span className="block text-lg font-extrabold leading-none text-[#f5c542]">{h.number}</span>
                  <span className="mt-1 block text-[11px] leading-tight text-white/70">{t(h.label)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* कॉपीराइट पट्टी */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container flex flex-col items-center gap-3 py-4 text-center text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t(site.name)}, {t(site.district)}, {t(site.state)} — {site.pin}। {t(ui.copyright)}।
          </p>
          <div className="flex items-center gap-4">
            <p>
              {t(ui.madeWith)}: <span className="font-semibold text-white/80">{site.developer}</span>
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 font-semibold text-white transition hover:bg-[#f5c542] hover:text-[#123b63]"
            >
              <ArrowUp className="h-3.5 w-3.5" /> {t(ui.backToTop)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
