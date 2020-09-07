import './GameStats.scss';

import PropTypes from 'prop-types';
import React from 'react';

const GameStats = ({ homeTeam, awayTeam, homeTeamAbbr, awayTeamAbbr }) => {
  return (
    <div className="component game-stats" role="table">
      <div role="row" className="stats-row stats-row--header">
        <div role="columnheader" className="stat-away">
          {awayTeamAbbr}
        </div>
        <div role="columnheader" className="stat-item"></div>
        <div role="columnheader" className="stat-home">
          {homeTeamAbbr}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.miscellaneous.offenseYds}
        </div>
        <div role="cell" className="stat-item">
          TOTAL YARDS
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.miscellaneous.offenseYds}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.passing.passNetYards}
        </div>
        <div role="cell" className="stat-item">
          PASSING YARDS
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.passing.passNetYards}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.rushing.rushYards}
        </div>
        <div role="cell" className="stat-item">
          RUSHING YARDS
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.rushing.rushYards}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.miscellaneous.offenseAvgYds}
        </div>
        <div role="cell" className="stat-item">
          AVERAGE YARDS PER PLAY
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.miscellaneous.offenseAvgYds}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.fumbles.fumbles}
        </div>
        <div role="cell" className="stat-item">
          FUMBLES
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.fumbles.fumbles}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.interceptions.interceptions}
        </div>
        <div role="cell" className="stat-item">
          INTERCEPTIONS THROWN
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.interceptions.interceptions}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.tackles.sacks}
        </div>
        <div role="cell" className="stat-item">
          SACKS ACHIEVED
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.tackles.sacks}
        </div>
      </div>
      <div role="row" className="stats-row">
        <div role="cell" className="stat-away">
          {awayTeam.miscellaneous.penalties}
        </div>
        <div role="cell" className="stat-item">
          PENALTIES
        </div>
        <div role="cell" className="stat-home">
          {homeTeam.miscellaneous.penalties}
        </div>
      </div>
    </div>
  );
};

GameStats.propTypes = {
  homeTeam: PropTypes.shape({}).isRequired,
  awayTeam: PropTypes.shape({}).isRequired,
  awayTeamAbbr: PropTypes.string.isRequired,
  homeTeamAbbr: PropTypes.string.isRequired,
};

export default GameStats;
