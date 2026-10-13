import { crimeTypes, dailyReports } from "@/data/safety";

// एक दिन के कुल केस = सभी प्रकारों का जोड़
export const totalOf = (r) => crimeTypes.reduce((sum, ty) => sum + (r[ty.key] ?? 0), 0);

// तारीख के हिसाब से क्रम में
export const sortedReports = [...dailyReports].sort((a, b) => a.date.localeCompare(b.date));
export const latestReport = sortedReports[sortedReports.length - 1];

// "2026-10" जैसे महीने — नए पहले
export const months = [...new Set(sortedReports.map((r) => r.date.slice(0, 7)))].reverse();

export const reportsOfMonth = (month) => sortedReports.filter((r) => r.date.startsWith(month));

// कई दिनों का जोड़
export function sumReports(list) {
  const sum = { total: 0, falseCases: 0, arrested: 0, jailed: 0 };
  crimeTypes.forEach((ty) => (sum[ty.key] = 0));
  list.forEach((r) => {
    sum.total += totalOf(r);
    sum.falseCases += r.falseCases ?? 0;
    sum.arrested += r.arrested ?? 0;
    sum.jailed += r.jailed ?? 0;
    crimeTypes.forEach((ty) => (sum[ty.key] += r[ty.key] ?? 0));
  });
  return sum;
}

export const formatDate = (date, lang, opts = { day: "numeric", month: "long", year: "numeric" }) =>
  new Date(date).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", opts);

export const formatMonth = (month, lang) =>
  new Date(`${month}-01`).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { month: "long", year: "numeric" });
