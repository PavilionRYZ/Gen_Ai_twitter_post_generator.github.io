import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 text-center relative z-10"
    >
      <h1 className="text-5xl font-bold mb-4">Create Viral Tweets Instantly with AI ✨</h1>
      <p className="text-xl mb-8">Powered by Google's Gemini API. Generate, style, and share tweets in seconds.</p>
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold"
        >
          Generate a Tweet
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border border-white text-white rounded-full font-semibold"
        >
          Learn More
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;