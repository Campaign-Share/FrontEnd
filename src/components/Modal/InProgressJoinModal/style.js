import styled from 'styled-components';

export const MainWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BodyWrapper = styled.div`
	width: 700px;
	height: 300px;
	background-color: white;
	border-radius: 45px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalText = styled.p`
	font-family: Noto Sans CJK KR;
	font-size: 23px;
	text-align: center;
	color: #83aaa5;
	margin-bottom: 40px;
`;

export const ModalBtn = styled.button`
	width: 140px;
	height: 50px;
	background-color: #9dc3c1;
	border-radius: 26px;
	color: white;
	border: none;
	font-family: Noto Sans CJK KR;
	font-size: 20px;

	:focus {
		outline: none;
	}
`;
