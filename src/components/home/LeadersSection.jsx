import SectionHeading from "@/components/shared/SectionHeading";
import { leaders, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// हमारे जनप्रतिनिधि — अध्यक्ष, विधायक और सांसद के फोटो कार्ड
// featured: true वाला कार्ड (अध्यक्ष) बीच में और सुनहरे फ्रेम में दिखता है
export default function LeadersSection() {
  const { t } = useLanguage();
  const featured = leaders.find((l) => l.featured);
  const others = leaders.filter((l) => !l.featured);
  // बड़ी स्क्रीन पर: विधायक — अध्यक्ष — सांसद
  const ordered = [others[0], featured, ...others.slice(1)].filter(Boolean);

  return (
    <section className="bg-white py-14">
      <div className="container">
        <SectionHeading label={ui.sectionLeaders} title={ui.sectionLeadersTitle} />
        <p className="-mt-6 mb-10 text-center text-sm text-muted-foreground sm:text-base">{t(ui.leadersIntro)}</p>

        <div className="mx-auto grid max-w-6xl items-end gap-6 sm:grid-cols-3">
          {ordered.map((l, i) => (
            <article
              key={i}
              className={`flex flex-col items-center rounded-2xl p-6 text-center transition hover:-translate-y-1 ${
                l.featured
                  ? "order-first bg-[#123b63] text-white shadow-xl ring-4 ring-[#f5c542] sm:order-none sm:pb-8 sm:pt-8"
                  : "border bg-[#f5f7fa] shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`overflow-hidden rounded-full border-4 shadow-lg ${
                  l.featured ? "h-40 w-40 border-[#f5c542]" : "h-32 w-32 border-white"
                }`}
              >
                <img src={l.photo} alt={t(l.name)} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <span
                className={`mt-5 rounded-full px-3 py-1 text-xs font-bold ${
                  l.featured ? "bg-[#f5c542] text-[#123b63]" : "bg-[#123b63] text-white"
                }`}
              >
                {t(l.role)}
              </span>
              <h3 className={`mt-3 text-xl font-extrabold ${l.featured ? "text-white sm:text-2xl" : "text-[#123b63]"}`}>
                {t(l.name)}
              </h3>
              <p className={`mt-1 text-sm ${l.featured ? "text-white/80" : "text-muted-foreground"}`}>{t(l.area)}</p>
              {l.party && (
                <p className={`mt-2 text-xs font-semibold ${l.featured ? "text-[#f5c542]" : "text-[#0b5c9b]"}`}>{t(l.party)}</p>
              )}
              <Terms leader={l} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// कार्यकाल: एक से ज़्यादा बार जीते हों तो "🏆 लगातार 2 बार निर्वाचित" बैज, नीचे हर चुनाव का वर्ष
function Terms({ leader: l }) {
  const { t, lang } = useLanguage();
  const terms = l.terms ?? [];
  if (!terms.length) return null;
  const many = terms.length > 1;
  const sinceText = lang === "hi" ? `${terms[0]} ${t(ui.inOfficeSince)}` : `${t(ui.inOfficeSince)} ${terms[0]}`;

  return (
    <div className={`mt-4 w-full border-t pt-4 ${l.featured ? "border-white/15" : "border-slate-200"}`}>
      {many ? (
        <p className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f5c542] to-[#f5a623] px-3 py-1 text-xs font-extrabold text-[#123b63] shadow">
          🏆 {l.consecutive === false ? "" : `${t(ui.consecutively)} `}
          {terms.length} {t(ui.timesElected)}
        </p>
      ) : (
        <p className={`text-xs font-semibold ${l.featured ? "text-white/80" : "text-muted-foreground"}`}>📅 {sinceText}</p>
      )}
      {many && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5" aria-label={t(ui.termsLabel)}>
          {terms.map((year, i) => (
            <span key={year} className="flex items-center gap-1.5">
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                  l.featured ? "bg-white/15 text-white" : "bg-white text-[#123b63] ring-1 ring-slate-200"
                }`}
              >
                {year}
              </span>
              {i < terms.length - 1 && <span className={l.featured ? "text-white/40" : "text-slate-300"}>→</span>}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
