import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { site, ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";
import { submitContact, isContactConfigured } from "@/services/contactService";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  type: "suggestion",
  message: "",
  _gotcha: "", // छिपा हुआ spam-trap फ़ील्ड: इंसान इसे नहीं भरता
};

// सुझाव / शिकायत का फ़ॉर्म
// भेजने पर संदेश admin के ईमेल पर पहुँचता है (देखें services/contactService.js)
export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form._gotcha) return; // bot ने फ़ील्ड भरा, चुपचाप रोकें

    const typeLabel = form.type === "complaint" ? ui.typeComplaint : ui.typeSuggestion;
    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      type: t(typeLabel),
      message: form.message,
    };

    // अगर सेवा सेट नहीं है, तो उपयोगकर्ता का मेल ऐप खोलें (admin ईमेल सेट हो तो)
    if (!isContactConfigured) {
      if (!site.adminEmail) {
        setStatus("error");
        return;
      }
      const subject = encodeURIComponent(`[${payload.type}] ${payload.name} (${payload.phone})`);
      const body = encodeURIComponent(
        `नाम / Name: ${payload.name}\nफ़ोन / Phone: ${payload.phone}\nईमेल / Email: ${payload.email}\nप्रकार / Type: ${payload.type}\n\n${payload.message}`
      );
      window.location.href = `mailto:${site.adminEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await submitContact(payload);
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-[#f8fafc] px-3.5 py-2.5 text-sm text-foreground transition focus:border-[#123b63] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123b63]/15";
  const labelClass = "mb-1.5 block text-xs font-bold text-foreground/70";
  const types = [
    { value: "suggestion", label: ui.typeSuggestion, icon: "💡" },
    { value: "complaint", label: ui.typeComplaint, icon: "📝" },
  ];

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden rounded-2xl bg-white text-foreground shadow-xl ring-1 ring-black/5">
      {/* ऊपर नीली पट्टी */}
      <div className="bg-gradient-to-r from-[#123b63] to-[#0b5c9b] px-6 py-5 text-white">
        <h3 className="text-xl font-extrabold">✉️ {t(ui.formTitle)}</h3>
        <p className="mt-1 text-sm text-white/80">{t(ui.formSubtitle)}</p>
      </div>

      <div className="space-y-4 p-6">
        {/* spam-trap: यह दिखता नहीं है */}
        <input
          type="text"
          name="_gotcha"
          value={form._gotcha}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* सुझाव / शिकायत — दो बटन */}
        <fieldset>
          <legend className={labelClass}>{t(ui.formType)}</legend>
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#eef3f8] p-1">
            {types.map((ty) => (
              <label
                key={ty.value}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-md py-2 text-sm font-bold transition ${
                  form.type === ty.value ? "bg-white text-[#123b63] shadow" : "text-foreground/60 hover:text-[#123b63]"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={ty.value}
                  checked={form.type === ty.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span aria-hidden="true">{ty.icon}</span> {t(ty.label)}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>{t(ui.formName)}</span>
            <input required name="name" value={form.name} onChange={handleChange} className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>{t(ui.formPhone)}</span>
            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title={t(ui.formPhoneHint)}
              placeholder="9XXXXXXXXX"
              className={inputClass}
            />
          </label>
        </div>

        <label className="block">
          <span className={labelClass}>{t(ui.formEmail)}</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
        </label>

        <label className="block">
          <span className={labelClass}>{t(ui.formMessage)}</span>
          <textarea
            required
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f5c542] px-4 py-3 text-base font-extrabold text-[#123b63] shadow transition hover:bg-[#f0b92a] disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === "sending" ? t(ui.formSending) : t(ui.formSubmit)}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> {t(ui.formThanks)}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4" /> {t(ui.formError)}
          </p>
        )}
      </div>
    </form>
  );
}
