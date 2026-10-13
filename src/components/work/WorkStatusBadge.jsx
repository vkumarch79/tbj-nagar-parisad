import { ui } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

// कार्य की स्थिति का रंगीन टैग — ongoing, completed या future
const styles = {
  ongoing: "bg-amber-100 text-amber-800",
  completed: "bg-emerald-100 text-emerald-800",
  future: "bg-sky-100 text-sky-800",
};

export default function WorkStatusBadge({ status }) {
  const { t } = useLanguage();

  return (
    <span className={`inline-block rounded px-2.5 py-1 text-xs font-bold ${styles[status] ?? styles.ongoing}`}>
      {t(ui[status] ?? ui.ongoing)}
    </span>
  );
}
