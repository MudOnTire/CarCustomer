
import * as CONSTANTS from 'src/redux/constants'
import {fromJS} from 'immutable'

const initialState = {
  expertData: [],
  error: '',
  freshData: false
};

function expertReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_EXPERT_DATA_SUCCESS:
      return {
        ...state,
        expertData: action.data,
        freshData: true
      };
    case CONSTANTS.CLEAR_EXPERT_STATE:
      return {
        ...state,
        freshData: false
      };
    case CONSTANTS.GET_EXPERT_DATA_FAILED:
      return {
        ...state,
        error: action.data
      }
    default:
      return state;
  }
}

export default expertReducer;