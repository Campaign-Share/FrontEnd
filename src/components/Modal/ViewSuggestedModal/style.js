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
	border-radius: 3.188rem;
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
	margin-top: 3.125rem;
	width: 23.44rem;
	height: 31.25rem;
`;

export const RightWrapper = styled.div`
	width: 60%;
	height: 86%;
`;

export const ModalTextWrapper = styled.div`
	width: 85%;
	margin: 3.75rem 0 0 2.5rem;
`;

export const ModalPublisher = styled.h2`
	margin: 0;
	font-size: 1.125rem;
	font-family: Noto Sans CJK KR;
	color: #353535;
`;

export const ModalSubTitle = styled.h3`
	margin: 0;
	margin-top: 3.125rem;
	font-size: 0.9375rem;
	text-align: center;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const ModalTitle = styled.h1`
	color: #000000;
	margin: 0;
	margin-top: 1.25rem;
	font-size: 1.438rem;
	text-align: center;
`;

export const ModalIntroduction = styled.p`
	margin: 0;
	margin-top: 3.125rem;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const ModalBtnWrapper = styled.div`
	margin-top: 6.875rem;
	width: 90%;
	display: flex;
	justify-content: flex-end;
`;

export const ModalAgreeBtn = styled.button`
	width: 6.25rem;
	height: 2.188rem;
	margin-right: 1.25rem;
	background-color: #ffffff;
	border: 2px solid #d2d2d2;
	border-radius: 1.313rem;
	font-family: Noto Sans CJK KR;

	:focus {
		outline: none;
	}
`;

export const ModalDisagreeBtn = styled.button`
	width: 6.25rem;
	height: 2.188rem;
	background-color: #ffffff;
	border: 2px solid #d2d2d2;
	border-radius: 1.313rem;
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
	margin-top: 1.25rem;
	width: 6.875rem;
	height: 1.875rem;
	border-radius: 1.313rem;
	border: 2px solid #d2d2d2;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;

	:focus {
		outline: none;
	}
`;

export const ModalReportIcon = styled.img`
	width: 1.25rem;
	display: inline;
	margin-right: 0.3125rem;
`;

export const ModalReportText = styled.p`
	display: inline;
	font-family: Noto Sans CJK KR;
	color: #000000;
	margin: 0;
`;
