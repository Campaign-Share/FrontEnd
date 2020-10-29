import React from 'react';
import * as S from './style.js';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import inputImg from '../../../assets/img/inputImg.png';
const EditProfile = () => {
	return (
		<S.Container>
			<SideBar></SideBar>
			<S.MainContainer>
				<S.HeaderEnd>
					<S.Logout>로그아웃</S.Logout>
				</S.HeaderEnd>
				<S.Body>
					<S.EditBox>
						<S.Title>프로필 설정</S.Title>
						<S.line></S.line>
						<S.UserImgBox>
							<S.UserImg src={inputImg}></S.UserImg>
						</S.UserImgBox>
						<S.NameInput placeholder={'jj8747'}></S.NameInput>
						<S.BtnBox>
							<S.EditButton>완료</S.EditButton>
						</S.BtnBox>
					</S.EditBox>
				</S.Body>
			</S.MainContainer>
		</S.Container>
	);
};
export default EditProfile;
