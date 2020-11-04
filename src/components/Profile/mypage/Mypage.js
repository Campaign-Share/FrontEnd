import React, { useCallback, useEffect } from 'react';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import profileImg from '../../../assets/img/profile.png';
import * as S from './style.js';
import CampaignHowMuch from './CampaignHowMuch/CampaignHowMuch.js';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Mypage = () => {
	const userInfo = useSelector((store) => store.mypage);
	const history = useHistory();
	const logout = useCallback(() => {
		if (confirm('로그아웃 하시겠습니까?')) history.push('/introduce');
	}, []);
	const gotoEditProfile = useCallback(() => {
		history.push(`/editprofile`);
	}, []);
	console.log(userInfo.user_uuid);
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
					<S.UserDataBoxWrap>
						<S.UserdataBox>
							<S.UserImgBox>
								<S.UserImg src={profileImg} />
							</S.UserImgBox>
							<S.UserId>ID : {userInfo.ID}</S.UserId>
							<S.UserName>NickName: {userInfo.nick_name}</S.UserName>
							<S.MarginBox></S.MarginBox>
							<S.Logout onClick={logout}>로그아웃</S.Logout>
						</S.UserdataBox>
					</S.UserDataBoxWrap>
					<S.UserCampaignBox>
						<S.UserCampaign>
							<CampaignHowMuch></CampaignHowMuch>
							<S.GraphBox>
								<S.StickBox>
									<S.Stick color={'#ABC9C7'} />
									<S.Stick color={`#61A5B3`} />
									<S.Stick color={`#78BBA8`} />
								</S.StickBox>
								<S.Line />
							</S.GraphBox>
						</S.UserCampaign>
					</S.UserCampaignBox>
				</S.MainInfo>
			</S.Body>
		</S.Container>
	);
};

export default Mypage;
