import { combineReducers } from 'redux';
import mypageReducer from './Mypage';
import editProfileReducer from './EditProfle';
const rootReducer = combineReducers({
	mypage: mypageReducer,
	editpage : editProfileReducer,
});

export default rootReducer;
