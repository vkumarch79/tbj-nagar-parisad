import { ArrowRight, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { formatDate, latestReport, sortedReports, totalOf } from "@/components/safety/safetyUtils";
import { ui } from "@/data/content";
import { isSample, missingPersons, policeStation } from "@/data/safety";
import { useLanguage } from "@/i18n/LanguageContext";

// होम पेज पर थाना रिपोर्ट की झलक:
// बाएँ — आज के आँकड़े + पिछले 7 दिन का छोटा चार्ट, दाएँ — अज्ञात व्यक्तियों की लाल सूचना
export default function SafetyTeaser() {
  const { t, lang } = useLanguage();
  const r = latestReport;
  const week = sortedReports.slice(-7);
  const max = Math.max(1, ...week.map(totalOf));
  const unidentified = missingPersons.filter((p) => p.status === "unidentified");
  const policePhone = policeStation.phone || "112";

  const tiles = [
    { label: ui.totalCases, value: totalOf(r), icon: "📋", tone: "border-[#123b63] bg-[#eef3f8]" },
    { label: ui.falseCases, value: r.falseCases, icon: "⚖️", tone: "border-emerald-500 bg-emerald-50" },
    { label: ui.arrested, value: r.arrested, icon: "🚔", tone: "border-sky-500 bg-sky-50" },
    { label: ui.jailed, value: r.jailed, icon: "🔒", tone: "border-red-500 bg-red-50" },
  ];

  return (
    <section id="safety" className="scroll-mt-16 bg-white py-14">
      <div className="container">
        <SectionHeading label={ui.sectionSafety} title={ui.sectionSafetyTitle} />
        <p className="-mt-6 mb-10 text-center text-sm text-muted-foreground sm:text-base">{t(ui.safetyIntro)}</p>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* बाएँ: आज की रिपोर्ट */}
          <div className="rounded-2xl bg-[#f5f7fa] p-6 ring-1 ring-black/5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#0b5c9b]">{t(ui.latestReport)}</p>
                <h3 className="text-xl font-extrabold text-[#123b63] sm:text-2xl">📅 {formatDate(r.date, lang)}</h3>
              </div>
              {isSample && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">⚠️ {t(ui.sample)}</span>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {tiles.map((tile) => (
                <div key={t(tile.label)} className={`rounded-xl border-l-4 p-4 ${tile.tone}`}>
                  <p className="text-xs font-semibold text-foreground/70">
                    <span aria-hidden="true">{tile.icon}</span> {t(tile.label)}
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#123b63]">{tile.value}</p>
                </div>
              ))}
            </div>

            {/* पिछले 7 दिन */}
            <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-black/5">
              <p className="text-sm font-bold text-[#123b63]">📊 {t(ui.last7Days)}</p>
              <div className="mt-3 flex h-24 items-end gap-2">
                {week.map((d) => {
                  const total = totalOf(d);
                  const latest = d.date === r.date;
                  return (
                    <div key={d.date} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                      <span className="text-[11px] font-bold text-foreground/70">{total}</span>
                      <span
                        className={`w-full max-w-[36px] rounded-t ${latest ? "bg-[#f5a623]" : "bg-[#123b63]"}`}
                        style={{ height: `${Math.max(4, (total / max) * 100)}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-1 flex gap-2 border-t pt-1">
                {week.map((d) => (
                  <span key={d.date} className="flex-1 text-center text-[10px] text-muted-foreground">
                    {formatDate(d.date, lang, { day: "numeric", month: "short" })}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">{t(policeStation.source)}</p>
              <a
                href="/suraksha"
                className="group inline-flex items-center gap-2 rounded-full bg-[#123b63] px-6 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#0b5c9b]"
              >
                {t(ui.viewFullReport)} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* दाएँ: अज्ञात व्यक्ति सूचना */}
          <div className="flex flex-col rounded-2xl bg-gradient-to-br from-[#b3261e] to-[#e85d3c] p-6 text-white shadow-lg sm:p-8">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> {t(ui.urgent)}
            </p>
            <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">🚨 {t(ui.missingTitle)}</h3>
            <p className="mt-1 text-sm text-white/85">{t(ui.missingShort)}</p>

            <ul className="mt-5 flex-1 space-y-3">
              {unidentified.slice(0, 3).map((p) => (
                <li key={p.id}>
                  <a
                    href="/suraksha#missing"
                    className="flex items-center gap-3 rounded-xl bg-white/95 p-3 text-foreground transition hover:bg-white"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-xl">👤</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-extrabold text-[#9b2c14]">
                        {p.kind === "deceased" ? t(ui.deceased) : t(ui.injured)} · {t(p.gender)}, {t(p.age)}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        📅 {formatDate(p.date, lang, { day: "numeric", month: "short" })} · 📍 {t(p.place)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#9b2c14]" />
                  </a>
                </li>
              ))}
              {unidentified.length === 0 && (
                <li className="rounded-xl bg-white/15 p-4 text-sm font-semibold">✅ {t(ui.noUnidentified)}</li>
              )}
            </ul>

            <a
              href={`tel:${policePhone}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#b3261e] shadow transition hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> {t(ui.callPolice)} — {policePhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
