import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding-left: 18.75rem;
`;

export const MainContainer = styled.div``;
export const HeaderEnd = styled.div`
	margin-top: 1.25rem;
	margin-right: 1.25rem;
	height: 5.625rem;
	display: flex;
	justify-content: flex-end;
`;
export const Logout = styled.div`
	color: red;
	cursor: pointer;
`;
export const Body = styled.div`
	width: 100%;
	height: 31.25rem;
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
	margin-bottom: 0.625rem;
`;
export const line = styled.div`
	background-color: #9dc3c1;
	width: 100%;
	height: 0.125rem;
`;
export const UserImgBox = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.875rem;
`;
export const UserImglabel = styled.label`
	border-radius: 10rem;
	width: 12.5rem;
	height: 12.5rem;
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const NameInput = styled.input`
	border: 0px;
	border-bottom: 2px solid #b3d5d4;

	outline: none;
	width: 100%;
	font-size: 20px;
	&::placeholder {
		font-size: 20px;
	}
`;
export const BtnBox = styled.div`
	width: 100%;
	height: 10.63rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const EditButton = styled.button`
	background-color: #b3d5d4;
	border: 0px;
	border-radius: 1rem;
	width: 6.25rem;
	height: 1.875rem;
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
	margin-top: 1.875rem;
	font-size: 15px;
`;
export const imgInput = styled.input`
	width: 0;
	outline: none;
`;
