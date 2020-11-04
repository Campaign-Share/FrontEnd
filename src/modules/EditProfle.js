const GET_EDITPROFILE_INFO = 'editprofile/GET_EDITPROFILE_INFO';

const editProfileReducerState = {
	ID: '',
	nick_name: '',
	userImg: '',
	user_uuid: '',
	userData: {},
};

export const geteditProfileInfo = (payload) => ({
	type: GET_EDITPROFILE_INFO,
	payload,
});

const editProfileReducer = (state =  editProfileReducerState, action) => {
	switch (action.type) {
		case GET_EDITPROFILE_INFO: {
			return {
				...state,
				nick_name: action.payload.nick_name,
				ID: action.payload.user_id,
				user_uuid:action.payload.user_uuid,
				userData: action.payload
			};
		}
		default: {
			return state;
		}
	}
};
export default editProfileReducer;
