const url = 'https://api.coingecko.com/api/v3/global';

const globalData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const global = data.data.active_cryptocurrencies;
  return global;
};

export default globalData;
