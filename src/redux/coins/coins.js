import fetchCoins from '../../services/fetchCoins';

const FETCH_COINS = 'FETCH_COINS';

export const fetchCoinsAction = () => async (dispatch) => {
  const coins = await fetchCoins();
  dispatch({
    type: FETCH_COINS,
    payload: coins,
  });
};

const initialState = {
  coins: [],
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, coins: action.payload };
    default:
      return state;
  }
};

export default coinsReducer;
