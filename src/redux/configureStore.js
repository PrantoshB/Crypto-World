import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsReducer from './coins/coins';
import globalReducer from './global/global';
import singleCoinReducer from './singlecoin/fetchCoin';

const store = configureStore(
  {
    reducer: {
      coins: coinsReducer,
      global: globalReducer,
      coin: singleCoinReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
