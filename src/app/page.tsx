import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import TrustFeatures from "@/components/TrustFeatures";
import ArtisanCTA from "@/components/ArtisanCTA";
import MissionContact from "@/components/MissionContact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Services />
      <TrustFeatures />
      <MissionContact />
      <FAQ />
      <Footer />
    </main>
  );
}
