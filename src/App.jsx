import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testemonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testemonials />
        <Footer />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
