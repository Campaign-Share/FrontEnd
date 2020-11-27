const MODAL = 'MODAL';
const LIST = 'LIST';
const SEARCH = 'SEARCH';
const USER = 'USER';
const CAMPAIGN_ON = 'CAMPAIGN';
const CAMPAIGN_OFF = 'CAMPAIGN_OFF';

export const campaignList = (payload) => ({
	type: LIST,
	payload,
});

export const onModal = () => ({
	type: MODAL,
});

export const campaignSearch = (payload) => ({
	type: SEARCH,
	payload,
});

export const campaignOn = () => ({
	type: CAMPAIGN_ON,
});

export const campaignOff = () => ({
	type: CAMPAIGN_OFF,
});

const initialState = {
	modal: false,
	isCampaign: false,
	modalCampaign: '',
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
			nick_name: '',
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
		case SEARCH: {
			return {
				...state,
				campaigns: action.payload,
			};
		}
		case CAMPAIGN_ON: {
			return {
				...state,
				isCampaign: false,
			};
		}
		case CAMPAIGN_OFF: {
			return {
				...state,
				isCampaign: true,
			};
		}
		default:
			return state;
	}
};
