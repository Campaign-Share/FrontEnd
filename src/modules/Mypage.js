const GET_MYPAGE_INFO = 'mypage/GET_MYPAGE_INFO';

const mypageReducerState = {
	ID: '',
	nick_name: '',
	userImg: '',
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
			};
		}
		default: {
			return state;
		}
	}
};
export default mypageReducer;
