import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	padding-left: 18.75rem;
	width: 100%;
`;
export const Container = styled.div`
	width: 100%;
`;

export const HeaderEnd = styled.div`
	margin-top: 1.25rem;
	margin-right: 1.25rem;
	height: 3.125rem;
	display: flex;
	justify-content: flex-end;
`;
export const Logout = styled.div`
	color: red;
	cursor: pointer;
`;
export const PasswordBox = styled.div`
	width: 65%;
	height: 70%;
	margin: 0 auto;
`;
export const TitleBox = styled.div`
	width: 50%;
	margin: 0 auto;

	text-align: center;
	font-size: 23px;
`;
export const bar = styled.div`
	width: 30%;
	margin: 0 auto;
	height: 0.1875rem;
	margin-top: 0.625rem;
	background-color: #9dc3c1;
`;
export const PasswordInputBox = styled.div`
	margin: 0 auto;
	border: 1px solid #9dc3c1;
	width: 90%;
	border-radius: 1rem;
	height: 75%;
	margin-top: 3.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PasswordBtn = styled.div`
	outline: none;
	cursor: pointer;
	color: white;
	border: 1px solid #b3d5d4;
	background-color: #b3d5d4;

	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 8.125rem;
	margin: 0 auto;
	border-radius: 1rem;
	height: 1.875rem;
	margin-top: 2.5rem;
`;
export const InputPasswordBox = styled.div`
	margin: 0 auto;
	display: flex;
	width: 80%;
	height: 2.5rem;
	margin-top: 2.5rem;
`;
export const WidthBox = styled.div`
	width: 70%;
	height: 70%;
`;
export const text = styled.div`
	font-size: 18px;
	height: 100%;
	display: flex;
	align-items: center;
	width: 40%;
	color: #525252;
`;
export const Input = styled.input`
	margin-left: 1.25rem;
	outline: none;
	border: none;
	border-bottom: 1px solid #b3d5d4;
	width: 50%;

	&::placeholder {
		color: #adadad;
		font-size: 20px;
		transform: translate(0px, 5px);
	}
`;
