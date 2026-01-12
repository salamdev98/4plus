import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: 'About Us', href: '#about', color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { name: 'Our Services', href: '#services', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { name: 'Contact Us', href: '#contact', color: 'bg-gradient-to-r from-red-500 to-red-600' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setIsScrolled(currentScrollY > 50);
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
            setIsMobileMenuOpen(false);
          } else {
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-16 h-16">
                <img 
                  src="/logo.PNG" 
                  alt="4Plus Technical Services" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-gray-900">
                  4PLUS TECHNICAL SERVICES
                </span>
                <span className="block text-xs tracking-wider text-gray-600">
                  
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative  font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 ${item.color} transition-all duration-300 ease-out ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      transformOrigin: 'left'
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/logo.PNG" 
                      alt="4Plus" 
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-gray-900 font-bold text-lg">MENU</span>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  <div className="space-y-3">
                    {navItems.map((item, index) => (
                      <MobileMenuItem
                        key={item.name}
                        item={item}
                        index={index}
                        handleNavClick={handleNavClick}
                      />
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm font-medium">
                      Engineering Excellence
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      © 2025 4Plus Technical Services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Mobile Menu Item Component
function MobileMenuItem({ item, index, handleNavClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(item.href);
      }}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block group cursor-pointer"
    >
      <div className="relative p-4 hover:bg-gray-50 transition-all duration-300">
        <div className="relative flex items-center justify-between">
          <span className="text-gray-900 font-medium text-lg">
            {item.name}
          </span>
          <span className={`transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
            →
          </span>
        </div>
        
        {/* Animated bottom border for mobile */}
        <span 
          className={`absolute bottom-0 left-0 h-0.5 ${item.color} transition-all duration-300 ease-out ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </motion.a>
  );
}