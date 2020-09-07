import './ThemeSwitcher.scss';

import React, { useState } from 'react';

import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [mode, setMode] = useState('light');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchThemeHandler = () => {
    localStorage.setItem('mode', mode === 'dark' ? 'light' : 'dark');
    setMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');

    if (storedMode) {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(storedMode);
      setMode(storedMode);
    } else {
      document.body.classList.add('light');
      setMode('light');
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove(mode === 'dark' ? 'light' : 'dark');
    document.body.classList.add(mode);
    setIsDarkMode(mode === 'dark' || false);
  }, [mode]);

  return (
    <div className="component theme-switcher">
      <button
        className={`switcher-button ${
          isDarkMode ? 'button-dark' : 'button-light'
        }`}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        onClick={switchThemeHandler}
      >
        <span className="dark-icon">
          <FaMoon />
        </span>
        <span className="light-icon">
          <FiSun />
        </span>
        <span className="text-content">
          Switch to {isDarkMode ? 'light' : 'dark'} mode
        </span>
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  //
};

export default ThemeSwitcher;
