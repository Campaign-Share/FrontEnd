const MODAL = 'MODAL';
const LIST = 'LIST';
const SEARCH = 'SEARCH';
const USER = 'USER';

export const campaignList = (payload) => ({
	type: LIST,
	payload,
});

export const campaignModal = () => ({
	type: MODAL,
});

export const campaignSearch = (payload) => ({
	type: SEARCH,
	payload,
});

export const user = (payload) => ({
	type: USER,
	payload,
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
	user_uuids: [{ user_uuid: '' }],
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
		case SEARCH: {
			return {
				...state,
				campaigns: action.payload,
			};
		}
		case USER: {
			return {
				...state,
				user_uuids: action.payload,
			};
		}
		default:
			return state;
	}
};
