import React, { useCallback } from 'react';
import * as S from './style';
import profileImg from '../../../../assets/img/profile.png';
import { useHistory } from 'react-router-dom';
const UserProfileInfo = ({ userInfo }) => {
	const logout = useCallback(() => {
		if (confirm('로그아웃 하시겠습니까?')) {
			history.push('/introduce');
			localStorage.removeItem('access_token');
			setTimeout(() => {
				location.reload();
			});
		}
	});
	const history = useHistory();
	return (
		<S.UserDataBoxWrap>
			<S.UserdataBox>
				<S.UserImgBox>
					<S.UserImg
						src={
							userInfo.userData.profile_uri
								? `https://campaignshare.s3.ap-northeast-2.amazonaws.com/${
										userInfo.userData.profile_uri
								  }?a=${Date.now()}`
								: profileImg
						}
					/>
				</S.UserImgBox>
				<S.UserId>ID : {userInfo.ID}</S.UserId>
				<S.UserName>NickName: {userInfo.nick_name}</S.UserName>
				<S.UserEmail>Email : {userInfo.userData.email}</S.UserEmail>
				<S.MarginBox></S.MarginBox>
				<S.Logout onClick={logout}>로그아웃</S.Logout>
			</S.UserdataBox>
		</S.UserDataBoxWrap>
	);
};
export default UserProfileInfo;
