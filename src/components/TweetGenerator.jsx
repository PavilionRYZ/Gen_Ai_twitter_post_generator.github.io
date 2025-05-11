import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const TweetGenerator = ({ setGeneratedTweet, jsConfetti, setIsGenerating }) => {
  const [tweetText, setTweetText] = useState('');
  const [style, setStyle] = useState('Casual');
  const [tone, setTone] = useState('Inspiring');
  const [isLoading, setIsLoading] = useState(false);

  const generateTweet = async () => {
    try {
      setIsLoading(true);
      setIsGenerating(true); // Trigger glowing stars

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + apiKey,
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a tweet about "${tweetText}" in a ${style} style with a ${tone} tone. Keep it under 280 characters.`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = response.data.candidates[0].content.parts[0].text;
      setGeneratedTweet(generatedText);
      jsConfetti.addConfetti();
    } catch (error) {
      console.error('Error generating tweet:', error);
      setGeneratedTweet('Error generating tweet. Please try again.');
    } finally {
      setIsLoading(false);
      setIsGenerating(false); // Stop glowing stars
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto my-10 p-6 glassmorphic rounded-lg shadow-lg relative z-10"
    >
      <textarea
        className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
        placeholder="What do you want to tweet about?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row gap-4 my-4">
  {/* Style Selector */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-medium text-white/80">Select Style</label>
    <div className="flex flex-wrap gap-2">
      {['Casual', 'Professional', 'Funny'].map((s) => (
        <button
          key={s}
          onClick={() => setStyle(s)}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            style === s
              ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  </div>

  {/* Tone Selector */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-medium text-white/80">Select Tone</label>
    <select
      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
      value={tone}
      onChange={(e) => setTone(e.target.value)}
    >
      {['Inspiring', 'Witty', 'Concise', 'Bold'].map((t) => (
        <option key={t} value={t} className="text-black">
          {t}
        </option>
      ))}
    </select>
  </div>
      </div>

      <motion.button
        id="generate-tweet-btn"
        whileHover={{ scale: 1.05 }}
        className={`w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center ${
          isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-blue-500'
        }`}
        onClick={generateTweet}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Tweet'
        )}
      </motion.button>
    </motion.div>
  );
};

export default TweetGenerator;