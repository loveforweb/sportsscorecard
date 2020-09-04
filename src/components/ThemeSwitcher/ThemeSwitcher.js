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
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.remove(isDarkMode ? 'light' : 'dark');
    document.body.classList.add(mode);
  }, [isDarkMode, mode]);

  return (
    <div className="component theme-switcher">
      <button
        className={`switcher-button ${
          isDarkMode ? 'button-dark' : 'button-light'
        }`}
        aria-label={`switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        onClick={switchThemeHandler}
      >
        <span className="dark-icon">
          <FaMoon />
        </span>
        <span className="light-icon">
          <FiSun />
        </span>
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  //
};

export default ThemeSwitcher;
