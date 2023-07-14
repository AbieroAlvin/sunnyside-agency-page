import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import MidSection from "./components/MidSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="introsection">
        <Navbar />
        <IntroSection />
      </div>
      <MidSection />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
