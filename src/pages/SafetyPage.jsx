import { useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, Eye, Phone, ShieldCheck, X } from "lucide-react";
import {
  formatDate,
  formatMonth,
  latestReport,
  months,
  reportsOfMonth,
  sumReports,
  totalOf,
} from "@/components/safety/safetyUtils";
import { ui } from "@/data/content";
import { cases, crimeTypes, isSample, missingPersons, policeStation } from "@/data/safety";
import { useLanguage } from "@/i18n/LanguageContext";

// केस की स्थिति — रंग के साथ आइकन और शब्द भी (सिर्फ़ रंग पर निर्भर नहीं)
const STATUS = {
  registered: { icon: "📝", cls: "bg-slate-100 text-slate-700", label: { hi: "दर्ज", en: "Registered" } },
  investigation: { icon: "🔍", cls: "bg-amber-100 text-amber-800", label: { hi: "जाँच जारी", en: "Under investigation" } },
  arrested: { icon: "🚔", cls: "bg-sky-100 text-sky-800", label: { hi: "गिरफ़्तार", en: "Arrested" } },
  jailed: { icon: "🔒", cls: "bg-red-100 text-red-800", label: { hi: "जेल भेजा गया", en: "Sent to jail" } },
  false: { icon: "⚖️", cls: "bg-emerald-100 text-emerald-800", label: { hi: "झूठा / फ़र्ज़ी पाया गया", en: "Found false" } },
};

// नाम सिर्फ़ गिरफ़्तार / जेल वाले केस में, और संवेदनशील केस में कभी नहीं
const canShowName = (c) => c.accused && (c.status === "arrested" || c.status === "jailed") && !c.sensitive;

// सुरक्षा एवं सूचना पेज: दैनिक रिपोर्ट → महीने का चार्ट → दिन-वार इतिहास → केस सूची → दुर्घटना / अज्ञात व्यक्ति सूचना
export default function SafetyPage() {
  const { t, lang } = useLanguage();
  const [month, setMonth] = useState(months[0]);
  const [day, setDay] = useState(latestReport.date);
  const [person, setPerson] = useState(null);

  const monthReports = reportsOfMonth(month);
  const dayReport = monthReports.find((r) => r.date === day) ?? monthReports[monthReports.length - 1];
  const daySum = sumReports([dayReport]);
  const monthSum = sumReports(monthReports);
  const policePhone = policeStation.phone || "112";
  const typeLabel = (key) => t(crimeTypes.find((c) => c.key === key)?.label);

  const changeMonth = (m) => {
    setMonth(m);
    const list = reportsOfMonth(m);
    setDay(list[list.length - 1].date);
  };

  const tiles = [
    { label: ui.totalCases, value: daySum.total, icon: "📋", tone: "border-[#123b63]" },
    { label: ui.falseCases, value: daySum.falseCases, icon: "⚖️", tone: "border-emerald-500" },
    { label: ui.arrested, value: daySum.arrested, icon: "🚔", tone: "border-sky-500" },
    { label: ui.jailed, value: daySum.jailed, icon: "🔒", tone: "border-red-500" },
  ];
  const max = Math.max(1, ...monthReports.map(totalOf));

  return (
    <main>
      {/* ऊपर */}
      <section className="bg-gradient-to-br from-[#0b2440] via-[#123b63] to-[#0b5c9b] py-12 text-white sm:py-16">
        <div className="container">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
            <ShieldCheck className="h-4 w-4 text-[#f5c542]" /> {t(ui.sectionSafety)}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">{t(ui.sectionSafetyTitle)}</h1>
          <p className="mt-3 max-w-3xl text-white/80 sm:text-lg">{t(ui.safetyIntro)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#missing" className="rounded-full bg-[#e85d3c] px-5 py-2.5 text-sm font-extrabold shadow hover:bg-[#d24e2e]">
              🚨 {t(ui.missingTitle)}
            </a>
            <a
              href={`tel:${policePhone}`}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#123b63] shadow hover:bg-white/90"
            >
              <Phone className="h-4 w-4" /> {t(policeStation.name)}: {policePhone}
            </a>
          </div>
          <p className="mt-5 text-xs text-white/60">{t(policeStation.source)}</p>
        </div>
      </section>

      {isSample && (
        <div className="border-b border-amber-300 bg-amber-50">
          <p className="container flex items-center gap-2 py-3 text-sm font-semibold text-amber-900">
            <AlertTriangle className="h-5 w-5 shrink-0" /> {t(ui.sampleWarning)}
          </p>
        </div>
      )}

      <div className="container space-y-14 py-12">
        {/* दिन की रिपोर्ट */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#0b5c9b]">{t(ui.dailyReport)}</p>
              <h2 className="text-2xl font-extrabold text-[#123b63] sm:text-3xl">📅 {formatDate(dayReport.date, lang)}</h2>
            </div>
            <label className="flex items-center gap-2 text-sm font-semibold">
              {t(ui.selectMonth)}
              <select
                value={month}
                onChange={(e) => changeMonth(e.target.value)}
                className="rounded-lg border border-input bg-white px-3 py-2 text-sm font-bold text-[#123b63]"
              >
                {months.map((m) => (
                  <option key={m} value={m}>{formatMonth(m, lang)}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {tiles.map((tile) => (
              <div key={t(tile.label)} className={`rounded-2xl border-l-4 bg-white p-5 shadow-sm ${tile.tone}`}>
                <p className="text-sm font-semibold text-muted-foreground">
                  <span aria-hidden="true">{tile.icon}</span> {t(tile.label)}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-[#123b63]">{tile.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {crimeTypes.map((ty) => (
              <span key={ty.key} className="rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-black/5">
                {ty.icon} {t(ty.label)}: <strong className="text-[#123b63]">{daySum[ty.key]}</strong>
              </span>
            ))}
          </div>
        </section>

        {/* महीने का चार्ट */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-extrabold text-[#123b63]">📊 {t(ui.monthChart)} — {formatMonth(month, lang)}</h2>
            <p className="text-xs text-muted-foreground">{t(ui.clickBarHint)}</p>
          </div>

          <div className="mt-8 flex h-56 items-end gap-[2px] border-b border-slate-200">
            {monthReports.map((r) => {
              const total = totalOf(r);
              const active = r.date === dayReport.date;
              return (
                <button
                  key={r.date}
                  type="button"
                  onClick={() => setDay(r.date)}
                  aria-label={`${formatDate(r.date, lang)}: ${total} ${t(ui.totalCases)}`}
                  aria-pressed={active}
                  className="group relative flex h-full flex-1 items-end justify-center"
                >
                  <span
                    className={`w-full max-w-[22px] rounded-t transition ${active ? "bg-[#f5a623]" : "bg-[#123b63] group-hover:bg-[#0b5c9b]"}`}
                    style={{ height: `${Math.max(2, (total / max) * 100)}%` }}
                  />
                  {/* hover पर जानकारी */}
                  <span className="pointer-events-none absolute bottom-full z-10 mb-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-left text-xs text-white shadow-lg group-hover:block group-focus-visible:block">
                    <strong className="block">{formatDate(r.date, lang, { day: "numeric", month: "short" })}</strong>
                    {t(ui.totalCases)}: {total} · {t(ui.jailed)}: {r.jailed}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>{formatDate(monthReports[0].date, lang, { day: "numeric", month: "short" })}</span>
            <span>{formatDate(monthReports[monthReports.length - 1].date, lang, { day: "numeric", month: "short" })}</span>
          </div>

          {/* महीने का जोड़ */}
          <div className="mt-6 grid grid-cols-2 gap-3 border-t pt-5 sm:grid-cols-4">
            {[
              [ui.monthTotal, monthSum.total],
              [ui.falseCases, monthSum.falseCases],
              [ui.arrested, monthSum.arrested],
              [ui.jailed, monthSum.jailed],
            ].map(([label, value]) => (
              <div key={t(label)}>
                <p className="text-xs font-semibold text-muted-foreground">{t(label)}</p>
                <p className="text-2xl font-extrabold text-[#123b63]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* दिन-वार इतिहास */}
        <section>
          <h2 className="text-xl font-extrabold text-[#123b63]">🗂️ {t(ui.history)} — {formatMonth(month, lang)}</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-[#123b63] text-left text-white">
                <tr>
                  <th className="px-4 py-3">{t(ui.date)}</th>
                  {crimeTypes.map((ty) => (
                    <th key={ty.key} className="px-3 py-3 text-right">{t(ty.label)}</th>
                  ))}
                  <th className="px-3 py-3 text-right">{t(ui.totalCases)}</th>
                  <th className="px-3 py-3 text-right">{t(ui.falseCases)}</th>
                  <th className="px-3 py-3 text-right">{t(ui.arrested)}</th>
                  <th className="px-4 py-3 text-right">{t(ui.jailed)}</th>
                </tr>
              </thead>
              <tbody>
                {[...monthReports].reverse().map((r) => (
                  <tr
                    key={r.date}
                    onClick={() => setDay(r.date)}
                    className={`cursor-pointer border-b last:border-0 hover:bg-[#eef3f8] ${r.date === dayReport.date ? "bg-amber-50" : ""}`}
                  >
                    <td className="px-4 py-2.5 font-semibold">{formatDate(r.date, lang, { day: "numeric", month: "short" })}</td>
                    {crimeTypes.map((ty) => (
                      <td key={ty.key} className="px-3 py-2.5 text-right tabular-nums">{r[ty.key]}</td>
                    ))}
                    <td className="px-3 py-2.5 text-right font-extrabold tabular-nums text-[#123b63]">{totalOf(r)}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{r.falseCases}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{r.arrested}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums">{r.jailed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* केस सूची */}
        <section>
          <h2 className="text-xl font-extrabold text-[#123b63]">📝 {t(ui.recentCases)}</h2>
          <p className="mt-1 text-xs text-muted-foreground">⚖️ {t(ui.innocentNote)}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[...cases].sort((a, b) => b.date.localeCompare(a.date)).map((c, i) => {
              const st = STATUS[c.status] ?? STATUS.registered;
              return (
                <article key={i} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[#123b63]">
                      {crimeTypes.find((ty) => ty.key === c.type)?.icon} {typeLabel(c.type)}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${st.cls}`}>
                      {st.icon} {t(st.label)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">{t(c.note)}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    📅 {formatDate(c.date, lang)} · 📍 {t(c.area)}
                    {canShowName(c) && (
                      <>
                        {" "}· 👤 {t(ui.accused)}: <strong className="text-foreground">{t(c.accused)}</strong>
                      </>
                    )}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* दुर्घटना / अज्ञात व्यक्ति */}
        <section id="missing" className="scroll-mt-20">
          <div className="rounded-2xl border-2 border-[#e85d3c]/30 bg-[#fff6f3] p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-[#9b2c14]">🚨 {t(ui.missingTitle)}</h2>
            <p className="mt-2 text-sm text-foreground/80 sm:text-base">{t(ui.missingIntro)}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {missingPersons.map((p) => {
                const identified = p.status === "identified";
                return (
                  <article key={p.id} className={`overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 ${identified ? "opacity-70" : ""}`}>
                    <div className="flex items-center justify-between gap-2 border-b px-4 py-2.5">
                      <span className="text-xs font-bold text-muted-foreground">#{p.id}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          identified ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {identified ? `✅ ${t(ui.identified)}` : `❓ ${t(ui.unidentified)}`}
                      </span>
                    </div>
                    <div className="flex gap-4 p-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                        {p.photo && !identified ? (
                          <img src={p.photo} alt="" className="h-full w-full scale-110 object-cover blur-md" />
                        ) : (
                          <div className="flex h-full items-center justify-center text-3xl text-slate-400">👤</div>
                        )}
                      </div>
                      <div className="min-w-0 text-sm">
                        <p className="font-extrabold text-[#123b63]">
                          {p.kind === "deceased" ? t(ui.deceased) : t(ui.injured)} · {t(p.gender)}
                        </p>
                        <p className="text-muted-foreground">{t(p.age)}</p>
                        <p className="mt-1 text-xs text-muted-foreground">📅 {formatDate(p.date, lang)}</p>
                        <p className="text-xs text-muted-foreground">📍 {t(p.place)}</p>
                      </div>
                    </div>
                    {!identified && (
                      <div className="flex gap-2 border-t p-3">
                        <button
                          type="button"
                          onClick={() => setPerson(p)}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border-2 border-[#123b63] py-2 text-xs font-bold text-[#123b63] hover:bg-[#123b63] hover:text-white"
                        >
                          <Eye className="h-4 w-4" /> {t(ui.identify)}
                        </button>
                        <a
                          href={`tel:${policePhone}`}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#e85d3c] py-2 text-xs font-bold text-white hover:bg-[#d24e2e]"
                        >
                          <Phone className="h-4 w-4" /> {t(ui.callPolice)}
                        </a>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {person && <PersonModal person={person} policePhone={policePhone} onClose={() => setPerson(null)} />}
    </main>
  );
}

// अज्ञात व्यक्ति का पूरा विवरण — फोटो धुँधली, "फोटो देखें" दबाने पर साफ़
function PersonModal({ person: p, policePhone, onClose }) {
  const { t, lang } = useLanguage();
  const [reveal, setReveal] = useState(false);
  const rows = [
    [ui.dateLabel, formatDate(p.date, lang)],
    [ui.placeLabel, t(p.place)],
    [ui.genderAge, `${t(p.gender)}, ${t(p.age)}`],
    [ui.clothes, t(p.clothes)],
    [ui.marks, t(p.marks)],
    [ui.belongings, t(p.belongings)],
    [ui.keptAt, t(p.keptAt)],
  ].filter(([, v]) => v);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between bg-[#9b2c14] px-5 py-4 text-white">
          <h2 className="font-extrabold">
            {p.kind === "deceased" ? t(ui.deceased) : t(ui.injured)} — #{p.id}
          </h2>
          <button type="button" onClick={onClose} aria-label={t(ui.close)} className="rounded p-1 hover:bg-white/15">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {p.photo && (
            <div className="relative mx-auto mb-5 h-56 w-56 overflow-hidden rounded-xl bg-slate-200">
              <img src={p.photo} alt="" className={`h-full w-full object-cover transition ${reveal ? "" : "scale-110 blur-xl"}`} />
              {!reveal && (
                <button
                  type="button"
                  onClick={() => setReveal(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/30 text-sm font-bold text-white"
                >
                  <Eye className="h-6 w-6" /> {t(ui.revealPhoto)}
                  <span className="px-4 text-center text-[11px] font-normal text-white/85">{t(ui.revealNote)}</span>
                </button>
              )}
            </div>
          )}

          <dl className="divide-y rounded-xl bg-[#f5f7fa]">
            {rows.map(([label, value]) => (
              <div key={t(label)} className="grid grid-cols-[8rem_1fr] gap-3 px-4 py-2.5 text-sm">
                <dt className="font-semibold text-muted-foreground">{t(label)}</dt>
                <dd className="font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">🙏 {t(ui.identifyHelp)}</p>
        </div>

        <div className="flex justify-end gap-3 border-t px-5 py-4">
          <a
            href={`tel:${policePhone}`}
            className="flex items-center gap-2 rounded-lg bg-[#e85d3c] px-5 py-2.5 text-sm font-extrabold text-white hover:bg-[#d24e2e]"
          >
            <Phone className="h-4 w-4" /> {t(ui.callPolice)} ({policePhone})
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
