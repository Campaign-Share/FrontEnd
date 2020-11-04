import { combineReducers } from 'redux';
import mypageReducer from './Mypage';
const rootReducer = combineReducers({
	mypage: mypageReducer,
});

export default rootReducer;
