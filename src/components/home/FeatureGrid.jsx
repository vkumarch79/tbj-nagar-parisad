import { useCallback, useState } from "react";
import FeatureCard from "@/components/home/FeatureCard";
import FeatureModal from "@/components/home/FeatureModal";
import { featureCards } from "@/data/content";

// hero फोटो के नीचे थोड़ा ऊपर चढ़े हुए चार कार्ड — क्लिक पर popup
export default function FeatureGrid() {
  const [openModal, setOpenModal] = useState(null);
  const close = useCallback(() => setOpenModal(null), []);

  return (
    <section className="container relative z-20 -mt-12 pb-12 sm:-mt-16">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {featureCards.map((c, i) => (
          <FeatureCard key={i} {...c} onOpen={() => setOpenModal(c.modal)} />
        ))}
      </div>
      {openModal && <FeatureModal modal={openModal} onClose={close} />}
    </section>
  );
}
