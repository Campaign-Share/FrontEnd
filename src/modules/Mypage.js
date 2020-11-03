const GET_MYPAGE_INFO = 'mypage/GET_MYPAGE_INFO';

const mypageReducerState = {
	ID: '',
	nick_name: '',
	userImg: '',
	userData : {}
};

export const getMypageInfo = (payload) => ({
	type: GET_MYPAGE_INFO,
	payload,
});

const mypageReducer = (state = mypageReducerState, action) => {
	switch (action.type) {
		case GET_MYPAGE_INFO: {
			return({
				...state,
			ID: action.payload
			})
			// return action.payload;
		}
		default: {
			return state;
		}
	}
};
export default mypageReducer;
