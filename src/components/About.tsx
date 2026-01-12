import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Building2, label: "Projects", value: "500+" },
    { icon: Users, label: "Clients", value: "200+" },
    { icon: Award, label: "Excellence", value: "100%" },
    { icon: TrendingUp, label: "Growth", value: "50%+" }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-6 py-2 bg-blue-50 rounded-full"
            >
              <span className="text-sm font-semibold tracking-wider text-blue-600">
                ABOUT US
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Engineering the Future
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-gray-600 text-lg leading-relaxed"
            >
              <p>
                At <span className="font-semibold text-gray-900">4plus Technical Services</span>, our mission has always been to deliver top-quality MEP solutions that address the growing demands of the industry.
              </p>
              <p>
                Driven by <span className="font-semibold text-gray-900">integrity, innovation, and a commitment to excellence</span>, our team of skilled professionals ensures precision at every stage—from design to installation.
              </p>
              <p>
                Our clients trust us for timely and efficient solutions, and we pride ourselves on building long-term relationships based on quality and reliability.
              </p>
              <p>
                With a strong focus on <span className="font-semibold text-gray-900">sustainability and cutting-edge technology</span>, we continue to grow and lead with passion and professionalism.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-2 bg-blue-100 rounded-xl">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }} />
              </motion.div>

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-8"
              >
                <div className="absolute inset-0 border-4 border-green-200 rounded-full" style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }} />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20 blur-xl" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-2xl"
                    style={{
                      transform: "rotateX(45deg) rotateZ(45deg)",
                      transformStyle: "preserve-3d"
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
