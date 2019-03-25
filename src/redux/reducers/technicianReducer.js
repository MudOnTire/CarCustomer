
import * as CONSTANTS from 'src/redux/constants'

const initialState = {
  technicianData: [],
  error: '',
  freshData: false
};

function technicianReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_TECHNICIAN_DATA_SUCCESS:
      return {
        ...state,
        technicianData: action.data,
        freshData: true
      };
    case CONSTANTS.CLEAR_TECHNICIAN_STATE:
      return {
        ...state,
        freshData: false
      };
    case CONSTANTS.GET_TECHNICIAN_DATA_FAILED:
      return {
        ...state,
        error: action.data
      }
    default:
      return state;
  }
}

export default technicianReducer;