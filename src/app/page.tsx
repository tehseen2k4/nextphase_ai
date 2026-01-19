import Image from "next/image";
import Hero from "@/components/home/Hero";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection />
      <SolutionsGrid />
      <CTASection />
    </div>
  );
}
