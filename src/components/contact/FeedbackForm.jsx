import { useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { feedbackForm as f, site } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";
import { submitFeedback, isContactConfigured } from "@/services/contactService";

const emptyForm = {
  name: "",
  phone: "",
  age: "",
  gender: "",
  ward: "",
  wantToJoin: "",
  familyMembers: "",
  eligibleVoters: "",
  bestWork: "",
  expectedImprovements: "",
  additionalWork: "",
  biggestProblem: "",
  majorImprovement: "",
  contributions: [],
  followUp: "",
  otherSuggestions: "",
  confirmation: false,
  _gotcha: "", // छिपा हुआ spam-trap फ़ील्ड
};

const inputClass =
  "mt-1.5 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm font-normal text-foreground focus:border-[#123b63] focus:outline-none focus:ring-2 focus:ring-[#123b63]/20";
const labelClass = "block text-sm font-semibold text-foreground";

// नागरिक प्रतिक्रिया एवं जन-प्राथमिकता फ़ॉर्म — "अपना सुझाव दें" popup में खुलता है
// भेजने पर जवाब admin के ईमेल पर पहुँचते हैं (देखें services/contactService.js)
export default function FeedbackForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const topRef = useRef(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name === "contributions") {
      setForm((p) => ({
        ...p,
        contributions: checked ? [...p.contributions, value] : p.contributions.filter((v) => v !== value),
      }));
      return;
    }
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  // value (जैसे "yes") को उसके लेबल (जैसे "हां") में बदलें
  const labelOf = (options, value) => t(options.find((o) => o.value === value)?.label) || value;

  // ईमेल में पढ़ने लायक सवाल → जवाब
  function buildAnswers() {
    return {
      [t(f.name)]: form.name,
      [t(f.phone)]: form.phone,
      [t(f.age)]: form.age,
      [t(f.gender)]: labelOf(f.genderOptions, form.gender),
      [t(f.ward)]: form.ward,
      [t(f.join)]: labelOf(f.yesNo, form.wantToJoin),
      [t(f.familyMembers)]: form.familyMembers,
      [t(f.eligibleVoters)]: form.eligibleVoters,
      [t(f.bestWork)]: labelOf(f.bestWorkOptions, form.bestWork),
      [t(f.expectedImprovements)]: form.expectedImprovements,
      [t(f.additionalWork)]: form.additionalWork,
      [t(f.biggestProblem)]: form.biggestProblem,
      [t(f.majorImprovement)]: form.majorImprovement,
      [t(f.contribution)]: form.contributions.map((v) => labelOf(f.contributionOptions, v)).join(", "),
      [t(f.followUp)]: labelOf(f.yesNo, form.followUp),
      [t(f.otherSuggestions)]: form.otherSuggestions,
    };
  }

  function scrollToTop() {
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form._gotcha) return;

    const answers = buildAnswers();
    const subject = `[${t(f.title)}] ${form.name} — ${t(f.wardLabel)} ${form.ward}`;

    // सेवा सेट नहीं है तो उपयोगकर्ता का मेल ऐप खोलें (admin ईमेल सेट हो तो)
    if (!isContactConfigured) {
      if (!site.adminEmail) {
        setStatus("error");
        scrollToTop();
        return;
      }
      const body = Object.entries(answers).map(([q, a]) => `${q}\n→ ${a}`).join("\n\n");
      window.location.href = `mailto:${site.adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      await submitFeedback(answers, subject);
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
    scrollToTop();
  }

  const radioGroup = (name, legend, options) => (
    <fieldset>
      <legend className={labelClass}>{t(legend)}</legend>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((o) => (
          <label key={o.value} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={form[name] === o.value}
              onChange={handleChange}
              required
              className="h-4 w-4 accent-[#123b63]"
            />
            {t(o.label)}
          </label>
        ))}
      </div>
    </fieldset>
  );

  const section = (legend, children) => (
    <fieldset className="space-y-5 rounded-lg border p-4 sm:p-5">
      <legend className="px-2 text-base font-extrabold text-[#123b63]">{t(legend)}</legend>
      {children}
    </fieldset>
  );

  const textarea = (name, label) => (
    <label className={labelClass}>
      {t(label)}
      <textarea name={name} rows={3} value={form[name]} onChange={handleChange} required className={inputClass} />
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-2">
      <div ref={topRef} className="scroll-mt-4" />

      {status === "success" && (
        <p role="alert" className="flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" /> {t(f.success)}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" /> {t(f.error)}
        </p>
      )}

      <div className="text-center">
        <h3 className="text-xl font-extrabold text-[#123b63] sm:text-2xl">{t(f.title)}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t(f.intro)}</p>
      </div>

      <input type="text" name="_gotcha" value={form._gotcha} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" />

      {section(
        f.sectionPersonal,
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            {t(f.name)}
            <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
          </label>
          <label className={labelClass}>
            {t(f.phone)}
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className={labelClass}>
            {t(f.age)}
            <input name="age" type="number" min="1" max="120" value={form.age} onChange={handleChange} required className={inputClass} />
          </label>
          {radioGroup("gender", f.gender, f.genderOptions)}
          <label className={labelClass}>
            {t(f.ward)}
            <select name="ward" value={form.ward} onChange={handleChange} required className={inputClass}>
              <option value="">{t(f.selectWard)}</option>
              {Array.from({ length: f.wardCount }, (_, i) => (
                <option key={i} value={i + 1}>
                  {t(f.wardLabel)} {i + 1}
                </option>
              ))}
            </select>
          </label>
          {radioGroup("wantToJoin", f.join, f.yesNo)}
          <label className={labelClass}>
            {t(f.familyMembers)}
            <input name="familyMembers" type="number" min="1" value={form.familyMembers} onChange={handleChange} required className={inputClass} />
          </label>
          <label className={labelClass}>
            {t(f.eligibleVoters)}
            <input name="eligibleVoters" type="number" min="0" value={form.eligibleVoters} onChange={handleChange} required className={inputClass} />
          </label>
        </div>
      )}

      {section(
        f.sectionPriorities,
        <>
          <label className={labelClass}>
            {t(f.bestWork)}
            <select name="bestWork" value={form.bestWork} onChange={handleChange} required className={inputClass}>
              <option value="">{t(f.selectOption)}</option>
              {f.bestWorkOptions.map((o) => (
                <option key={o.value} value={o.value}>{t(o.label)}</option>
              ))}
            </select>
          </label>
          {textarea("expectedImprovements", f.expectedImprovements)}
          {textarea("additionalWork", f.additionalWork)}
          <label className={labelClass}>
            {t(f.biggestProblem)}
            <input name="biggestProblem" value={form.biggestProblem} onChange={handleChange} required className={inputClass} />
          </label>
          {textarea("majorImprovement", f.majorImprovement)}
        </>
      )}

      {section(
        f.sectionParticipation,
        <>
          <fieldset>
            <legend className={labelClass}>{t(f.contribution)}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {f.contributionOptions.map((o) => (
                <label key={o.value} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="contributions"
                    value={o.value}
                    checked={form.contributions.includes(o.value)}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#123b63]"
                  />
                  {t(o.label)}
                </label>
              ))}
            </div>
          </fieldset>
          {radioGroup("followUp", f.followUp, f.yesNo)}
        </>
      )}

      {section(f.sectionOther, textarea("otherSuggestions", f.otherSuggestions))}

      <div className="rounded-lg border-l-4 border-[#f5c542] bg-[#fdf6e3] p-4">
        <h4 className="font-extrabold text-[#123b63]">{t(f.candidateTitle)}</h4>
        <p className="mt-1 text-sm leading-relaxed text-foreground/85">{t(f.candidateMessage)}</p>
      </div>

      <label className="flex items-start gap-3 text-sm font-semibold">
        <input
          type="checkbox"
          name="confirmation"
          checked={form.confirmation}
          onChange={handleChange}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#123b63]"
        />
        {t(f.confirmation)}
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#123b63] px-4 py-3 text-base font-bold text-white hover:bg-[#0b5c9b] disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? t(f.sending) : t(f.submit)}
      </button>
    </form>
  );
}
