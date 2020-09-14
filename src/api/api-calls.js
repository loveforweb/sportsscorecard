import axios from 'axios';
// const API_URL = 'https://scrambled-api.mysportsfeeds.com/v2.1/pull/nfl';
const API_URL = 'https://api.mysportsfeeds.com/v2.1/pull/nfl';
export const API_STALE_TIMEOUT = 3600000; // 1 day
export const STANDINGS_YEAR = 2020;

const sportsIOKey = `${process.env.REACT_APP_SPORTS_IO_KEY}`;

const access_token = btoa(
  `${process.env.REACT_APP_API_DEV_USERNAME}:${process.env.REACT_APP_API_DEV_PASSWORD}`
);

const headers = {
  headers: {
    Authorization: `Basic ${access_token}`,
  },
};

// const standingsStatsParams = '?stats=W,L,T,PF,PA,PtDiff,winPct,firstDownsTotal,firstDownsRush,firstDownsPass,firstDownsPenalty,thirdDowns,thirdDownsAtt,fourthDowns,fourthDownsAtt,offenseYds,offensePlays,offenseAvgYds,rushYards,rushAttempts,rushAverage,passGrossYards,passCompletions,passAttempts,passInt,passAvg,sacks,fgMade,fgAtt,totalTD,rushTD,passTD,prTD,intTD';

const standingsStatsParams = '';

// FIXTURES BY WEEK
export const GET_FIXTURES = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/${params.yearSelection}-regular/week/${params.weekSelection}/games.json`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// FIXTURES FOR TEAM WITH LIMIT
export const GET_TEAM_FIXTURES = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/2020-regular/games.json?team=${params.team}&limit=3&status=unplayed`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};
// RESULTS FOR TEAM WITH LIMIT
export const GET_TEAM_RESULTS = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/2020-regular/games.json?team=${params.team}&limit=3&status=final`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// VENUES
export const GET_VENUE = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/2020-regular/venues.json?team=${params.team}`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// STANDINGS
export const GET_STANDINGS = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/${params.year}-regular/standings.json${standingsStatsParams}`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// PLAYERS
export const GET_PLAYERS = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/players.json?team=${params.team}`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// GAME DETAILS
export const GET_GAME_DETAILS = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/2020-regular/games/${params.id}/boxscore.json`,
      headers
    );

    return data;
  } catch (error) {
    return error.response;
  }
};

// NEWS ARTICLES SPORTSDATA.IO
export const GET_NEWS_ARTICLES = async (q, params) => {
  try {
    const { data } = await axios.get(
      `https://api.sportsdata.io/v3/nfl/scores/json/News?key=${sportsIOKey}`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// NEWS ARTICLES ESPN
export const GET_NEWS_ARTICLES_ESPN = async (q, params) => {
  try {
    const { data } = await axios.get(
      `http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

// GAME LINEUP
export const GET_GAME_LINEUP = async (q, params) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/2020-regular/games/${params.id}/lineup.json`,
      headers
    );
    return data;
  } catch (error) {
    return error.response;
  }
};
