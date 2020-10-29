import React from 'react';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import profileImg from '../../../assets/img/profile.png';
import * as S from './style.js';
import CampaignHowMuch from './campaignHowMuch/CampaignHowMuch.js';
const Mypage = () => {
	return (
		<S.Container>
			<SideBar></SideBar>
			<S.Body>
				<S.HeaderEnd>
					<S.EditProfileBtn>프로필 설정</S.EditProfileBtn>
				</S.HeaderEnd>
				<S.MainInfo>
					<S.UserDataBoxWrap>
						<S.UserdataBox>
							<S.UserImgBox>
								<S.UserImg src={profileImg} />
							</S.UserImgBox>
							<S.UserId>ID : coronaout</S.UserId>
							<S.UserName>NickName: 사회적 거리두기</S.UserName>
							<S.MarginBox></S.MarginBox>
							<S.Logout>로그아웃</S.Logout>
						</S.UserdataBox>
					</S.UserDataBoxWrap>
					<S.UserCampaignBox>
						<S.UserCampaign>
							<CampaignHowMuch></CampaignHowMuch>
							<S.GraphBox>
								<S.StickBox>
									<S.Stick color={'#ABC9C7'}/>
									<S.Stick color={`#61A5B3`}/>
									<S.Stick color={`#78BBA8`}/>
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
