import { combineReducers } from 'redux'
import { reducer as count } from './counter';
 
const counterApp = combineReducers({
  count
});
 
export default counterApp;