import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-400 to-green-600",
      link: "https://wa.me/971XXXXXXXXX"
    },
    {
      icon: Phone,
      label: "Call",
      color: "from-blue-400 to-blue-600",
      link: "tel:+971XXXXXXXXX"
    },
    {
      icon: Mail,
      label: "Email",
      color: "from-red-400 to-red-600",
      link: "mailto:info@4plustech.com"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.link}
                target={action.label === "WhatsApp" ? "_blank" : undefined}
                rel={action.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ scale: 0, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, y: 20, opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${action.color} flex items-center justify-center rounded-full transition-transform duration-200`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>

                <span className="pr-5 font-semibold text-gray-900 whitespace-nowrap">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-200 relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-xl"
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-7 h-7 relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Phone className="w-7 h-7 relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!isOpen && (
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
        />
      )}
    </div>
  );
}