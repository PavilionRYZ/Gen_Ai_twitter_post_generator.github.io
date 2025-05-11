import React from 'react';
import { motion } from 'framer-motion';
import robotImage from "../../public/robot.png";

const floatAnimation = {
  y: [0, -30, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const ThreeBot = () => {
  return (
    <motion.div
      className="fixed top-1/2 right-6 transform -translate-y-1/2 w-[160px] h-[160px] z-50 cursor-grab active:cursor-grabbing"
      animate={floatAnimation}
      drag
      dragConstraints={{ top: -1000, bottom: 1000, left: -1000, right: 1000 }}
      dragElastic={0.2}
      dragMomentum={false}
    >
      <img
        src={robotImage}
        alt="Floating Bot"
        className="w-full h-full object-contain drop-shadow-lg pointer-events-none"
      />
    </motion.div>
  );
};

export default ThreeBot;
