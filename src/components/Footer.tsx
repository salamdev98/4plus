import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    'Electrical & ELV Systems',
    'HVAC Systems',
    'Plumbing Works',
    'Design & Approvals',
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+971 55 208 3155',
      href: 'tel:+971552083155'
    },
    {
      icon: MessageCircle,
      text: '+971 55 208 3155',
      href: 'https://wa.me/971552083155',
      label: 'WhatsApp'
    },
    {
      icon: Mail,
      text: 'info@4plustechnicalservices.com',
      href: 'mailto:info@4plustechnicalservices.com'
    },
    {
      icon: MapPin,
      text: 'Office No. 44-43, Bur Dubai - Al Fahidi, Dubai, UAE',
      href: '#'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #4b5563 1px, transparent 1px),
                             linear-gradient(to bottom, #4b5563 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              {/* White card container for logo and info */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Large decorative plus shape in background */}
                <div className="absolute -top-8 -right-8 opacity-10">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-32 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 opacity-10">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-7 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-28 bg-gradient-to-b from-green-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="mb-4">
                    <img 
                      src="/logo.PNG" 
                      alt="4Plus Technical Services" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  
                  {/* Company name with gradient */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    4PLUS TECHNICAL SERVICES
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leading MEP technical services provider in UAE delivering innovative, 
                    sustainable, and future-ready engineering solutions.
                  </p>
                  
                  {/* Decorative bottom line */}
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      target={info.label === 'WhatsApp' ? '_blank' : undefined}
                      rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br transition-all duration-300 ${
                        info.label === 'WhatsApp' 
                          ? 'group-hover:from-green-500 group-hover:to-green-600' 
                          : 'group-hover:from-blue-500 group-hover:to-green-500'
                      }`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm leading-relaxed flex-1 pt-2 break-words">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p>
                © 2024 <span className="font-semibold text-white">4Plus Technical Services</span>. 
                All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 via-green-500/5 to-transparent pointer-events-none" />
    </footer>
  );
}