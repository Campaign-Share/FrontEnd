import axios from 'axios';

const BASE_URL = 'http://15.164.206.37:80';
const testToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQzOTY4ODQsImV4cCI6MTYwNDQ4MzI4NCwidXVpZCI6InVzZXItNDI5OTc2MzQ2ODM5IiwidHlwZSI6ImFjY2Vzc190b2tlbiJ9.oe_jKqWbwIraZvFu4OSuXxfQJRza5A8pU66rHoCMW3A`;
//local에서 빼는 식으로 해야할 듯
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
		const res = await requestApi(
			url,
			body,
			{
				Authorization: testToken,
				...header,
			},
			method,
		);
		return res;
	} catch (err) {
		// switch(err.response.status) {
		// }
	}
};
