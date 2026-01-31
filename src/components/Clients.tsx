import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientsProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Client logos with actual company placeholder images
  const clients = [
    { name: 'Emaar', logo: 'https://logo.clearbit.com/emaar.com' },
    { name: 'Dubai Properties', logo: 'https://logo.clearbit.com/dubaiproperties.ae' },
    { name: 'Nakheel', logo: 'https://logo.clearbit.com/nakheel.com' },
    { name: 'Damac', logo: 'https://logo.clearbit.com/damacproperties.com' },
    { name: 'Aldar', logo: 'https://logo.clearbit.com/aldar.com' },
    { name: 'Meraas', logo: 'https://logo.clearbit.com/meraas.ae' },
    { name: 'Dubai Holding', logo: 'https://logo.clearbit.com/dubaiholding.com' },
    { name: 'Majid Al Futtaim', logo: 'https://logo.clearbit.com/majidalfuttaim.com' },
  ];

  // Real project images from Unsplash
  const projects = [
    { 
      id: 1, 
      title: 'Burj Khalifa District MEP Systems', 
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80' 
    },
    { 
      id: 2, 
      title: 'Dubai Marina Residential Complex', 
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80' 
    },
    { 
      id: 3, 
      title: 'Downtown Dubai Commercial Tower', 
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80' 
    },
    { 
      id: 4, 
      title: 'Palm Jumeirah Luxury Villa HVAC', 
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80' 
    },
    { 
      id: 5, 
      title: 'Business Bay Office Tower Electrical', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80' 
    },
    { 
      id: 6, 
      title: 'Dubai Creek Harbour Development', 
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80' 
    },
    { 
      id: 7, 
      title: 'JBR Beach Residence Plumbing Works', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80' 
    },
    { 
      id: 8, 
      title: 'Emirates Hills Villa MEP Installation', 
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80' 
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 ">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600">
              OUR PORTFOLIO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Our Valued Clients & Projects
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="h-1 mx-auto bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-3 sm:mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Trusted by leading organizations across the UAE
          </motion.p>
        </motion.div>

        {/* Clients Logos - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden"
        >
          <div className="relative max-w-full">
            {/* Gradient Overlays for fade effect - hidden on very small screens */}
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container */}
            <div className="overflow-x-hidden max-w-full">
              <motion.div
                className="flex gap-4 sm:gap-6 lg:gap-8"
                style={{ maxWidth: 'none' }}
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate clients array twice for seamless loop */}
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 w-32 sm:w-40 lg:w-48"
                    style={{ maxWidth: 'none' }}
                  >
                    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-16 sm:h-20 lg:h-24 flex items-center justify-center group">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=3b82f6&color=fff&size=200`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Projects Gallery Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <div className="max-w-7xl mx-auto overflow-hidden">
            {/* Main Slideshow */}
            <div className="relative h-[300px] sm:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden  mb-4 sm:mb-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
                >
                  {/* Project Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                  {/* Project Title at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 xl:p-12 z-10">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={index === currentSlide ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="max-w-4xl"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3">
                        <div className="h-0.5 sm:h-1 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
                        <span className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-white/40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-white/40"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Thumbnails / Indicators */}
            <div className="flex justify-center gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto pb-2 px-2 scrollbar-hide">
              <div className="flex gap-1.5 sm:gap-2 lg:gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 relative group transition-all duration-300 rounded-md sm:rounded-lg overflow-hidden ${
                      index === currentSlide 
                        ? 'ring-2 ring-blue-500 scale-100' 
                        : 'scale-95 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View ${project.title}`}
                  >
                    <div className="w-16 h-11 sm:w-24 sm:h-16 lg:w-28 lg:h-20 relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
                        index === currentSlide ? 'opacity-40' : 'opacity-70'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}