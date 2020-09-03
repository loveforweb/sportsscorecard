import './GamePlayItem.scss';

import PropTypes from 'prop-types';
import React from 'react';
import TeamBadge from '../TeamBadge';

const scoreType = (point) => {
  let type = '';
  switch (point) {
    case 6:
      type = 'TOUCHDOWN';
      break;
    case 3:
      type = 'FIELD GOAL';
      break;
    case 1:
      type = 'CONVERSION';
      break;
    case 2:
      type = '2pt CONVERSION';
      break;

    default:
      break;
  }

  return type;
};

const GamePlayItem = ({
  playDescription,
  scoreChange,
  homeScore,
  awayScore,
  team,
  teamHome,
  teamAway,
}) => {
  const awayTeamLogo = teamAway.officialLogoImageSrc;
  const homeTeamLogo = teamHome.officialLogoImageSrc;
  const awayTeamAbbr = teamAway.abbreviation;
  const homeTeamAbbr = teamHome.abbreviation;
  const awayTeamColour = teamAway.teamColoursHex[0];
  const homeTeamColour = teamHome.teamColoursHex[0];
  const isHomeTeam = team.abbreviation === teamHome.abbreviation;

  return (
    <div
      className={`component game-play-item ${
        isHomeTeam ? 'is--home-score' : 'is--away-score'
      }`}
      style={{
        borderColor: isHomeTeam ? homeTeamColour : awayTeamColour,
      }}
    >
      <TeamBadge badge={isHomeTeam ? homeTeamLogo : awayTeamLogo} />
      <div className="game-play-item-grid">
        <div
          className="team-abbr"
          style={{
            background: isHomeTeam ? homeTeamColour : awayTeamColour,
          }}
        >
          {isHomeTeam ? homeTeamAbbr : awayTeamAbbr}
        </div>
        <div className="score-type">{scoreType(scoreChange)}</div>
        <div className="play-description">
          <span className="title">Scoring Play:</span> {playDescription}
        </div>
        <div className="score-total">
          <span className="away-score">{awayScore}</span> -{' '}
          <span className="home-score">{homeScore}</span>
        </div>
      </div>
    </div>
  );
};

GamePlayItem.propTypes = {
  playDescription: PropTypes.string.isRequired,
  scoreChange: PropTypes.number.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  team: PropTypes.shape({}).isRequired,
  teamHome: PropTypes.shape({}).isRequired,
  teamAway: PropTypes.shape({}).isRequired,
};

export default GamePlayItem;
