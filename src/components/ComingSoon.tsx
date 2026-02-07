import { motion } from "framer-motion";
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Coming Soon 🚀
        </h1>
        <h1 className="text-red-500 text-6xl">COMING SOON TEST</h1>


        <p className="text-gray-400 text-lg mb-6">
          4Plus Technical Services
          <br />
          Website is under construction
        </p>

        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
      </motion.div>
    </div>
  );
};

export default ComingSoon;

