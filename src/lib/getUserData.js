import { requestApi, requestApiWithAccessToken } from '../APIrequest';

const getUserInfoFromAPI = async () => {
	return await requestApiWithAccessToken(
		`/v1/users/uuid/${localStorage.getItem('user_uuid')}`,
		{},
		{},
		'get',
	);
};

export default getUserInfoFromAPI;
