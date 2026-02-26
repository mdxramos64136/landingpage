import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
