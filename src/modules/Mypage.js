const GET_MYPAGE_INFO = 'mypage/GET_MYPAGE_INFO';

const mypageReducerState = {
	ID: '',
	nick_name: '',
	userImg: '',
	user_uuid: '',
	userData: {},
};

export const getMypageInfo = (payload) => ({
	type: GET_MYPAGE_INFO,
	payload,
});

const mypageReducer = (state = mypageReducerState, action) => {
	switch (action.type) {
		case GET_MYPAGE_INFO: {
			return {
				...state,
				nick_name: action.payload.nick_name,
				ID: action.payload.user_id,
				user_uuid:action.payload.user_uuid,
				userData: action.payload
			};
		}
		default: {
			return state;
		}
	}
};
export default mypageReducer;
