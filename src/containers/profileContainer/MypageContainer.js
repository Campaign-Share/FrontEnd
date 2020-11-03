import React, { useCallback } from 'react';
import {getMypageInfo} from '../../modules/Mypage';
import {useSelector, useDispatch} from 'react-redux';
import Mypage from '../../components/Profile/mypage/Mypage';

const MypageContainer = () => {
	const userInfoStore = useSelector(store => store.mypageReducer);
	const dispatch = useDispatch();
	const getUserInfo = useCallback(()=>{dispatch(getMypageInfo('wqew'))},[]);
	return <Mypage getUserInfo={getUserInfo} userInfoStore={userInfoStore}/>;
};
export default MypageContainer;
