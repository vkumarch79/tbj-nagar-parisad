import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/shared/SectionHeading";
import { site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// संपर्क — बाएँ: पता/फ़ोन/WhatsApp/ईमेल कार्ड और कार्यालय का नक्शा, दाएँ: सुझाव/शिकायत फ़ॉर्म
export default function ContactSection() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(t(ui.waPrefill))}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

  const cards = [
    {
      icon: Phone,
      label: ui.contactLabelPhone,
      value: site.phone,
      hint: ui.tapToCall,
      href: `tel:+${site.phoneRaw}`,
      tone: "bg-[#123b63] text-white",
    },
    {
      icon: MessageCircle,
      label: ui.contactLabelWhatsapp,
      value: site.phone,
      hint: ui.chatOnWhatsapp,
      href: whatsappHref,
      external: true,
      tone: "bg-[#25D366] text-white",
    },
    // ईमेल कार्ड तभी दिखे जब admin का ईमेल सेट हो
    ...(site.adminEmail
      ? [
          {
            icon: Mail,
            label: ui.contactLabelEmail,
            value: site.adminEmail,
            href: `mailto:${site.adminEmail}`,
            tone: "bg-[#e85d3c] text-white",
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-[#eef3f8] py-16">
      {/* हल्के सजावटी घेरे */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#123b63]/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#f5c542]/10" aria-hidden="true" />

      <div className="container relative">
        <SectionHeading label={ui.sectionContactLabel} title={ui.sectionContact} />
        <p className="-mt-6 mb-10 text-center text-sm text-muted-foreground sm:text-base">{t(ui.contactIntro)}</p>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* बाएँ: संपर्क कार्ड + नक्शा */}
          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf6e3] text-[#c98a00]">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold text-muted-foreground">{t(ui.contactLabelAddress)}</p>
                <p className="mt-0.5 font-semibold text-foreground">{t(site.address)}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map(({ icon: Icon, label, value, hint, href, external, tone }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-110 ${tone}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-muted-foreground">{t(label)}</span>
                    <span className="block truncate text-base font-extrabold text-[#123b63]">{value}</span>
                    {hint && <span className="block text-xs text-[#0b5c9b]">{t(hint)}</span>}
                  </span>
                </a>
              ))}
            </div>

            {/* कार्यालय का नक्शा */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between px-5 py-3">
                <p className="text-sm font-extrabold text-[#123b63]">📍 {t(ui.contactMapTitle)}</p>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0b5c9b] hover:underline">
                  {t(ui.openInMaps)}
                </a>
              </div>
              <iframe
                title={t(ui.contactMapTitle)}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0"
              />
            </div>
          </div>

          {/* दाएँ: फ़ॉर्म */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
