const ON_MODAL = 'ON_MODAL';
const OFF_MODAL = 'OFF_MODAL';
const LIST = 'LIST';
const SEARCH = 'SEARCH';
const CAMPAIGN_ON = 'CAMPAIGN';
const CAMPAIGN_OFF = 'CAMPAIGN_OFF';

export const campaignList = (payload) => ({
	type: LIST,
	payload,
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

export const on_modal = (payload) => ({
	type: ON_MODAL,
	payload,
});

export const off_modal = () => ({
	type: OFF_MODAL,
});
const initialState = {
	modal: false,
	isCampaign: false,
	modalCampaign: '',
	campaigns: [],
};

export const campaignListReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST:
			return {
				...state,
				campaigns: action.payload,
			};
		case ON_MODAL:
			return {
				...state,
				modal: true,
				modalCampaign: action.payload,
			};
		case OFF_MODAL:
			return {
				...state,
				modal: false,
				modalCampaign: '',
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
