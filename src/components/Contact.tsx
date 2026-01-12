import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+971 XX XXX XXXX",
      link: "tel:+971XXXXXXXXX",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@4plustech.com",
      link: "mailto:info@4plustech.com",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Dubai, United Arab Emirates",
      link: "#",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Sun - Thu: 8:00 AM - 6:00 PM",
      link: "#",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-4 px-6 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to start your project? Reach out to our team for expert MEP solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
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
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl mt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Your Project Today
              </h3>
              <p className="text-gray-300 mb-6">
                Our team is ready to discuss your requirements and provide tailored MEP solutions.
              </p>
              <a
                href="tel:+971XXXXXXXXX"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.7659790753!2d54.897847!3d25.076022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="4plus Technical Services Location"
                className="relative z-10"
              />

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm z-20 flex items-center justify-center">
                <p className="text-sm font-semibold text-gray-700">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
