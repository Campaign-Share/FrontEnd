import { combineReducers } from 'redux';
import mypageReducer from './Mypage';
import editProfileReducer from './EditProfle';
import editPasswordReducer from './EditPassword';
const rootReducer = combineReducers({
	mypage: mypageReducer,
	editpage : editProfileReducer,
	editPassword : editPasswordReducer,
});

export default rootReducer;
