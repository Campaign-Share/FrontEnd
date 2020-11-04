const SIGNUP_EMAIL = 'SIGNUP_EMAIL';
const SIGNUP_INPUT = 'SIGNUP_INPUT';
const SIGNUP_IMG = 'SIGNUP_IMG';

export const signUpEmail = (email) => ({
	type: SIGNUP_EMAIL,
	email,
});

export const signUpInput = ({ name, nickname, id, password, userImg }) => ({
	type: SIGNUP_INPUT,
	payload: {
		name: '',
		nickname: '',
		id: '',
		password: '',
	},
});

export const signUpImg = (img) => ({
	type: SIGNUP_IMG,
	img,
});

const signUpState = {
	email: '',
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
			return ({ ...state, email: action.email });
		case SIGNUP_INPUT:
			return ({
				...state,
				data: {
					name: action.payload.name,
					nickname: action.payload.nickname,
					id: action.payload.id,
					password: action.payload.password,
				},
			});
		case SIGNUP_IMG:
			return ({
				...state,
				img: action.img,
			});
		default: return state;
	}
};
