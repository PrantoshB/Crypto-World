import fetchCoin from '../../services/fetchCoin';

const FETCH_COIN = 'FETCH_COIN';
const initialState = {
  coindata: [],
};

export const fetchCoinAction = (id) => async (dispatch) => {
  const coin = await fetchCoin(id);
  dispatch({
    type: FETCH_COIN,
    payload: coin,
  });
};

const singleCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return { ...state, coindata: action.payload };
    default:
      return state;
  }
};

export default singleCoinReducer;
