import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import fetchCoin from '../services/fetchCoin';

const Coin = ({
  id, name, image, price,
}) => {
  const dispatch = useDispatch();

  const fetchHandler = () => {
    dispatch(fetchCoin(id));
  };

  return (
    <button type="button" className="coin" onClick={fetchHandler}>
      <img src={image} alt="crypto" />
      <div className="lastcoin">
        <h3>{name}</h3>
        <p className="coin-price">
          $
          {price}
        </p>
      </div>
    </button>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Coin;
