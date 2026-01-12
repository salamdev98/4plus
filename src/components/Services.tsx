import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, Briefcase, Zap, Wind, Droplets, PenTool } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: "Design & Approvals",
    description: "Comprehensive MEP design services with regulatory compliance and authority approvals for seamless project execution.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery, quality control, and efficient resource utilization.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Zap,
    title: "Electrical & ELV Systems",
    description: "Advanced electrical installations and extra low voltage systems including security, networking, and automation.",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Energy-efficient heating, ventilation, and air conditioning solutions for optimal indoor climate control.",
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    icon: Droplets,
    title: "Plumbing Works",
    description: "Complete plumbing solutions including water supply, drainage, firefighting systems, and sanitary installations.",
    color: "from-blue-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: PenTool,
    title: "Design & Layout",
    description: "Innovative spatial planning and technical layouts optimized for functionality, efficiency, and aesthetics.",
    color: "from-pink-400 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
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
            className="inline-block mb-4 px-6 py-2 bg-gray-100 rounded-full"
          >
            <span className="text-sm font-semibold tracking-wider text-gray-700">
              WHAT WE OFFER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive MEP solutions tailored to meet your technical requirements with precision and excellence
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                />

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
