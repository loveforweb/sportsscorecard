import React from 'react';
import './TeamStats.scss';
import PropTypes from 'prop-types';

const TeamStats = ({ stats }) => {
  return (
    <div className="component team-stats">
      <ul className="stats-list">
        <li className="stats-list-item">
          <span className="term">Total 1st Downs</span>
          <span className="result">{stats.miscellaneous.firstDownsTotal}</span>

          <ul className="stats-list stats-list--sub">
            <li className="stats-list-item">
              <span className="term">1st Downs Rush</span>
              <span className="result">
                {stats.miscellaneous.firstDownsRush}
              </span>
            </li>
            <li className="stats-list-item">
              <span className="term">1st Downs Pass</span>
              <span className="result">
                {stats.miscellaneous.firstDownsPass}
              </span>
            </li>
            <li className="stats-list-item">
              <span className="term">1st Downs Penalty</span>
              <span className="result">
                {stats.miscellaneous.firstDownsPenalty}
              </span>
            </li>
          </ul>
        </li>
        <li className="stats-list-item">
          <span className="term">3RD DOWN CONVERSIONS</span>
          <span className="result">
            {stats.miscellaneous.thirdDowns} /{' '}
            {stats.miscellaneous.thirdDownsAtt}
          </span>
        </li>
        <li className="stats-list-item">
          <span className="term">4TH DOWN CONVERSIONS</span>
          <span className="result">
            {stats.miscellaneous.fourthDowns} /{' '}
            {stats.miscellaneous.fourthDownsAtt}
          </span>
        </li>
        <li className="stats-list-item">
          <span className="term">TOTAL OFFENSIVE YARDS</span>
          <span className="result">{stats.miscellaneous.offenseYds}</span>

          <ul className="stats-list stats-list--sub">
            <li className="stats-list-item">
              <span className="term">Offense Plays</span>
              <span className="result">{stats.miscellaneous.offensePlays}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Offense Average Yards</span>
              <span className="result">
                {stats.miscellaneous.offenseAvgYds}
              </span>
            </li>
          </ul>
        </li>
        <li className="stats-list-item">
          <span className="term">TOTAL RUSHING YARDS</span>
          <span className="result">{stats.rushing.rushYards}</span>

          <ul className="stats-list stats-list--sub">
            <li className="stats-list-item">
              <span className="term">Plays</span>
              <span className="result">{stats.rushing.rushAttempts}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Average Yards</span>
              <span className="result">{stats.rushing.rushAverage}</span>
            </li>
          </ul>
        </li>

        <li className="stats-list-item">
          <span className="term">TOTAL PASSING YARDS</span>
          <span className="result">{stats.passing.passGrossYards}</span>

          <ul className="stats-list stats-list--sub">
            <li className="stats-list-item">
              <span className="term">Completions</span>
              <span className="result">{stats.passing.passCompletions}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Attemps</span>
              <span className="result">{stats.passing.passAttempts}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Interceptions</span>
              <span className="result">{stats.passing.passInt}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Average</span>
              <span className="result">{stats.passing.passAvg}</span>
            </li>
          </ul>
        </li>

        <li className="stats-list-item">
          <span className="term">SACKS</span>
          <span className="result">{stats.tackles.sacks}</span>
        </li>
        <li className="stats-list-item">
          <span className="term">FIELD GOALS</span>
          <span className="result">
            {stats.fieldGoals.fgMade} / {stats.fieldGoals.fgAtt}
          </span>
        </li>

        <li className="stats-list-item">
          <span className="term">TOUCHDOWNS</span>
          <span className="result">{stats.miscellaneous.totalTD}</span>

          <ul className="stats-list stats-list--sub">
            <li className="stats-list-item">
              <span className="term">Rushing</span>
              <span className="result">{stats.rushing.rushTD}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Passing</span>
              <span className="result">{stats.passing.passTD}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Returns</span>
              <span className="result">{stats.puntReturns.prTD}</span>
            </li>
            <li className="stats-list-item">
              <span className="term">Defensive</span>
              <span className="result">{stats.interceptions.intTD}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

TeamStats.propTypes = {
  stats: PropTypes.shape({}).isRequired,
};

export default TeamStats;
