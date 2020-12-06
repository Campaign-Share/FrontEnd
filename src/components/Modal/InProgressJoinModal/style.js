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
	width: 43.75rem;
	height: 18.75rem;
	background-color: white;
	border-radius: 2.813rem;
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
	margin-bottom: 2.5rem;
`;

export const ModalBtn = styled.button`
	width: 8.75rem;
	height: 3.125rem;
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
