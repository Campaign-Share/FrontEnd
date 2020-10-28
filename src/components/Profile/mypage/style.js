import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;
export const Body = styled.div`
	flex: 1;
`;
export const HeaderEnd = styled.div`
	margin-top: 30px;
	margin-right: 50px;
	display: flex;
	justify-content: flex-end;
`;
export const EditProfileBtn = styled.button`
	display: block;
	background-color: #c1dcdb;
	color: white;
	width: 120px;
	height: 40px;
	border: solid;
	border-radius: 2rem;
`;
export const MainInfo = styled.div`
	width: 100%;
	height: 70%;
	margin-top: 50px;
	display: flex;
`;
export const UserdataBox = styled.div`
	height: 100%;
	width: 80%;

	margin: 40px;
	border: 1px solid #e7e7e7;
	border-radius: 2rem;
	box-shadow: 1px 3px #e7e7e7;
`;
export const UserImgBox = styled.div`
	display: flex;
	height: 160px;
	width: 100%;
	justify-content: center;
	align-items: center;
`;
export const UserImg = styled.img`
	border-radius: 10rem;
	width: 110px;
	height: 110px;
`;
export const UserId = styled.div`
	width: 100%;
	text-align: center;
	color: #8a8a8a;
`;
export const UserName = styled.div`
	margin-top: 15px;
	width: 100%;
	text-align: center;
	font-size: 15px;
`;
export const MarginBox = styled.div`
	height: 280px;
	width: 200px;
`;
export const Logout = styled.div`
	color: red;
	width: 100%;
	text-align: center;
`;
export const UserCampaign = styled.div`
	flex: 1;
	background-color: red;
`;

export const UserDataBoxWrap = styled.div`
	width: 25%;
	display: flex;
	align-items: center;
`;
