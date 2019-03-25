import { call, put, takeLatest, select } from 'redux-saga/effects'
import * as CONSTANTS from 'src/redux/constants'
import * as axios from 'axios';
import * as ACTIONS from 'src/redux/actions'
import urls from 'data/url'
import I18n from 'i18n'
import { Geolocation } from 'react-native-baidu-map'
import {AsyncStorage} from 'react-native'

function postRequest(url, params) {

  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  let source = axios.CancelToken.source();
  setTimeout(() => {
      source.cancel();
  }, 5000);
  
  return axios.post(url, formBody, {timeout: 3000, cancelToken: source.token, headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}})
}

function postFormData(url, params) {
  return axios.post(url, params, {headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'}})
}

async function getDistances(data, state) {
  var city = state.service.city;
  var userLocation = state.user.location;

  for(var i = 0; i < data.length; i ++) {
    var address = data[i].address;
    address = city.concat(address)
    await Geolocation.geocode(city, address)
    .then((location) => {
      var R = 6371;
      var φ1 = userLocation.latitude * Math.PI / 180;
      var φ2 = location.latitude * Math.PI / 180;
      var Δφ = (location.latitude-userLocation.latitude) * Math.PI / 180;
      var Δλ = (location.longitude-userLocation.longitude) * Math.PI / 180;
  
      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var dist = Math.abs(R * c)
      data[i].distance = dist;

      return data[i];
    })
  }
  
  return data
  console.error("")
}

export function* getServiceRequest(action) {
  try {
    const state = yield select();
    action.params['city'] = state.service.city;
    action.params['searchText'] = state.service.searchText;
    action.params['latitude'] = state.user.location.latitude;
    action.params['longitude'] = state.user.location.longitude;
    const {data} = yield call(postRequest, urls.services, action.params)

//    const dataWithDistance = yield call(getDistances, data, state);

    yield put(ACTIONS.getServiceSuccess(data))
  } catch(error) {
    yield put(ACTIONS.getServiceFailed(I18n.t('networkError')))
  }
}

export function* getBannerRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.advertisement, action.params)
    yield put(ACTIONS.getBannerSuccess(data))
  } catch(error) {
    yield put(ACTIONS.getBannerFailed(I18n.t('networkError')))
  }
}

export function* signUpUserRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.signup, action.params)
    if(data.error) {
      yield put(ACTIONS.signUpUserFailed(data.error))
    } else {

      try {
        var userInfo = {
          userName: data.userName,
          phoneNumber: data.phoneNumber,
          signedIn: true
        }

        yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
      } catch (error) {
  
      }

      yield put(ACTIONS.signUpUserSuccess(data))
    }
  } catch(error) {
    yield put(ACTIONS.signUpUserFailed(I18n.t('networkError')))
  }
}

export function* signInUserRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.login, action.params)
    
    if(data.error) {
      yield put(ACTIONS.signInUserFailed(data.error))  
    } else {

      try {
        var userInfo = {
          userName: data.userName,
          phoneNumber: data.phoneNumber,
          signedIn: true
        }

        yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
      } catch (error) {
  
      }

      yield put(ACTIONS.signInUserSuccess(data))
    }
  } catch(error) {
    yield put(ACTIONS.signInUserFailed(I18n.t('networkError')))
  }
}

export function* signOutRequest(action) {
  try {
      var userInfo = {
        userName: '',
        phoneNumber: '',
        signedIn: false
      }

      yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
  } catch(error) {
    
  }
}

export function* saveServiceRequest(action) {
  try {
    const {data} = yield call(postFormData, urls.addComment, action.params)
    yield put(ACTIONS.saveServiceSuccess(data))
  } catch(error) {
    yield put(ACTIONS.saveServiceFailed(I18n.t('networkError')))
  }
}

export function* changeLabelRequest(action) {
  try {
    yield call(postRequest, urls.changeLabel, action.params)
    const state = yield select();
    const newService = state.service.serviceData.map((item) => {
      if(item.company === action.params.serviceName) {
        if(action.params.selected === true) {
          item.label.push(action.params.index)
        } else {
          const label = item.label.filter((itr) => {
            return itr != action.params.index;
          })
          item.label = label;
        }
      }
      return item;
    })

    yield put(ACTIONS.getServiceSuccess(newService))
  } catch(error) {

  }
}

export function* getUIWordsRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.getUIWords, [])
    yield put(ACTIONS.getUIWordsSuccess(data.response))
  } catch(error) {
    yield put(ACTIONS.getUIWordsFailed(I18n.t('networkError')))
  }
}

export function* getCarCategoryRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.getCarCategory, action.params)
    yield put(ACTIONS.getCarCategorySuccess(data.response))
  } catch(error) {
    yield put(ACTIONS.getCarCategoryFailed(I18n.t('networkError')))
  }
}

export function* addCarRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.addCar, action.params)
    yield put(ACTIONS.addCarSuccess(data.response))
  } catch(error) {
    yield put(ACTIONS.addCarFailed(I18n.t('networkError')))
  }
}

export function* getCarRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.getCar, action.params)
    yield put(ACTIONS.getCarSuccess(data.response))
  } catch(error) {
    yield put(ACTIONS.getCarFailed(I18n.t('networkError')))
  }
}

export function* getVerifyCodeRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.getVerifyCode, action.params)

    if(data.error) {
      yield put(ACTIONS.getVerifyCodeFailed(data.error))
    } else {
      yield put(ACTIONS.getVerifyCodeSuccess(data.verifyCode))
    }
  } catch(error) {
    yield put(ACTIONS.getVerifyCodeFailed(I18n.t('networkError')))
  }
}

export function* getExpertDataRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.expert, action.params)
    
    if(data.error) {
      yield put(ACTIONS.getExpertFailed(data.error))
    } else {
      yield put(ACTIONS.getExpertSuccess(data.response))
    }
  } catch(error) {
    yield put(ACTIONS.getExpertFailed(I18n.t('networkError')))
  }
}

export function* getTechnicianDataRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.technician, action.params)
    
    if(data.error) {
      yield put(ACTIONS.getTechnicianFailed(data.error))
    } else {
      yield put(ACTIONS.getTechnicianSuccess(data.response))
    }
  } catch(error) {
    yield put(ACTIONS.getTechnicianFailed(I18n.t('networkError')))
  }
}

export function* getCommentRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.getComment, action.params)

    if(data.error) {
      yield put(ACTIONS.getCommentFailed(data.error))
    } else {
      yield put(ACTIONS.getCommentSuccess(data.response))
    }
  } catch(error) {
    yield put(ACTIONS.getCommentFailed(I18n.t('networkError')))
  }
}

export function* changePasswordRequest(action) {
  try {
    const {data} = yield call(postRequest, urls.changePassword, action.params)

    if(data.error) {
      yield put(ACTIONS.changePasswordFailed(data.error))
    } else {
      yield put(ACTIONS.changePasswordSuccess(data))
    }
  } catch(error) {
    yield put(ACTIONS.changePasswordFailed(error))
  }
}

export default function* saga() {
  yield takeLatest(CONSTANTS.GET_SERVICE_REQUESTED, getServiceRequest)
  yield takeLatest(CONSTANTS.GET_BANNER_REQUESTED, getBannerRequest)
  yield takeLatest(CONSTANTS.SIGNUP_USER_REQUESTED, signUpUserRequest)
  yield takeLatest(CONSTANTS.SIGNIN_USER_REQUESTED, signInUserRequest)
  yield takeLatest(CONSTANTS.SIGN_OUT, signOutRequest)
  yield takeLatest(CONSTANTS.SAVE_SERVICE_REQUESTED, saveServiceRequest)
  yield takeLatest(CONSTANTS.CHANGE_LABEL, changeLabelRequest)
  yield takeLatest(CONSTANTS.GET_UI_WORDS_REQUESTED, getUIWordsRequest)
  yield takeLatest(CONSTANTS.GET_CAR_CATEGORY_REQUESTED, getCarCategoryRequest)
  yield takeLatest(CONSTANTS.ADD_CAR_REQUESTED, addCarRequest)
  yield takeLatest(CONSTANTS.GET_CAR_REQUESTED, getCarRequest)
  yield takeLatest(CONSTANTS.GET_VERIFY_CODE_REQUEST, getVerifyCodeRequest)
  yield takeLatest(CONSTANTS.GET_EXPERT_DATA_REQUESTED, getExpertDataRequest)
  yield takeLatest(CONSTANTS.GET_TECHNICIAN_DATA_REQUESTED, getTechnicianDataRequest)
  yield takeLatest(CONSTANTS.GET_COMMENT_DATA_REQUESTED, getCommentRequest)
  yield takeLatest(CONSTANTS.CHANGE_PASSWORD_REQUESTED, changePasswordRequest)
}