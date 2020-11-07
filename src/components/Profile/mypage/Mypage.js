import React, { useCallback, useEffect } from 'react';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import * as S from './style.js';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserProfileInfo from './userProfileInfo/UserProfileInfo';
import UserCampaignInfo from './userCampaignInfo/UserCampaignInfo';

const Mypage = () => {
	const userInfo = useSelector((store) => store.mypage);
	const history = useHistory();
	const gotoEditProfile = useCallback(() => {
		history.push(`/editprofile`);
	}, []);
	return (
		<S.Container>
			<SideBar></SideBar>
			<S.Body>
				<S.HeaderEnd>
					<S.EditProfileBtn onClick={gotoEditProfile}>
						프로필 설정
					</S.EditProfileBtn>
				</S.HeaderEnd>
				<S.MainInfo>
					<UserProfileInfo userInfo={userInfo}/>
					<UserCampaignInfo userInfo={userInfo}/>
				</S.MainInfo>
			</S.Body>
		</S.Container>
	);
};

export default Mypage;
