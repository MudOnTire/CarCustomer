import { combineReducers } from 'redux';

import serviceReducer from 'src/redux/reducers/serviceReducer';
import userReducer from 'src/redux/reducers/userReducer'
import extraReducer from 'src/redux/reducers/extraReducer'
import expertReducer from './reducers/expertReducer'
import technicianReducer from './reducers/technicianReducer'
import commentReducer from './reducers/commentReducer';

const appReducer = combineReducers({
  service: serviceReducer,
  user: userReducer,
  extra: extraReducer,
  expert: expertReducer,
  technician: technicianReducer,
  comment: commentReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
