import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Hero from './Hero';
import BlueGradientSection from './BlueGradientSection';
import BusinessSupport from './BusinessSupport';
import Services from './Services';
import { HoverPreview } from '../components/ui/hover-preview';
import Partners from './Partners';
import { WaitlistHero } from '../components/ui/waitlist-hero';
import Footer from "./Footer.tsx";
import { ContactForm } from "./ContactPage"; // Assicurati che ContactForm sia esportato

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
     
      <Hero />
     <BlueGradientSection />
      <BusinessSupport />
      <Services />
      {/* Sostituisce la sezione AI Innovation con HoverPreview */}
      <HoverPreview />
      <Partners />
      {/* WaitlistHero dopo la sezione Partners */}
      <WaitlistHero />
      <Footer />
    </BrowserRouter>
  );
}

export default App