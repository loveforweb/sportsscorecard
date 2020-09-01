import './StandingsTable.scss';

import PropTypes from 'prop-types';
import React from 'react';
import TeamBadge from '../TeamBadge';
import TeamName from '../TeamName';

const StandingsTable = ({ division, teams, teamId }) => {
  return (
    <div
      className={`component standings-table ${
        teamId ? 'standings-table--individual' : ''
      }`}
      role="table"
    >
      <div className="scroller">
        <div className="table-row table-row--heading" role="row">
          <div
            className="table-cell table-cell--sticky"
            aria-label="Division"
            role="columnheader"
          >
            {division}
          </div>
          <div className="table-cell" aria-label="Played" role="columnheader">
            P
          </div>
          <div className="table-cell" aria-label="Wins" role="columnheader">
            W
          </div>
          <div className="table-cell" aria-label="Losses" role="columnheader">
            L
          </div>
          <div className="table-cell" aria-label="Ties" role="columnheader">
            T
          </div>
          <div
            className="table-cell table-cell-strong"
            aria-label="Win Percentage"
            role="columnheader"
          >
            PCT
          </div>
          <div
            className="table-cell"
            aria-label="Points For"
            role="columnheader"
          >
            PF
          </div>
          <div
            className="table-cell"
            aria-label="Points Against"
            role="columnheader"
          >
            PA
          </div>
          <div
            className="table-cell"
            aria-label="Points Difference"
            role="columnheader"
          >
            PD
          </div>
        </div>
        {teams.map(({ team, stats }) => {
          return (
            <div
              className={`table-row ${
                team.id === teamId ? 'highlight-row' : ''
              }`}
              role="row"
              key={team.id}
            >
              <div className="table-cell table-cell--sticky" role="rowheader">
                <div className="team">
                  <TeamBadge badge={team.officialLogoImageSrc} />
                  <TeamName
                    city={team.city}
                    name={team.name}
                    abbreviation={team.abbreviation}
                  />
                </div>
              </div>
              <div className="table-cell" role="cell">
                {stats.gamesPlayed}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.wins}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.losses}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.ties}
              </div>
              <div className="table-cell table-cell-strong" role="cell">
                {stats.standings.winPct}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.pointsFor}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.pointsAgainst}
              </div>
              <div className="table-cell" role="cell">
                {stats.standings.pointDifferential}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

StandingsTable.propTypes = {
  division: PropTypes.string.isRequired,
  teams: PropTypes.array.isRequired,
};

export default StandingsTable;
