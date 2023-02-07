const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

const fetchCoins = async () => {
  const response = await fetch(url);
  const coins = await response.json();
  const coinsData = coins.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
    current_price: coin.current_price,
  }));
  return coinsData;
};

export default fetchCoins;
