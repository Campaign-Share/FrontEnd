import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style.js';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import inputImg from '../../../assets/img/inputImg.png';
import { requestApiWithAccessToken } from '../../../APIrequest';
import { useHistory } from 'react-router-dom';
import { UserName } from '../mypage/style.js';
import { useSelector } from 'react-redux';
const EditProfile = () => {
	const [newName, setNewName] = useState(nick_name);
	const [userImg, setUserImg] = useState();

	const history = useHistory();

	const { uuid, nick_name } = useSelector((store) => {
		return {
			uuid: store.editpage.user_uuid,
			nick_name: store.editpage.nick_name,
		};
	});

	useEffect(() => {
		setNewName(nick_name);
	}, [nick_name]);

	const inputNewName = useCallback((e) => {
		setNewName(e.target.value);
	}, []);
	
	const changeName = useCallback(() => {
		const formData = new FormData();
		formData.append('nickName', newName);
		formData.append('image', userImg);
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}`,
			formData,
			{},
			'patch',
		).then((res) => {
			res ? alert('정보가 변경되었습니다.') : console.log(err);
		});
	}, [newName, userImg]);
	const goToChangePassword = useCallback(() => {
		history.push();
	}, []);
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
						<S.NameInput value={newName} onChange={inputNewName}></S.NameInput>
						<S.BtnBox>
							<S.EditButton onClick={changeName}>완료</S.EditButton>
							<S.ChangePassword onClick={goToChangePassword}>
								{' '}
								비밀번호 변경하기
							</S.ChangePassword>
						</S.BtnBox>
					</S.EditBox>
				</S.Body>
			</S.MainContainer>
		</S.Container>
	);
};
export default EditProfile;
