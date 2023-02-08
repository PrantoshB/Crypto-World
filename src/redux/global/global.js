import globalData from '../../services/globalData';

const GLOBAL_COINS = 'GLOBAL_COINS';

export const globalCoinsAction = () => async (dispatch) => {
  const global = await globalData();
  dispatch({
    type: GLOBAL_COINS,
    payload: global,
  });
};

const initialState = {
  global: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_COINS:
      return { ...state, global: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
