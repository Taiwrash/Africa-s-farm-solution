import { combineReducers } from 'redux';
import userDetails from './userDetails';

const allReducers = combineReducers({
  userDetails,
});

export default allReducers;
