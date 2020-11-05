import { requestApi, requestApiWithAccessToken } from '../APIrequest';

const getUserInfoFromAPI = async () => {
	return await requestApiWithAccessToken(
		'/v1/users/uuid/user-427388298332',
		{},
		{},
		'get',
	);
};

export default getUserInfoFromAPI