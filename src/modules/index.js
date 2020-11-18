import { combineReducers } from 'redux';
import mypageReducer from './Mypage';
import { loginReducer } from './Login';
import { signUpReducer } from './SignUp';
import editProfileReducer from './EditProfle';
import editPasswordReducer from './EditPassword';
import viewInProgressReducer from './viewInProgress';
import viewSuggestedReducer from './viewSuggested';
import reportModalReducer from './reportModal';

const rootReducer = combineReducers({
	mypage: mypageReducer,
	editpage: editProfileReducer,
	editPassword: editPasswordReducer,
	viewInProgress: viewInProgressReducer,
	viewSuggested: viewSuggestedReducer,
	reportModal: reportModalReducer,
	signUpReducer,
	loginReducer,
});

export default rootReducer;
