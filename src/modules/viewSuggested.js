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
export const modalOn = () => ({
	type: MODAL_ON,
});
export const modalOff = () => ({
	type: MODAL_OFF,
});

const initialState = {
	onModal: false,
	sortBy: 'create-time',
	campaigns: [
		{
			campaign_uuid: 'campaign-052138654235',
			user_uuid: 'user-619165338425',
			state: 'pending',
			title: '첫번째',
			sub_title: 'ㅎㅇㅎㅇ',
			introduction: '1111',
			participation: '1 1',
			start_date: '2020-11-05',
			end_date: '2020-11-07',
			post_uri: 'campaign/posters/campaign-052138654235',
			campaign_tags: ['adsadsadsadsadsads', 'qweqwer', 'qewr', 'qwe'],
			agree_number: 3,
			disagree_number: 2,
			participation_number: 0,
		},
		{
			campaign_uuid: 'campaign-11512361761',
			user_uuid: 'user-23512512342',
			state: 'pending',
			title: '두번째',
			sub_title: null,
			introduction: '2222',
			participation: '2 2',
			start_date: '2020-11-05',
			end_date: '2020-11-07',
			post_uri: 'campaign/posters/campaign-052138654235',
			campaign_tags: ['adsadsadsadsadsads', 'qweqwer', 'qewr', 'qwe'],
			agree_number: 3,
			disagree_number: 2,
			participation_number: 0,
		},
		{
			campaign_uuid: 'campaign-12314123',
			user_uuid: 'user-1512312314123',
			state: 'pending',
			title: '세번째',
			sub_title: null,
			introduction: '3333',
			participation: '3 3',
			start_date: '2020-11-05',
			end_date: '2020-11-07',
			post_uri: 'campaign/posters/campaign-052138654235',
			campaign_tags: ['adsadsadsadsadsads', 'qweqwer', 'qewr', 'qwe'],
			agree_number: 3,
			disagree_number: 2,
			participation_number: 0,
		},
		{
			campaign_uuid: 'campaign-123141511123',
			user_uuid: 'user-15123123141312123',
			state: 'pending',
			title: '네번재',
			sub_title: null,
			introduction: '4444',
			participation: '4 4',
			start_date: '2020-11-05',
			end_date: '2020-11-07',
			post_uri: 'campaign/posters/campaign-052138654235',
			campaign_tags: ['adsadsadsadsadsads', 'qweqwer', 'qewr', 'qwe'],
			agree_number: 3,
			disagree_number: 2,
			participation_number: 0,
		},
	],
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
				sortBy: action.payload,
			};
		case MODAL_ON:
			return {
				...state,
				onModal: true,
			};
		case MODAL_OFF:
			return {
				...state,
				onModal: false,
			};
		default:
			return state;
	}
}
