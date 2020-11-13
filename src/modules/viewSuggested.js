export const GET_CAMPAIGN_LIST = 'viewSuggsted/GET_CAMPAIGN_LIST';
export const CHANGE_SORT_BY = 'viewSuggested/CHANGE_SORT_BY';

export const getCampaignList = (payload) => ({
	type: GET_CAMPAIGN_LIST,
	payload,
});
export const changeSortBy = (payload) => ({
	type: CHANGE_SORT_BY,
	payload,
});

const initialState = {
	sortBy: 'create-time',
	campaigns: [],
};

export default function viewSuggestedReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CAMPAIGN_LIST:
			return {
				...state,
				campaigns: action.payload.campaigns,
			};
		case CHANGE_SORT_BY:
			return {
				...state,
				sortBy: action.payload.sortBy,
			};
		default:
			return state;
	}
}
