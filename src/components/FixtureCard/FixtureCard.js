import './FixtureCard.scss';

import GameDateTime from '../GameDateTime';
import PropTypes from 'prop-types';
import React from 'react';
import Stadium from '../Stadium';
import TeamBadge from '../TeamBadge';
import TeamName from '../TeamName';
import TeamScore from '../TeamScore';

const FixtureCard = ({
  gameData,
  isFixture,
  showAbbr,
  showDateOnly,
  showTimeOnly,
  showDateAndTime,
}) => {
  const driveSummary = false;

  return (
    <div className={`component fixture-block`}>
      <div className="fixture-block-row">
        <div className="game-details">
          <div className="team team--away">
            <div className="team-identity">
              <TeamBadge
                badge={gameData.schedule.awayTeam.officialLogoImageSrc}
              />
              <TeamName
                // city={gameData.schedule.awayTeam.city}
                name={gameData.schedule.awayTeam.name}
                abbreviation={gameData.schedule.awayTeam.abbreviation}
                showAbbrOnly={showAbbr || false}
              />
            </div>
            {gameData.score.homeScoreTotal ? (
              <TeamScore scoreTotal={gameData.score.awayScoreTotal} />
            ) : null}
          </div>

          <div className="game-splitter">@</div>

          <div className="team team--home">
            {gameData.score.homeScoreTotal ? (
              <TeamScore scoreTotal={gameData.score.homeScoreTotal} />
            ) : null}
            <div className="team-identity">
              <TeamBadge
                badge={gameData.schedule.homeTeam.officialLogoImageSrc}
              />
              <TeamName
                // city={gameData.schedule.homeTeam.city}
                name={gameData.schedule.homeTeam.name}
                abbreviation={gameData.schedule.homeTeam.abbreviation}
                showAbbrOnly={showAbbr || false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixture-block-row">
        <div className="game-ko-data">
          {showDateOnly ? (
            <GameDateTime
              date={new Date(gameData.schedule.startTime).toLocaleDateString(
                'en-GB',
                {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }
              )}
              isFixture={isFixture}
            />
          ) : null}

          {showTimeOnly ? (
            <GameDateTime
              time={new Date(gameData.schedule.startTime).toLocaleTimeString(
                'en-GB',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
              isFixture={isFixture}
            />
          ) : null}

          {showDateAndTime ? (
            <GameDateTime
              time={new Date(gameData.schedule.startTime).toLocaleTimeString(
                'en-GB',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
              date={new Date(gameData.schedule.startTime).toLocaleDateString(
                'en-GB',
                {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }
              )}
              isFixture={isFixture}
            />
          ) : null}
          <Stadium
            name={gameData.schedule.venue.name}
            city={gameData.schedule.venue.city}
          />
        </div>
      </div>
      {driveSummary ? (
        <div className="fixture-block-row">
          <h2>Drive summary</h2>
          <div className="accordion"></div>
        </div>
      ) : null}
    </div>
  );
};

FixtureCard.propTypes = {
  gameData: PropTypes.shape({}).isRequired,
  isFixture: PropTypes.bool,
  showAbbr: PropTypes.bool,
  showDateOnly: PropTypes.bool,
  showTimeOnly: PropTypes.bool,
  showDateAndTime: PropTypes.bool,
};

export default FixtureCard;
