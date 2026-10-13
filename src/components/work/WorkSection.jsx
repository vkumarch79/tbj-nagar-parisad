import SectionHeading from "@/components/shared/SectionHeading";
import WorkCard from "@/components/work/WorkCard";
import { ui, workItems } from "@/data/content";

// विकास परियोजनाओं की सूची
export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-16 py-14">
      <div className="container">
        <SectionHeading label={ui.sectionOurWork} title={ui.sectionWork} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((w, i) => (
            <WorkCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}
