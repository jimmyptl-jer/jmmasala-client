import AboutUs from "../components/AboutUs";
import ContactSection from "../components/Contact";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import ProcessCards from "../components/ProcessCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProcessCards />
      <AboutUs />
      <InfoSection />
      <FeatureCard />
      <ContactSection />
    </div>
  );
};

export default Home;
