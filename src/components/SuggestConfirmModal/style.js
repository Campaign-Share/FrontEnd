import styled from 'styled-components';

export const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 40%;
	height: 35%;
	background-color: white;
	border-radius: 45px;
`;

export const ModalTopWrapper = styled.div`
	width: 100%;
	height: 65%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const ModalTitle = styled.h3`
	margin: 0;
	margin-bottom: 5%;
	text-align: center;
	font-family: Noto Sans CJK KR;
	color: #83aaa5;
	font-size: 23px;
`;

export const ModalBottomWrapper = styled.div`
	width: 100%;
	height: 35%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const ModalConfirmButton = styled.button`
	width: 20%;
	height: 40%;
	background-color: #9dc3c1;
	color: white;
	border: none;
	border-radius: 26px;
	font-size: 18px;
	font-family: Noto Sans CJK KR;
`;
