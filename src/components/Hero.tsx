import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    title: "Engineering Excellence",
    subtitle: "Delivering Smart MEP Solutions",
    image: "./mepsolutions.webp",
    overlayOpacity: 0.5
  },
  {
    title: "Precision Engineering",
    subtitle: "Building Tomorrow's Infrastructure Today",
    image: "./mepsolutions1.webp",
    overlayOpacity: 0.6
  },
  {
  title: "Powering Innovation",
  subtitle: "Engineering the Future with Smart Solutions",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  overlayOpacity: 0.55
}

];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${slides[currentSlide].image}")`
            }}
          />
          
          {/* Black Overlay with Opacity Control */}
          <div 
            className="absolute inset-0 bg-black"
            style={{
              opacity: slides[currentSlide].overlayOpacity
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <div className="container mx-auto text-center z-10 max-w-7xl">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4 sm:space-y-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg border border-white/30"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-white">
                    4PLUS TECHNICAL SERVICES
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white px-4">
                  {slides[currentSlide].title.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                      className="inline-block mr-2 sm:mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-3xl mx-auto font-light px-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-8 px-4"
                >
                  <a
                    href="#services"
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10">Explore Our Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
      </motion.div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
