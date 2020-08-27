import './Navigation.scss';
import { MdMenu } from 'react-icons/md';

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
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
              <NavLink to="/fixtures" activeClassName="selected">
                Fixtures
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink to="/results" activeClassName="selected">
                Results
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink to="/standings" activeClassName="selected">
                Standings
              </NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink
                to="/teams"
                activeClassName="selected"
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
            <li className="navigation-list-item">
              <NavLink to="/stats" activeClassName="selected">
                Stats
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
