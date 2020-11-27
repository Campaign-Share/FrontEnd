export const GET_CAMPAIGN_LIST = 'viewSuggsted/GET_CAMPAIGN_LIST';
export const CHANGE_SORT_BY = 'viewSuggested/CHANGE_SORT_BY';
export const MODAL_ON = 'viewSuggested/MODAL_ON';
export const MODAL_OFF = 'viewSuggested/MODAL_OFF';

export const getCampaignList = (payload) => ({
	type: GET_CAMPAIGN_LIST,
	payload,
});
export const changeSortBy = (payload) => ({
	type: CHANGE_SORT_BY,
	payload,
});
export const modalOn = (payload) => ({
	type: MODAL_ON,
	payload,
});
export const modalOff = () => ({
	type: MODAL_OFF,
});

const initialState = {
	onModal: false,
	modalCampaign: '',
	sortBy: 'create-time',
	campaigns: [],
};

export default function viewSuggestedReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CAMPAIGN_LIST:
			return {
				...state,
				campaigns: state.campaigns.concat(action.payload.campaigns),
			};
		case CHANGE_SORT_BY:
			return {
				...state,
				sortBy: action.payload,
				campaigns: [],
			};
		case MODAL_ON:
			return {
				...state,
				onModal: true,
				modalCampaign: action.payload,
			};
		case MODAL_OFF:
			return {
				...state,
				onModal: false,
				modalCampaign: '',
			};
		default:
			return state;
	}
}
