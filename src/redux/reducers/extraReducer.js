
import * as CONSTANTS from 'src/redux/constants'

const initialState = {
  bannerData: [],
  error: {},
  uiWords: []
};

function extraReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_BANNER_SUCCESS:
      return {
        ...state,
        bannerData: action.data
      };
    case CONSTANTS.GET_BANNER_FAILED:
      return {
        ...state,
        error: action.data
      };
    case CONSTANTS.GET_UI_WORDS_SUCCESS:
      return {
        ...state,
        uiWords: action.data
      };
    case CONSTANTS.GET_UI_WORDS_FAILED:
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
}

export default extraReducer;