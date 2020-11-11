import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;

export const MainContainer = styled.div`
	flex: 1;
`;
export const HeaderEnd = styled.div`
	margin-top: 20px;
	margin-right: 20px;
	height: 90px;
	display: flex;
	justify-content: flex-end;
`;
export const Logout = styled.div`
	color: red;
	cursor: pointer;
`;
export const Body = styled.div`
	width: 100%;
	height: 500px;
`;
export const EditBox = styled.div`
	width: 20%;
	height: 100%;
	margin: 0 auto;
`;
export const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: 26px;
	margin-bottom: 10px;
`;
export const line = styled.div`
	background-color: #9dc3c1;
	width: 100%;
	height: 2px;
`;
export const UserImgBox = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;
export const UserImglabel = styled.label`
	border-radius: 10rem;
	width: 200px;
	height: 200px;
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const NameInput = styled.input`
	border-bottom: 2px solid #b3d5d4;
	border-top: 0px;
	border-right: 0px;
	border-left: 0px;
	outline: none;
	width: 100%;
	font-size: 20px;
	&::placeholder {
		font-size: 20px;
	}
`;
export const BtnBox = styled.div`
	width: 100%;
	height: 170px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const EditButton = styled.button`
	background-color: #b3d5d4;
	border: 0px;
	border-radius: 1rem;
	width: 100px;
	height: 30px;
	font-size: 15px;
	color: white;
	text-align: center;
	outline: none;
`;

export const ChangePassword = styled.button`
	outline: none;
	cursor: pointer;
	color: #b3d5d4;
	border: none;
	background-color: white;
	margin-top: 30px;
	font-size: 15px;
`;
export const imgInput = styled.input`
	width: 0px;
	outline: none;
`;
