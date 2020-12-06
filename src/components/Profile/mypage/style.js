import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;
export const Body = styled.div`
	flex: 1;
	padding-left: 18.75rem;
`;
export const HeaderEnd = styled.div`
	margin-top: 1.875rem;
	margin-right: 3.125rem;
	display: flex;
	justify-content: flex-end;
`;
export const EditProfileBtn = styled.button`
	display: block;
	background-color: #c1dcdb;
	color: white;
	width: 7.5rem;
	height: 2.5rem;
	cursor: pointer;
	border: solid;
	border-radius: 2rem;
	outline: none;
`;
export const MainInfo = styled.div`
	width: 100%;
	height: 70%;
	margin-top: 3.125rem;
	display: flex;
`;
export const UserdataBox = styled.div`
	height: 100%;
	width: 80%;

	margin: 2.5rem;
	border: 1px solid #e7e7e7;
	border-radius: 2rem;
	box-shadow: 1px 3px #e7e7e7;
`;
export const UserImgBox = styled.div`
	display: flex;
	height: 10rem;
	width: 100%;
	justify-content: center;
	align-items: center;
`;
export const UserImg = styled.img`
	border-radius: 10rem;
	width: 6.875rem;
	height: 6.875rem;
`;
export const UserId = styled.div`
	width: 100%;
	text-align: center;
	color: #8a8a8a;
`;
export const UserName = styled.div`
	margin-top: 0.9375rem;
	width: 100%;
	text-align: center;
	font-size: 0.9375rem;
`;
export const MarginBox = styled.div`
	height: 17.5rem;
	width: 12.5rem;
`;
export const Logout = styled.div`
	color: red;
	width: 100%;
	text-align: center;
	cursor: pointer;
`;
