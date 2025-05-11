import React from 'react';
import { motion } from 'framer-motion';

const TweetDisplay = ({ tweet, regenerate }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tweet);
    alert('Tweet copied!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`max-w-lg mx-auto my-6 p-4 rounded-lg shadow-lg relative z-10`}
    >
      <p className="text-lg">{tweet}</p>
      <div className="flex justify-end space-x-3 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          onClick={regenerate}
        >
          Regenerate
        </button>
      </div>
    </motion.div>
  );
};

export default TweetDisplay;