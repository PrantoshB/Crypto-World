import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Coin from '../components/Coin';
import { fetchCoinsAction } from '../redux/coins/coins';
import Global from '../components/Global';
import Details from './Details';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);

  React.useEffect(() => {
    dispatch(fetchCoinsAction());
  }, [dispatch]);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="search-bar">
        <input className="search" type="text" placeholder="Search for Cryptocurrency" onChange={handleChange} />
      </div>
      <Global />
      <div className="cointop"><p>Stats by cryptocurrencies</p></div>
      <div className="coin-container">
        {filteredCoins.map((coin) => (
          <Link className="coin-link" to={`/details/${coin.id}`} key={coin.id} element={<Details />}>
            <Coin
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
