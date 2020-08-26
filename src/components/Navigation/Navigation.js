import './Navigation.scss';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="component navigation">
      <ul>
        <li>
          <NavLink to="/fixtures" activeClassName="selected">
            Fixtures
          </NavLink>
        </li>
        <li>
          <NavLink to="/standings" activeClassName="selected">
            Standings
          </NavLink>
        </li>
        <li>
          <NavLink to="/results" activeClassName="selected">
            Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams" activeClassName="selected">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" activeClassName="selected">
            Stats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  //
};

export default Navigation;
