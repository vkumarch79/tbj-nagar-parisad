import GovTopBar from "@/components/layout/GovTopBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteNav from "@/components/layout/SiteNav";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteFooter from "@/components/layout/SiteFooter";
import EmergencyCall from "@/components/layout/EmergencyCall";
import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/ProjectPage";
import SchemePage from "@/pages/SchemePage";
import NoticePage from "@/pages/NoticePage";
import SafetyPage from "@/pages/SafetyPage";
import { workItems } from "@/data/content";
import { schemes } from "@/data/schemes";
import { notices } from "@/data/notices";

// URL देखकर पेज चुनें: /projects/<slug> → प्रोजेक्ट पेज, /schemes/<slug> → योजना पेज, /notices/<slug> → सूचना पेज, /suraksha → सुरक्षा पेज, बाकी सब → होम
// (Vercel पर हर URL index.html पर जाए, इसके लिए vercel.json देखें)
function findBySlug(prefix, list) {
  const match = window.location.pathname.match(new RegExp(`^/${prefix}/([\\w-]+)/?$`));
  return match ? list.find((item) => item.slug === match[1]) : null;
}

function currentPage() {
  if (/^\/suraksha\/?$/.test(window.location.pathname)) return <SafetyPage />;
  const project = findBySlug("projects", workItems);
  if (project) return <ProjectPage project={project} />;
  const scheme = findBySlug("schemes", schemes);
  if (scheme) return <SchemePage scheme={scheme} />;
  const notice = findBySlug("notices", notices);
  if (notice) return <NoticePage notice={notice} />;
  return <HomePage />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <GovTopBar />
      <SiteHeader />
      <SiteNav />
      <AnnouncementBar />
      {currentPage()}
      <SiteFooter />
      <EmergencyCall />
    </div>
  );
}
