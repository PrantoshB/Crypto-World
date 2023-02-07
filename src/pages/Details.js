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
        <h3>
          Market Cap Rank:
          {data.market_cap_rank}
        </h3>
        <h3>
          Market Cap:  $
          {data.market_cap}
        </h3>
        <h3>
          24h High:  $
          {data.high_24h}
        </h3>
        <h3>
          24h Low:  $
          {data.low_24h}
        </h3>
        <h3>
          Price Change 24h:
          {data.price_change}
        </h3>
        <h3>
          Market Cap Change:
          {data.price_change.toFixed(5)}
        </h3>
        <h3>
          Total Supply:
          {data.price_change}
        </h3>
        <h3>
          Max Supply:
          {data.price_change}
        </h3>
        <h3>
          Circulating Supply:
          {data.price_change}
        </h3>

      </div>
    </div>
  );
};

export default Details;
