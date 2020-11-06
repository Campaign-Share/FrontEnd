const LOGIN = 'LOGIN';
const LOGIN_DATA = 'LOGIN_DATA';

export const login = (user_id, user_pw) => ({
	type: LOGIN,
	payload: {
		user_id,
		user_pw,
	},
});

export const loginData = (user_uuid, access_token) => ({
	type: LOGIN_DATA,
	payload: {
		user_uuid,
		access_token,
	},
});

const loginState = {
	user_id: '',
	user_pw: '',
	user_uuid: '',
	access_token: '',
};

export const loginReducer = (state = loginState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user_id: action.payload.user_id,
				user_pw: action.payload.user_pw,
			};
		case LOGIN_DATA:
			return {
				...state,
				user_uuid: action.payload.user_uuid,
				access_token: action.payload.access_token,
			};
		default:
			return state;
	}
};
