import styled from 'styled-components';

export const MainWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 150;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 70%;
	height: 85%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 51px;
	z-index: 100;
`;

export const BodyWrapper = styled.div`
	display: flex;
`;

export const LeftWrapper = styled.div`
	width: 40%;
	height: 86%;
	display: flex;
	justify-content: flex-end;
`;

export const Poster = styled.img`
	margin-top: 50px;
	width: 375px;
	height: 500px;
`;

export const RightWrapper = styled.div`
	width: 60%;
	height: 86%;
`;

export const ModalTextWrapper = styled.div`
	width: 85%;
	margin: 60px 0 0 40px;
`;

export const ModalPublisher = styled.h2`
	margin: 0;
	font-size: 18px;
	font-family: Noto Sans CJK KR;
	color: #353535;
`;

export const ModalSubTitle = styled.h3`
	margin: 0;
	margin-top: 50px;
	font-size: 15px;
	text-align: center;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const ModalTitle = styled.h1`
	color: #000000;
	margin: 0;
	margin-top: 20px;
	font-size: 23px;
	text-align: center;
`;

export const ModalIntroduction = styled.p`
	margin: 0;
	margin-top: 50px;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const ModalBtnWrapper = styled.div`
	margin-top: 110px;
	width: 90%;
	display: flex;
	justify-content: flex-end;
`;

export const ModalAgreeBtn = styled.button`
	width: 100px;
	height: 35px;
	margin-right: 20px;
	background-color: #ffffff;
	border: 2px solid #d2d2d2;
	border-radius: 21px;
	font-family: Noto Sans CJK KR;

	:focus {
		outline: none;
	}
`;

export const ModalDisagreeBtn = styled.button`
	width: 100px;
	height: 35px;
	background-color: #ffffff;
	border: 2px solid #d2d2d2;
	border-radius: 21px;
	font-family: Noto Sans CJK KR;

	:focus {
		outline: none;
	}
`;

export const ModalBottomWrapper = styled.div`
	width: 100%;
	height: 14%;
	display: flex;
	justify-content: flex-start;
`;

export const ModalReportWrapper = styled.div`
	width: 40%;
	display: flex;
	justify-content: flex-end;
`;

export const ModalReportBtn = styled.button`
	margin-top: 20px;
	width: 110px;
	height: 30px;
	border-radius: 21px;
	border: 2px solid #d2d2d2;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalReportIcon = styled.img`
	width: 20px;
	display: inline;
	margin-right: 5px;
`;

export const ModalReportText = styled.p`
	display: inline;
	font-family: Noto Sans CJK KR;
	color: #000000;
	margin: 0;
`;
