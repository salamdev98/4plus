import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Header from './components/Header';

function App() {
  useEffect(() => {
    document.title = "4plus Technical Services - Engineering Excellence";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header/>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Contact />
      <FloatingActions />
    </main>
  );
}

export default App;
