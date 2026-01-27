import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Updated title to match SEO-optimized version in index.html
    document.title = "4Plus Technical Services | MEP Engineering Excellence in UAE";
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header/>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

export default App;
