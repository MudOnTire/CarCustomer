
import * as CONSTANTS from 'src/redux/constants'
import {fromJS} from 'immutable'

const initialState = {
  errorOccured: false,
  serviceData: [],
  currentCategory: 'noCategory',
  tempCategory: 'noCategory',
  error: {},
  city: '上海市',
  searchText: '',
  freshData: false,
  service: {}
};

function serviceReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_SERVICE_REQUESTED:
      return {
        ...state,
        tempCategory: action.params.typeFilter
      };
    case CONSTANTS.SAVE_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.data
      };
    case CONSTANTS.GET_SERVICE_SUCCESS:
      return {
        ...state,
        serviceData: action.data,
        currentCategory: state.tempCategory,
        errorOccured: false,
        freshData: true
      };
    case CONSTANTS.GOT_SERVICE_DATA:
      return {
        ...state,
        freshData: false,
        errorOccured: false
      };
    case CONSTANTS.SAVE_SERVICE_FAILED:
    case CONSTANTS.GET_SERVICE_FAILED:
      return {
        ...state,
        error: action.data,
        errorOccured: true
      };
    case CONSTANTS.CHANGE_CITY:
      return {
        ...state,
        city: action.data
      };
    case CONSTANTS.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.data
      };
    case CONSTANTS.CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: action.data
      };
    default:
      return state;
  }
}

export default serviceReducer;