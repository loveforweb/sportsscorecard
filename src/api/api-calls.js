import axios from 'axios';
const API_URL =
  'https://scrambled-api.mysportsfeeds.com/v2.1/pull/nfl/2020-regular';
export const API_STALE_TIMEOUT = 3600000;

const access_token = btoa(
  `${process.env.REACT_APP_API_DEV_USERNAME}:${process.env.REACT_APP_API_DEV_PASSWORD}`
);

const headers = {
  headers: {
    Authorization: `Basic ${access_token}`,
  },
};

export const GET_FIXTURES = async (q, obj) => {
  const { data } = await axios.get(
    `${API_URL}/week/${obj.weekSelection}/games.json`,
    headers
  );
  return data;
};

export const GET_VENUE = async (q, obj) => {
  const { data } = await axios.get(
    `${API_URL}/venues.json?team=${obj.id}`,
    headers
  );
  return data;
};
