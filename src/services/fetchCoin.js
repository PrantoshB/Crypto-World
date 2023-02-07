const url = 'https://api.coingecko.com/api/v3/coins/';

const fetchCoin = async (id) => {
  const response = await fetch(`${url}${id}`);
  const coin = await response.json();
  const coinData = {
    id: coin.id,
    name: coin.name,
    image: coin.image.large,
    description: coin.description.en,
  };
  return coinData;
};

export default fetchCoin;
