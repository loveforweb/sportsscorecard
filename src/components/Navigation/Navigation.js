import './Navigation.scss';

import React, { useState } from 'react';

import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-controls="menu"
        onClick={toggleNav}
        className="mobile-nav-toggle"
      >
        <span className="sr-only">Open navigation</span>
        <MdMenu />
      </button>
      <div className={`navigation-container ${isOpen ? 'is--open' : ''}`}>
        <nav className="component navigation" id="menu">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <NavLink
                exact={true}
                to="/"
                activeClassName="selected"
                onClick={closeNav}
              >
                News
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink
                to="/schedule"
                activeClassName="selected"
                onClick={closeNav}
              >
                Schedule
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink
                to="/standings"
                activeClassName="selected"
                onClick={closeNav}
              >
                Standings
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink
                to="/teams"
                activeClassName="selected"
                onClick={closeNav}
                isActive={(match, location) => {
                  if (location.pathname.includes('team')) {
                    return true;
                  }

                  return false;
                }}
              >
                Teams
              </NavLink>
            </li>
            {/* <li className="navigation-list-item">
              <NavLink
                to="/stats"
                activeClassName="selected"
                onClick={closeNav}
              >
                Stats
              </NavLink>
            </li> */}
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Navigation;
