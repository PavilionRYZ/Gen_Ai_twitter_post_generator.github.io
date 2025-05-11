import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'Fast AI Generation' },
  { icon: '🎯', title: 'Targeted Tone' },
  { icon: '🎨', title: 'Tweet Styling' },
  { icon: '📤', title: 'Easy Sharing' },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 text-center relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 glassmorphic rounded-lg"
          >
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;