import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import TrustFeatures from "@/components/TrustFeatures";
import ArtisanCTA from "@/components/ArtisanCTA";
import MissionContact from "@/components/MissionContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <TrustFeatures />
      <ArtisanCTA />
      <MissionContact />
      <Footer />
    </main>
  );
}
