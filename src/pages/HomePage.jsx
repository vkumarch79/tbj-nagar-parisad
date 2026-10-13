import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import ChairpersonMessage from "@/components/home/ChairpersonMessage";
import LeadersSection from "@/components/home/LeadersSection";
import CouncillorsSection from "@/components/councillors/CouncillorsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import WorkSection from "@/components/work/WorkSection";
import SchemesSection from "@/components/schemes/SchemesSection";
import NoticeList from "@/components/notices/NoticeList";
import SafetyTeaser from "@/components/safety/SafetyTeaser";
import GallerySection from "@/components/gallery/GallerySection";
import TourismSection from "@/components/tourism/TourismSection";
import ContactSection from "@/components/contact/ContactSection";

// होम पेज के सभी सेक्शन — ऊपर से नीचे
export default function HomePage() {
  // दूसरे पेज से "/#notices" जैसे लिंक पर आने पर उसी सेक्शन तक स्क्रॉल करें
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <HeroSection />
      <FeatureGrid />
      <ChairpersonMessage />
      <LeadersSection />
      <CouncillorsSection />
      <ServicesSection />
      <StatsSection />
      <WorkSection />
      <SchemesSection />
      <NoticeList />
      <SafetyTeaser />
      <TourismSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
