import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import SurpriseCards from "@/components/SurpriseCards";
import ReasonsSection from "@/components/ReasonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <SurpriseCards />
      <ReasonsSection />
      <Footer />
    </div>
  );
};

export default Index;
