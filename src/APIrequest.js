import axios from 'axios';

const BASE_URL = 'http://15.164.206.37:80';


export const requestApi = async (url, body, header, method) => {
	try {
		const res = await axios({
			url: BASE_URL + url,
			data: body,
			headers: header,
			method,
		});
		return res;
	} catch (err) {
		console.log(err.response.status);
	}
};
export const requestApiWithAccessToken = async (url, body, header, method) => {
	try {
		const accessToken = localStorage.getItem('access_token');
		const res = await requestApi(
			url,
			body,
			{
				Authorization: accessToken,
				...header,
			},
			method,
		);
		return res;
	} catch (err) {
	
	}
};
