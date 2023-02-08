const url = 'https://api.coingecko.com/api/v3/coins/';

const fetchCoin = async (id) => {
  const response = await fetch(`${url}${id}`);
  const coin = await response.json();
  const coinData = {
    id: coin.id,
    name: coin.name,
    price: coin.market_data.current_price.usd,
    market_cap_rank: coin.market_cap_rank,
    market_cap: coin.market_data.market_cap.usd,
    high_24h: coin.market_data.high_24h.usd,
    low_24h: coin.market_data.low_24h.usd,
    price_change: coin.market_data.price_change_24h,
    market_cap_change: coin.market_data.market_cap_change_24h,
    total_supply: coin.market_data.total_supply,
    max_supply: coin.market_data.max_supply,
    circulating_supply: coin.market_data.circulating_supply,
    image: coin.image.large,
    description: coin.description.en,
  };
  return coinData;
};

export default fetchCoin;
