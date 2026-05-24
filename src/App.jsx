import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/Trustbar.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedWork />
        <Services />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;