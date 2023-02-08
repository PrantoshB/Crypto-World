import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoinAction } from '../redux/singlecoin/fetchCoin';
import './Details.css';

const Details = () => {
  const par = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coin.coindata);
  const fetchFinal = fetchCoinAction(par.coinId);
  useEffect(() => {
    dispatch(fetchFinal);
  }, [dispatch, fetchFinal]);

  return (
    <div>
      <div className="details">
        <img className="detailsimage" src={data.image} alt="crypto" />
        <div className="det-name-price">
          <h2>{data.name}</h2>
          <h3 className="details-price">
            Current Price: $
            {data.price}
          </h3>
        </div>
      </div>
      <div className="cointop"><p>Cryptocurrency Details</p></div>
      <div className="details-info">

        <div className="coin-det">
          <h3>Market Cap Rank</h3>
          <h3>{data.market_cap_rank}</h3>
        </div>
        <div className="coin-det">
          <h3>Market Cap</h3>
          <h3>{data.market_cap}</h3>
        </div>
        <div className="coin-det">
          <h3>24h High</h3>
          <h3>{data.high_24h}</h3>
        </div>
        <div className="coin-det">
          <h3>24h Low</h3>
          <h3>{data.low_24h}</h3>
        </div>
        <div className="coin-det">
          <h3>Price Change 24h</h3>
          <h3>{data.price_change}</h3>
        </div>
        <div className="coin-det">
          <h3>Market Cap Change</h3>
          <h3>{data.market_cap_change}</h3>
        </div>
        <div className="coin-det">
          <h3>Total Supply</h3>
          <h3>{data.total_supply}</h3>
        </div>
        <div className="coin-det">
          <h3>Max Supply</h3>
          <h3>{data.max_supply}</h3>
        </div>
        <div className="coin-det">
          <h3>Circulating Supply</h3>
          <h3>{data.circulating_supply}</h3>
        </div>
      </div>
    </div>
  );
};

export default Details;
