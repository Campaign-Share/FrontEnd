const CHANGE_TITLE = 'suggest/CHANGE_TITLE';
const SET_IMAGE = 'suggest/SET_IMAGE';
const CHANGE_EXPLANATION = 'suggest/CHANGE_EXPLANATION';

export const changeTitle = (title) => ({
	type: CHANGE_TITLE,
	title,
});
export const setImage = (image) => ({
	type: SET_IMAGE,
	img,
});
export const changeExplanation = (explanation) => ({
	type: CHANGE_EXPLANATION,
	explanation,
});

const initialState = {
	title: '',
	image: '',
	explanation: '',
};

export default function suggestReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_TITLE:
			return {
				...state,
				title: action.title,
			};
		case SET_IMAGE:
			return {
				...state,
				image: action.image,
			};
		case CHANGE_EXPLANATION:
			return {
				...state,
				explanation: action.explanation,
			};
		default:
			return state;
	}
}
