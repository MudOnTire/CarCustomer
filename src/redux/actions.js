
import * as CONSTANTS from './constants'

export function getServiceData(params) {
  return {
    type: CONSTANTS.GET_SERVICE_REQUESTED,
    params
  }
}

export function getServiceSuccess(data) {
  return {
    type: CONSTANTS.GET_SERVICE_SUCCESS,
    data
  }
}

export function getServiceFailed(data) {
  return {
    type: CONSTANTS.GET_SERVICE_FAILED,
    data
  }
}

export function gotServiceData(data) {
  return {
    type: CONSTANTS.GOT_SERVICE_DATA,
    data
  }
}

export function saveServiceData(params) {
  return {
    type: CONSTANTS.SAVE_SERVICE_REQUESTED,
    params
  }
}

export function saveServiceSuccess(data) {
  return {
    type: CONSTANTS.SAVE_SERVICE_SUCCESS,
    data
  }
}

export function saveServiceFailed(data) {
  return {
    type: CONSTANTS.SAVE_SERVICE_FAILED,
    data
  }
}

export function changeLabel(params) {
  return {
    type: CONSTANTS.CHANGE_LABEL,
    params
  }
}

export function changeCity(data) {
  return {
    type: CONSTANTS.CHANGE_CITY,
    data
  }
}

export function changeSearchText(data) {
  return {
    type: CONSTANTS.CHANGE_SEARCH_TEXT,
    data
  }
}

export function getBannerData(params) {
  return {
    type: CONSTANTS.GET_BANNER_REQUESTED,
    params
  }
}

export function getBannerSuccess(data) {
  return {
    type: CONSTANTS.GET_BANNER_SUCCESS,
    data
  }
}

export function getBannerFailed(data) {
  return {
    type: CONSTANTS.GET_BANNER_FAILED,
    data
  }
}

export function getUIWords() {
  return {
    type: CONSTANTS.GET_UI_WORDS_REQUESTED
  }
}

export function getUIWordsSuccess(data) {
  return {
    type: CONSTANTS.GET_UI_WORDS_SUCCESS,
    data
  }
}

export function changeCategory(data) {
  return {
    type: CONSTANTS.CHANGE_CATEGORY,
    data
  }
}

export function getUIWordsFailed(data) {
  return {
    type: CONSTANTS.GET_UI_WORDS_FAILED,
    data
  }
}

export function signUpUser(params) {
  return {
    type: CONSTANTS.SIGNUP_USER_REQUESTED,
    params
  }
}

export function signUpUserSuccess(data) {
  return {
    type: CONSTANTS.SIGNUP_USER_SUCCESS,
    data
  }
}

export function signUpUserFailed(data) {
  return {
    type: CONSTANTS.SIGNUP_USER_FAILED,
    data
  }
}

export function signInUser(params) {
  return {
    type: CONSTANTS.SIGNIN_USER_REQUESTED,
    params
  }
}

export function signInUserSuccess(data) {
  return {
    type: CONSTANTS.SIGNIN_USER_SUCCESS,
    data
  }
}

export function signInUserFailed(data) {
  return {
    type: CONSTANTS.SIGNIN_USER_FAILED,
    data
  }
}

export function setUserLocation(data) {
  return {
    type: CONSTANTS.SET_USER_LOCATION,
    data
  }
}

export function getCarCategory(params) {
  return {
    type: CONSTANTS.GET_CAR_CATEGORY_REQUESTED,
    params
  }
}

export function getCarCategorySuccess(data) {
  return {
    type: CONSTANTS.GET_CAR_CATEGORY_SUCCESS,
    data
  }
}

export function getCarCategoryFailed(data) {
  return {
    type: CONSTANTS.GET_CAR_CATEGORY_FAILED,
    data
  }
}

export function addCar(params) {
  return {
    type: CONSTANTS.ADD_CAR_REQUESTED,
    params
  }
}

export function addCarSuccess(data) {
  return {
    type: CONSTANTS.ADD_CAR_SUCCESS,
    data
  }
}

export function addCarFailed(data) {
  return {
    type: CONSTANTS.ADD_CAR_FAILED,
    data
  }
}

export function getCar(params) {
  return {
    type: CONSTANTS.GET_CAR_REQUESTED,
    params
  }
}

export function getCarSuccess(data) {
  return {
    type: CONSTANTS.GET_CAR_SUCCESS,
    data
  }
}

export function getCarFailed(data) {
  return {
    type: CONSTANTS.GET_CAR_FAILED,
    data
  }
}

export function getVerifyCode(params) {
  return {
    type: CONSTANTS.GET_VERIFY_CODE_REQUEST,
    params
  }
}

export function getVerifyCodeSuccess(data) {
  return {
    type: CONSTANTS.GET_VERIFY_CODE_SUCCESS,
    data
  }
}

export function getVerifyCodeFailed(data) {
  return {
    type: CONSTANTS.GET_VERIFY_CODE_FAILED,
    data
  }
}

export function clearError(data) {
  return {
    type: CONSTANTS.CLEAR_ERROR_USER,
    data
  }
}

export function clearVerifyCode(data) {
  return {
    type: CONSTANTS.CLEAR_VERIFY_CODE,
    data
  }
}

export function getExpertData(params) {
  return {
    type: CONSTANTS.GET_EXPERT_DATA_REQUESTED,
    params
  }
}

export function getExpertSuccess(data) {
  return {
    type: CONSTANTS.GET_EXPERT_DATA_SUCCESS,
    data
  }
}

export function getExpertFailed(data) {
  return {
    type: CONSTANTS.GET_EXPERT_DATA_FAILED,
    data
  }
}

export function clearExpertState(params) {
  return {
    type: CONSTANTS.CLEAR_EXPERT_STATE,
    params
  }
}

export function getTechnicianData(params) {
  return {
    type: CONSTANTS.GET_TECHNICIAN_DATA_REQUESTED,
    params
  }
}

export function getTechnicianSuccess(data) {
  return {
    type: CONSTANTS.GET_TECHNICIAN_DATA_SUCCESS,
    data
  }
}

export function getTechnicianFailed(data) {
  return {
    type: CONSTANTS.GET_TECHNICIAN_DATA_FAILED,
    data
  }
}

export function clearTechnicianState(params) {
  return {
    type: CONSTANTS.CLEAR_TECHNICIAN_STATE,
    params
  }
}

export function getCommentData(params) {
  return {
    type: CONSTANTS.GET_COMMENT_DATA_REQUESTED,
    params
  }
}

export function getCommentSuccess(data) {
  return {
    type: CONSTANTS.GET_COMMENT_DATA_SUCCESS,
    data
  }
}

export function getCommentFailed(data) {
  return {
    type: CONSTANTS.GET_COMMENT_DATA_FAILED,
    data
  }
}

export function clearCommentState(params) {
  return {
    type: CONSTANTS.CLEAR_COMMENT_STATE,
    params
  }
}

export function changePassword(params) {
  return {
    type: CONSTANTS.CHANGE_PASSWORD_REQUESTED,
    params
  }
}

export function changePasswordSuccess(data) {
  return {
    type: CONSTANTS.CHANGE_PASSWORD_SUCCESS,
    data
  }
}

export function changePasswordFailed(data) {
  return {
    type: CONSTANTS.CHANGE_PASSWORD_FAILED,
    data
  }
}

export function signOut() {
  return {
    type: CONSTANTS.SIGN_OUT
  }
}
