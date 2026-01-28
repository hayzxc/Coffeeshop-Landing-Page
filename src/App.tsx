import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Menu } from "./components/Menu";
import BookingForm from "./components/BookingForm";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ParallaxDivider, ParallaxCTA } from "./components/ParallaxSections";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <ParallaxDivider />
      <Menu />
      <ParallaxCTA />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

