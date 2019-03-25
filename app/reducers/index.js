import Axios from 'axios';

const initialState = {
  loading: false,
  candies: [],
};

//Actions types
const GET_CANDIES = 'GET_CANDIES';
const GOT_CANDIES = 'GOT_CANDIES';

//Action creators
const getCandies = () => ({
  type: GET_CANDIES,
});

const gotCandies = data => ({
  type: GOT_CANDIES,
  data,
});

//thunk creators
export const fetchCandies = () => {
  return async dispatch => {
    dispatch(getCandies());
    const data = await Axios.get('/api/candies');
    dispatch(gotCandies(data));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, loading: true };
    case GOT_CANDIES:
      return { ...state, loading: false, type: action.GOT_CANDIES };
    default:
      return state;
  }
};

export default rootReducer;
