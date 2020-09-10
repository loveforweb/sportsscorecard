import './FixtureCard.scss';

import GameDateTime from '../GameDateTime';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Stadium from '../Stadium';
import TeamBadge from '../TeamBadge';
import TeamName from '../TeamName';
import TeamScore from '../TeamScore';

const getFormattedDate = (date, format) => {
  return new Date(date).toLocaleDateString('en-GB', format);
};

const FixtureCard = ({
  gameData,
  isFixture,
  showAbbr,
  showDateOnly,
  showTimeOnly,
  showDateAndTime,
  awayTeamStats,
  homeTeamStats,
  showStats,
}) => {
  const gameDate = gameData.schedule.startTime;
  const urlYear = getFormattedDate(gameDate, { year: 'numeric' });
  const urlMonth = getFormattedDate(gameDate, { month: '2-digit' });
  const urlDay = getFormattedDate(gameDate, { day: '2-digit' });
  const fullUrl = `${urlYear}${urlMonth}${urlDay}-${gameData.schedule.awayTeam.abbreviation}-${gameData.schedule.homeTeam.abbreviation}`;

  return (
    <div className={`component fixture-block`}>
      <div className="fixture-block-row">
        <div className="game-details">
          <div className="team team--away">
            {showStats && awayTeamStats ? (
              <div className="team-wlt-stat">
                ({awayTeamStats.standings.wins} -{' '}
                {awayTeamStats.standings.losses}
                {awayTeamStats.standings?.ties
                  ? ` - ${awayTeamStats.standings.ties}`
                  : ''}
                )
              </div>
            ) : null}
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
            {showStats && homeTeamStats ? (
              <div className="team-wlt-stat">
                ({homeTeamStats.standings.wins} -{' '}
                {homeTeamStats.standings.losses}
                {homeTeamStats.standings?.ties
                  ? ` - ${homeTeamStats.standings.ties}`
                  : ''}
                )
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="fixture-block-row">
        <div className="game-ko-data">
          {showDateOnly ? (
            <GameDateTime
              startTime={gameData.schedule.startTime}
              showDate
              isFixture={isFixture}
            />
          ) : null}

          {showTimeOnly ? (
            <GameDateTime
              startTime={gameData.schedule.startTime}
              showTime
              isFixture={isFixture}
            />
          ) : null}

          {showDateAndTime ? (
            <GameDateTime
              startTime={gameData.schedule.startTime}
              showTime
              showDate
              isFixture={isFixture}
            />
          ) : null}
          <Stadium
            name={gameData.schedule.venue.name}
            city={gameData.schedule.venue.city}
          />
        </div>
      </div>
      {gameData.schedule.broadcasters.length > 0 &&
      gameData.schedule.playedStatus === 'UNPLAYED'
        ? gameData.schedule.broadcasters.map((broadcaster, i) => {
            return (
              <div className="broadcaster" key={i}>
                Live on: {broadcaster}
              </div>
            );
          })
        : null}
      {gameData.schedule.playedStatus === 'COMPLETED' ? (
        <div className="fixture-block-row">
          <Link to={`/game-details/${fullUrl}`} className="read-more-link">
            Read more
          </Link>
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
  showStats: PropTypes.bool,
  awayTeamStats: PropTypes.shape({}),
  homeTeamStats: PropTypes.shape({}),
};

export default FixtureCard;
