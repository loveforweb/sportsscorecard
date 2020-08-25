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

export const GET_FIXTURES = async () => {
  const { data } = await axios.get(
    `${API_URL}/2019-regular/date/20190929/games.json`,
    headers
  );
  return data;
};
