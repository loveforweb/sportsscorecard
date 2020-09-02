import axios from 'axios';
const API_URL = 'https://scrambled-api.mysportsfeeds.com/v2.1/pull/nfl';
export const API_STALE_TIMEOUT = 3600000;

const access_token = btoa(
  `${process.env.REACT_APP_API_DEV_USERNAME}:${process.env.REACT_APP_API_DEV_PASSWORD}`
);

const headers = {
  headers: {
    Authorization: `Basic ${access_token}`,
  },
};

// FIXTURES BY WEEK
export const GET_FIXTURES = async (q, params) => {
  const { data } = await axios.get(
    `${API_URL}/2020-regular/week/${params.weekSelection}/games.json`,
    headers
  );
  return data;
};

// FIXTURES FOR TEAM WITH LIMIT
export const GET_TEAM_FIXTURES = async (q, params) => {
  const { data } = await axios.get(
    `${API_URL}/2020-regular/games.json?team=${params.team}&limit=3`,
    headers
  );
  return data;
};

// VENUES
export const GET_VENUE = async (q, params) => {
  const { data } = await axios.get(
    `${API_URL}/2019-regular/venues.json?team=${params.team}`,
    headers
  );
  return data;
};

// STANDINGS
export const GET_STANDINGS = async (q, params) => {
  const { data } = await axios.get(
    `${API_URL}/2019-regular/standings.json`,
    headers
  );
  return data;
};

// PLAYERS
export const GET_PLAYERS = async (q, params) => {
  const { data } = await axios.get(
    `${API_URL}/players.json?team=${params.team}`,
    headers
  );
  return data;
};
