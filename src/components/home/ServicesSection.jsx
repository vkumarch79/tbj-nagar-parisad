import SectionHeading from "@/components/shared/SectionHeading";
import { services, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// नागरिक सेवाओं के कार्ड — आइकन, शीर्षक, विवरण और बटन
export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="container scroll-mt-16 py-14">
      <SectionHeading label={ui.sectionServices} title={ui.sectionServicesTitle} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={i}
            className="flex flex-col items-center rounded-lg border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span className="text-5xl" aria-hidden="true">{s.icon}</span>
            <h3 className="mt-5 text-xl font-extrabold text-[#123b63]">{t(s.title)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(s.desc)}</p>
            <a
              href="#contact"
              className="mt-5 rounded-md bg-[#123b63] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0b5c9b]"
            >
              {t(ui[s.action])}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
