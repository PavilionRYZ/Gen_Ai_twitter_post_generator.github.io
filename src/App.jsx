import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import TweetGenerator from './components/TweetGenerator';
import TweetDisplay from './components/TweetDisplay';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import ThreeBot from './components/ThreeBot';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import JSConfetti from 'js-confetti';

const App = () => {
  const [generatedTweet, setGeneratedTweet] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const jsConfetti = new JSConfetti();

  const starVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      transition: {
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white transition-colors duration-300">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            variants={starVariants}
            initial="initial"
            animate="animate"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 12}px`,
              filter: 'drop-shadow(0 0 6px white)',
            }}
          >
            <BsStars />
          </motion.div>
        ))}
      </div>
      <div className="relative z-10">
        <HeroSection />
        <TweetGenerator
          setGeneratedTweet={setGeneratedTweet}
          jsConfetti={jsConfetti}
          setIsGenerating={setIsGenerating}
        />
        {generatedTweet && (
          <TweetDisplay
            tweet={generatedTweet}
            regenerate={() =>
              document.getElementById('generate-tweet-btn')?.click()
            }
          />
        )}
        <FeaturesSection />
        <Footer />
      </div>
      <ThreeBot />
    </div>
  );
};

export default App;
