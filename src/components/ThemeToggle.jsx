import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-full bg-white/20 text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;