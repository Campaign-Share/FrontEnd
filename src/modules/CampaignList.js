const MODAL = 'MODAL';
const LIST = 'LIST';

export const campaignList = (payload) => ({
	type: LIST,
	payload,
});

export const campaingModal = () => ({
	type: MODAL,
});

const initialState = {
	modal: false,
	campaigns: [
		{
			campaign_uuid: '',
			user_uuid: '',
			title: '',
			sub_title: '',
			introdiction: '',
			participation: '',
			start_data: '',
			end_data: '',
			campaign_tags: '',
			agree_number: 0,
			disagree_number: 0,
			participation_number: 0,
		},
	],
};

export const campaignListReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST:
			return {
				...state,
				campaigns: action.payload,
			};
		case MODAL:
			return {
				...state,
				modal: true,
			};

		default:
			return state;
	}
};
