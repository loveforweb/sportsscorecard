import './GameHeader.scss';

import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import React from 'react';
import TeamBadge from '../TeamBadge';
import TeamName from '../TeamName';
import TeamScore from '../TeamScore';

const GameHeader = ({ awayData, homeData, scores }) => {
  const teamHeaderColours = {
    background: `linear-gradient(45deg, ${awayData.teamColoursHex[0]} 50%, ${homeData.teamColoursHex[0]} 50%)`,
  };

  return (
    <div className="component game-header" style={teamHeaderColours}>
      <Container>
        <div className="game-header-info">
          <div className="team team--away">
            <div className="team-identity">
              <TeamBadge badge={awayData.officialLogoImageSrc} />
              <TeamName
                city={awayData.city}
                name={awayData.name}
                abbreviation={awayData.abbreviation}
              />
            </div>
            {scores.homeScoreTotal ? (
              <TeamScore scoreTotal={scores.awayScoreTotal} />
            ) : null}
          </div>

          <div className="game-splitter">@</div>

          <div className="team team--home">
            {scores.homeScoreTotal ? (
              <TeamScore scoreTotal={scores.homeScoreTotal} />
            ) : null}
            <div className="team-identity">
              <TeamBadge badge={homeData.officialLogoImageSrc} />
              <TeamName
                city={homeData.city}
                name={homeData.name}
                abbreviation={homeData.abbreviation}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

GameHeader.propTypes = {
  //
};

export default GameHeader;
