const SIGNUP_EMAIL = 'SIGNUP_EMAIL';
const SIGNUP_INPUT = 'SIGNUP_INPUT';
const SIGNUP_AUTH = 'SIGNUP_AUTH';
const SIGNUP_IMG = 'SIGNUP_IMG';

export const signUpEmail = (email) => ({
	type: SIGNUP_EMAIL,
	email,
});

export const signUpInput = ({ name, nickname, id, password }) => ({
	type: SIGNUP_INPUT,
	payload: {
		name: name,
		nickname: nickname,
		id: id,
		password: password,
	},
});

export const signUpAuth = (authCode) => ({
	type: SIGNUP_AUTH,
	authCode,
});

export const signUpImg = (img) => ({
	type: SIGNUP_IMG,
	img,
});

const signUpState = {
	email: '',
	authCode: '',
	data: {
		name: '',
		nickname: '',
		id: '',
		password: '',
	},
	img: '',
};

export const signUpReducer = (state = signUpState, action) => {
	switch (action.type) {
		case SIGNUP_EMAIL:
			return { ...state, email: action.email };
		case SIGNUP_INPUT:
			return {
				...state,
				data: {
					name: action.payload.name,
					nickname: action.payload.nickname,
					id: action.payload.id,
					password: action.payload.password,
				},
			};
		case SIGNUP_IMG:
			return {
				...state,
				img: action.img,
			};
		case SIGNUP_AUTH:
			return {
				...state,
				authCode: action.authCode,
			};
		default:
			return state;
	}
};
