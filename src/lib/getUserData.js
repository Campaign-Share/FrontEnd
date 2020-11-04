import { requestApi, requestApiWithAccessToken } from '../APIrequest';

const getUserInfoFromAPI = async () => {
	return await requestApiWithAccessToken(
		'/v1/users/uuid/user-456867417293',
		{},
		{},
		'get',
	);
};

export default getUserInfoFromAPI