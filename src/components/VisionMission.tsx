import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Zap, Droplets, Wind, Cpu } from "lucide-react";

/* ------------------ Animation Variants ------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    y: -12,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: 360,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

/* ------------------ Circuit Paths ------------------ */
const circuitPaths = [
  // Main horizontal circuits
  "M0,20 Q30,10 60,20 T120,20",
  "M0,80 Q40,90 80,80 T160,80",
  // Vertical connecting circuits
  "M30,0 Q20,30 30,60",
  "M90,40 Q100,60 90,80",
  // Diagonal circuits
  "M10,10 L40,40",
  "M130,60 L160,30",
];

/* ------------------ Circuit Line Component ------------------ */
const CircuitLine = ({ path, index }) => {
  const strokeColors = [
    "rgba(59, 130, 246, 0.15)",  // blue-500
    "rgba(34, 197, 94, 0.15)",   // green-500
    "rgba(168, 85, 247, 0.15)",  // purple-500
    "rgba(6, 182, 212, 0.15)",   // cyan-500
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <motion.path
        d={path}
        fill="none"
        stroke={strokeColors[index % strokeColors.length]}
        strokeWidth="1"
        strokeDasharray="10,10"
        initial={{ 
          pathLength: 0,
          strokeDashoffset: 100,
          opacity: 0
        }}
        animate={{ 
          pathLength: 1,
          strokeDashoffset: 0,
          opacity: 0.3
        }}
        transition={{
          pathLength: {
            duration: 4,
            delay: index * 0.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          },
          strokeDashoffset: {
            duration: 2,
            delay: index * 0.3,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 2,
          },
          opacity: {
            duration: 3,
            delay: index * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }
        }}
      />
    </svg>
  );
};

/* ------------------ Data Flow Line Component ------------------ */
const DataFlowLine = ({ fromX, fromY, toX, toY, delay = 0 }) => {
  const path = `M${fromX},${fromY} Q${(fromX + toX) / 2},${(fromY + toY) / 2 + 50} ${toX},${toY}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <motion.path
        d={path}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{
          pathLength: {
            duration: 3,
            delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          },
          opacity: {
            duration: 2,
            delay,
            repeat: Infinity,
            repeatDelay: 1,
          }
        }}
      />
      
      {/* Moving dot along the path */}
      <motion.circle
        r="3"
        fill="rgba(59, 130, 246, 0.6)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{
          pathLength: {
            duration: 3,
            delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          },
          opacity: {
            duration: 3,
            delay,
            repeat: Infinity,
            repeatDelay: 1,
          }
        }}
      />
    </svg>
  );
};

/* ------------------ MEP Icon Component ------------------ */
const MEPIcon = ({ Icon, x, y, color, size = 32, delay = 0 }) => (
  <motion.div
    className="absolute"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity: 0.2,
      y: [0, -10, 0]
    }}
    transition={{
      scale: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      },
      opacity: {
        duration: 1.5,
        delay,
        ease: "easeOut"
      },
      y: {
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <Icon size={size} className={color} />
  </motion.div>
);

/* ------------------ Pulse Grid ------------------ */
const PulseGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-gray-700/30 rounded-lg"
        style={{
          left: `${(i % 4) * 25}%`,
          top: `${Math.floor(i / 4) * 33}%`,
          width: '24%',
          height: '32%',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          borderColor: ['rgba(75, 85, 99, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(75, 85, 99, 0.3)']
        }}
        transition={{
          opacity: {
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          borderColor: {
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    ))}
  </div>
);

/* ------------------ Main Component ------------------ */
export default function VisionMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-gray-900"
    >
      {/* SVG Gradients Definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dark grid background */}
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

      {/* Animated grid */}
      <PulseGrid />

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        {circuitPaths.map((path, index) => (
          <CircuitLine key={index} path={path} index={index} />
        ))}
      </div>

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        <DataFlowLine fromX="10" fromY="30" toX="90" toY="70" delay={0} />
        <DataFlowLine fromX="20" fromY="70" toX="80" toY="30" delay={0.5} />
        <DataFlowLine fromX="5" fromY="50" toX="95" toY="50" delay={1} />
      </div>

      {/* Minimal MEP Icons */}
      <div className="absolute inset-0">
        <MEPIcon Icon={Zap} x={15} y={25} color="text-yellow-400/20" size={28} delay={0.2} />
        <MEPIcon Icon={Droplets} x={85} y={30} color="text-blue-300/20" size={28} delay={0.4} />
        <MEPIcon Icon={Wind} x={20} y={75} color="text-cyan-300/20" size={28} delay={0.6} />
        <MEPIcon Icon={Cpu} x={80} y={70} color="text-purple-400/20" size={28} delay={0.8} />
      </div>

      {/* Center Glow Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />

      {/* Floating Energy Dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
          style={{
            left: `${(i * 20) % 100}%`,
            top: `${20 + (i * 15) % 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 text-sm font-semibold tracking-wider text-white"
          >
            OUR GUIDING PRINCIPLES
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Vision & Mission
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-1 mx-auto bg-gradient-to-r from-blue-400 to-green-400"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            {/* Card glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-xl"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-white/10">
              <motion.div
                variants={iconVariants}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/20"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Our Vision
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                To be a leading technical services provider delivering
                innovative, sustainable, and future-ready MEP solutions.
              </p>

              {/* Animated corner glow */}
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-tl-full"
                animate={{
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            {/* Card glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl blur-xl"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-white/10">
              <motion.div
                variants={iconVariants}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mb-6 shadow-lg shadow-green-500/20"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                To execute every project with precision, integrity, and
                excellence while embracing advanced technologies and
                sustainable practices.
              </p>

              {/* Animated corner glow */}
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 rounded-tl-full"
                animate={{
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle floating labels */}
      <motion.div
        className="absolute top-10 left-5 text-xs text-gray-500/50 font-mono tracking-wider"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        MEP SYSTEMS
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-5 text-xs text-gray-500/50 font-mono tracking-wider"
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ENGINEERING EXCELLENCE
      </motion.div>
    </section>
  );
}