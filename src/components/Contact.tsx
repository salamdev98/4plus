import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+971 55 208 3155",
      link: "tel:+971552083155",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+971 55 208 3155",
      link: "https://wa.me/971552083155",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@4plustechnicalservices.com",
      link: "mailto:info@4plustechnicalservices.com",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Office No. 44-43, owned by Dubai Municipality- Bur Dubai - Al Fahidi, United Arab Emirates",
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
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
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Ready to start your project? Reach out to our team for expert MEP solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === "WhatsApp" ? "_blank" : undefined}
                rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words">
                    {info.detail}
                  </p>
                </div>

                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300"
                />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-2xl mt-6 sm:mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Start Your Project Today
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Our team is ready to discuss your requirements and provide tailored MEP solutions.
              </p>
              <a
                href="tel:+971552083155"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call Us Now
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[400px] sm:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5658896741956!2d55.29707807534398!3d25.26454127764925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1cc91ca50d%3A0x7e1c6c7c8b3c7b3c!2sAl%20Fahidi%2C%20Bur%20Dubai%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="4Plus Technical Services Location"
                className="relative z-10"
              />

              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm z-20 flex items-center justify-center px-4">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                  Bur Dubai - Al Fahidi, United Arab Emirates
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
