
import * as CONSTANTS from 'src/redux/constants'

const initialState = {
  commentData: [],
  error: '',
  freshData: false
};

function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_COMMENT_DATA_SUCCESS:
      return {
        ...state,
        commentData: action.data,
        freshData: true
      };
    case CONSTANTS.CLEAR_COMMENT_STATE:
      return {
        ...state,
        freshData: false
      };
    case CONSTANTS.GET_COMMENT_DATA_FAILED:
      return {
        ...state,
        error: action.data
      }
    default:
      return state;
  }
}

export default commentReducer;