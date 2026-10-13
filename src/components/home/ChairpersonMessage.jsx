import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { chairperson, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

const PREVIEW = 3; // शुरू में कितने पैराग्राफ दिखें

// अध्यक्ष का संदेश (बाएँ) और "नागरिक सर्वोपरि" नीला कार्ड (दाएँ)
// शुरू में पहले 3 पैराग्राफ, "पूरा संदेश पढ़ें" से बाकी
export default function ChairpersonMessage() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const articleRef = useRef(null);
  const paragraphs = chairperson.messageParagraphs;
  const shown = expanded ? paragraphs : paragraphs.slice(0, PREVIEW);
  const canExpand = paragraphs.length > PREVIEW;

  const collapse = () => {
    setExpanded(false);
    articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="container scroll-mt-16 py-12">
      <SectionHeading label={ui.sectionAbout} title={ui.sectionMessageTitle} />

      {/* दोनों कार्ड हमेशा बराबर ऊँचाई के — जो लंबा हो, दूसरा उसके हिसाब से बढ़ता है */}
      <div className="grid gap-8 lg:grid-cols-[1.65fr_1fr]">
        <article ref={articleRef} className="flex scroll-mt-20 flex-col rounded-xl border-l-[6px] border-[#123b63] bg-white p-6 shadow-md sm:p-10">
          <h3 className="text-xl font-extrabold text-[#123b63] sm:text-2xl">
            {t(chairperson.messageHeading)}
          </h3>
          <div className="relative mt-5 space-y-4 text-base leading-loose text-foreground/85">
            {shown.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
            {/* बंद होने पर आखिरी लाइन धुँधली — आगे और है */}
            {canExpand && !expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
            )}
          </div>

          {canExpand && (
            <button
              type="button"
              onClick={expanded ? collapse : () => setExpanded(true)}
              aria-expanded={expanded}
              className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border-2 border-[#123b63] px-5 py-2 text-sm font-bold text-[#123b63] transition hover:bg-[#123b63] hover:text-white"
            >
              {expanded ? t(ui.readLess) : t(ui.readFullMessage)}
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}

          {/* quote और नाम हमेशा कार्ड के नीचे */}
          <div className="mt-auto pt-6">
            <blockquote className="flex gap-3 rounded-lg bg-[#eef4fa] p-5">
              <span className="text-3xl leading-none text-[#123b63]" aria-hidden="true">❝</span>
              <p className="font-semibold italic text-[#123b63]">{t(chairperson.quote)}</p>
            </blockquote>

            <div className="mt-6">
              <p className="font-bold text-foreground">{t(chairperson.name)}</p>
              <p className="text-sm text-muted-foreground">{t(chairperson.title)}</p>
            </div>
          </div>
        </article>

        <aside className="rounded-xl bg-[#123b63] p-6 text-center text-white shadow-md sm:p-8">
          {/* लंबा संदेश खुलने पर यह हिस्सा स्क्रॉल के साथ ऊपर टिका रहता है */}
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-lg">
              <img src={chairperson.photo} alt={t(chairperson.name)} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold">{t(chairperson.boxTitle)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{t(chairperson.boxText)}</p>
            <ul className="mt-5 space-y-2 text-left">
              {chairperson.points.map((p, i) => (
                <li key={i} className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5c542] text-xs font-bold text-[#123b63]" aria-hidden="true">
                    ✓
                  </span>
                  {t(p)}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
