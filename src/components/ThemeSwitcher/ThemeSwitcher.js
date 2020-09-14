import './ThemeSwitcher.scss';

import React, { useContext, useState } from 'react';

import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { ThemeContext } from '../../themeStore';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { theme, switchTheme } = useContext(ThemeContext);

  const switchThemeHandler = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    switchTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(storedTheme);
      switchTheme(storedTheme);
    } else {
      document.body.classList.add('dark');
      switchTheme('dark');
    }
  }, [switchTheme]);

  useEffect(() => {
    document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.add(theme);
    setIsDarkMode(theme === 'dark' || false);
  }, [theme]);

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

export default ThemeSwitcher;
