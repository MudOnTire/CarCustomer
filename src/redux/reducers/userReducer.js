
import * as CONSTANTS from 'src/redux/constants'

const initialState = {
  userName: '',
  userNumber: '',
  userLogo: '',
  error: {},
  location: {latitude: 0, longitude: 0},
  brandName: '',
  seriesName: '',
  carCategoryList: [],
  tempBrand: '',
  tempSeries: '',
  carList: null,
  verifyCode: '',
  gotVerifyCode: false,
  gotError: false,
  signedIn: false,
};

function extraReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.GET_CAR_CATEGORY_REQUESTED:
      return {
        ...state,
        tempBrand: action.params.brandName,
        tempSeries: action.params.seriesName
      };
    case CONSTANTS.SIGNIN_USER_SUCCESS:
    case CONSTANTS.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        userName: action.data.userName,
        userNumber: action.data.phoneNumber,
        signedIn: true
      };
    case CONSTANTS.GET_CAR_CATEGORY_SUCCESS:
      return {
        ...state,
        carCategoryList: action.data,
        brandName: state.tempBrand,
        seriesName: state.tempSeries
      };
    case CONSTANTS.SET_USER_LOCATION:
      return {
        ...state,
        location: action.data
      };
    case CONSTANTS.ADD_CAR_SUCCESS:
    case CONSTANTS.GET_CAR_SUCCESS:
      return {
        ...state,
        carList: action.data
      };
    case CONSTANTS.GET_VERIFY_CODE_SUCCESS:
      return {
        ...state,
        verifyCode: action.data
      };
    case CONSTANTS.CLEAR_ERROR_USER:
      return {
        ...state,
        error: '',
        gotError: false
      };
    case CONSTANTS.CLEAR_VERIFY_CODE:
      return {
        ...state,
        verifyCode: '',
        gotVerifyCode: true
      };
    case CONSTANTS.SIGN_OUT:
      return {
        ...state,
        signedIn: false,
        userName: '',
        userNumber: ''
      };
    case CONSTANTS.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case CONSTANTS.CHANGE_PASSWORD_FAILED:
    case CONSTANTS.SIGNIN_USER_FAILED:
    case CONSTANTS.GET_CAR_CATEGORY_FAILED:
    case CONSTANTS.SIGNUP_USER_FAILED:
    case CONSTANTS.GET_VERIFY_CODE_FAILED:
    case CONSTANTS.GET_CAR_FAILED:
    case CONSTANTS.ADD_CAR_FAILED:
        return {
          ...state,
          error: action.data,
          gotError: true
        };
    default:
      return state;
  }
}

export default extraReducer;