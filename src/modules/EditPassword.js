const GET_USER_INFO = 'EditPassword/GET_USER_INFO';

const editPasswordReducerState = {
	ID: '',
	nick_name: '',
	userImg: '',
	user_uuid: '',
	userData: {},
};

export const getUserInfo = (payload) => ({
	type: GET_USER_INFO,
	payload,
});

const editPasswordReducer = (state = editPasswordReducerState, action) => {
	switch (action.type) {
		case GET_USER_INFO: {
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
export default editPasswordReducer;
