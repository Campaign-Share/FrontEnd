import React, { useCallback, useEffect } from 'react';
import { getMypageInfo } from '../../modules/Mypage';
import { useSelector, useDispatch } from 'react-redux';
import Mypage from '../../components/Profile/mypage/Mypage';
import getUserInfoFromAPI from '../../lib/getUserData';

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
