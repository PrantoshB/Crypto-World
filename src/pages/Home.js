import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Coin from '../components/Coin';
import { fetchCoinsAction } from '../redux/coins/coins';
import Global from '../components/Global';

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
          <Coin
            id={coin.id}
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
