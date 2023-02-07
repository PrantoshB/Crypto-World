import fetchCoin from '../../services/fetchCoin';

const FETCH_COIN = 'FETCH_COIN';
const initialState = {
  coin: [],
};

export const fetchCoinAction = () => async (dispatch) => {
  const coin = await fetchCoin();
  dispatch({
    type: FETCH_COIN,
    payload: coin,
  });
};

const singleCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return { ...state, coin: action.payload };
    default:
      return state;
  }
};

export default singleCoinReducer;
