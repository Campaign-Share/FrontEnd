import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style.js';
import SideBar from '../../Navigation/sideBar/SideBar.js';
import inputImg from '../../../assets/img/inputImg.png';
import { requestApiWithAccessToken } from '../../../APIrequest';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
const EditProfile = () => {
	const { uuid, nick_name, profile_uri } = useSelector((store) => {
		return {
			uuid: store.editpage.user_uuid,
			nick_name: store.editpage.nick_name,
			profile_uri: store.editpage.profile_uri,
		};
	});
	const [newName, setNewName] = useState(nick_name);
	const [userImg, setUserImg] = useState(); // 사용자 입장에서 보여주기만 하는 미리보기 사진
	const [severImg, setSeverImg] = useState(); //서버에 보내는 state
	useEffect(() => {
		console.log(profile_uri);
		if (!profile_uri) return;
		setUserImg(
			`https://campaignshare.s3.ap-northeast-2.amazonaws.com/${profile_uri}?a=${Date.now()}`,
		);
	}, [profile_uri]);
	const history = useHistory();

	useEffect(() => {
		setNewName(nick_name);
	}, [nick_name]);

	const inputNewName = useCallback((e) => {
		setNewName(e.target.value);
	}, []);

	const imgChange = useCallback(
		(e) => {
			setUserImg(URL.createObjectURL(e.target.files[0]));
			setSeverImg(e.target.files[0]);

		},
		[userImg, severImg],
	);

	const changeName = useCallback(() => {
		const formData = new FormData();
		formData.append('nickName', newName);
		formData.append('profile', severImg);
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}`,
			formData,
			{},
			'patch',
		).then((res) => {
			res.data.status === 200
				? alert('정보가 변경되었습니다.')
				: console.log(res);
		});
	}, [newName, userImg, severImg]);
	const goToChangePassword = useCallback(() => {
		history.push('/editPassword');
	}, []);

	const logout = useCallback(() => {
		if (confirm('로그아웃 하시겠습니까?')) history.push('/introduce');
	}, []);
	return (
		<S.Container>
			<SideBar></SideBar>
			<S.MainContainer>
				<S.HeaderEnd>
					<S.Logout onClick={logout}>로그아웃</S.Logout>
				</S.HeaderEnd>
				<S.Body>
					<S.EditBox>
						<S.Title>프로필 설정</S.Title>
						<S.line></S.line>
						<S.UserImgBox>
							<S.UserImglabel img={userImg} for="imgfile"></S.UserImglabel>
							<form>
								<S.imgInput
									id="imgfile"
									type="file"
									onChange={imgChange}></S.imgInput>
							</form>
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
