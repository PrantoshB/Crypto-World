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

  return (
    <>
      <Global />
      <div className="cointop"><p>Stats by cryptocurrencies</p></div>
      <div className="coin-container">
        {coins.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id} element={<Details />}>
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
