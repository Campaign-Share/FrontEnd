import { requestApi, requestApiWithAccessToken } from '../APIrequest';

const getUserInfoFromAPI = async () => {
	return await requestApiWithAccessToken(
		'/v1/users/uuid/user-106808231327',
		{},
		{},
		'get',
	);
};

export default getUserInfoFromAPI;
