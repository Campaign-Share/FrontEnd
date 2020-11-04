import React, { useCallback, useEffect } from 'react';
import { getMypageInfo } from '../../modules/Mypage';
import { useSelector, useDispatch } from 'react-redux';
import Mypage from '../../components/Profile/mypage/Mypage';
import axios from 'axios';
import { requestApi, requestApiWithAccessToken } from '../../APIrequest';

const testUUID = 'user-429976346839';
const testToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQzOTY4ODQsImV4cCI6MTYwNDQ4MzI4NCwidXVpZCI6InVzZXItNDI5OTc2MzQ2ODM5IiwidHlwZSI6ImFjY2Vzc190b2tlbiJ9.oe_jKqWbwIraZvFu4OSuXxfQJRza5A8pU66rHoCMW3A`;
const getUserInfoFromAPI = async () => {
	return await requestApiWithAccessToken(
		'/v1/users/uuid/user-429976346839',
		{},
		{},
		'get',
	).then((res) => res);
};
const MypageContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getUserInfoFromAPI().then((res) => {
			dispatch(getMypageInfo(res.data));
		});
	}, []);

	return <Mypage />;
};

export default MypageContainer;
