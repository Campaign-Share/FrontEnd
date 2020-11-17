import { combineReducers } from 'redux';
import mypageReducer from './Mypage';
import { loginReducer } from './Login';
import { signUpReducer } from './SignUp';
import editProfileReducer from './EditProfle';
import editPasswordReducer from './EditPassword';
import { campaignListReducer } from './CampaignList';
const rootReducer = combineReducers({
	mypage: mypageReducer,
	editpage: editProfileReducer,
	editPassword: editPasswordReducer,
	signUpReducer,
	loginReducer,
	list: campaignListReducer,
});

export default rootReducer;
