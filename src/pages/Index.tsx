import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import FeaturesSection from "@/components/FeaturesSection";
import DriveWithUs from "@/components/DriveWithUs";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FeaturesSection />
        <DriveWithUs />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
