const CURRENT = process.env.ENV || 'prod';

const configs = {
  qa:      { BASE_URL: 'https://qa1.rupyy.in/' },
  staging: { BASE_URL: 'https://staging.rupyy.in/' },
  prod:    { BASE_URL: 'https://www.rupyy.com' }
};

export default configs[CURRENT];