const MODAL_ON = 'inProgressJoin/MODAL_ON';
const MODAL_OFF = 'inProgressJoin/MODAL_OFF';

export const modalOn = () => ({
	type: MODAL_ON,
});
export const modalOff = () => ({
	type: MODAL_OFF,
});

const initialState = {
	onModal: false,
};

export default function inProgressJoinReducer(state = initialState, action) {
	switch (action.type) {
		case MODAL_ON: {
			return {
				...state,
				onModal: true,
			};
		}
		case MODAL_OFF: {
			return {
				...state,
				onModal: false,
			};
		}
		default:
			return state;
	}
}
