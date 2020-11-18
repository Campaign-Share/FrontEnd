import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
`;

export const MainWrapper = styled.div`
	position: absolute;
	top: 20rem;
	left: 40rem;
	width: 15.63rem;
	height: 18.75rem;
	background-color: white;
	box-shadow: 0px 3px 8px #9dc3c1;
	display: flex;
	justify-content: center;
`;

export const BodyWrapper = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ReportCheckboxWrapper = styled.div`
	width: calc(100% - 0.9375rem);
	height: 60%;
	padding-top: 0.9375rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ReportTitle = styled.h3`
	width: 5rem;
	font-size: 1.125rem;
	color: #737373;
	font-family: Noto Sans CJK KR;
	border-bottom: 2px solid #707070;
	text-align: center;
	margin: 0 auto;
`;

export const ReportCheckboxText = styled.p`
	margin: 0;
	margin-top: 1.25rem;
	margin-bottom: 0.625rem;
	color: #000000;
	font-family: Noto Sans CJK KR;
`;

export const ReportCheckboxDiv = styled.div`
	display: flex;
	margin-left: 1.25rem;
	margin-bottom: 0.3125rem;
`;

export const ReportCheckboxImg = styled.img`
	margin-right: 0.625rem;
	cursor: pointer;
`;

export const ReportCheckBoxExplanation = styled.p`
	font-size: 0.8125rem;
	font-family: Noto Sans CJK KR;
	color: #000000;
	margin: 0;
`;

export const ReportReasonWrapper = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ReportReasonText = styled.p`
	font-family: Noto Sans CJK KR;
	margin: 0;
	margin-top: 0.625rem;
	margin-bottom: 0.625rem;
`;

export const ReportReasonInput = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid #aed6b5;
	font-family: Noto Sans CJK KR;

	:focus {
		outline: none;
	}
`;

export const ReportBtnWrapper = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
`;

export const ReportBtn = styled.button`
	width: 3.75rem;
	height: 1.438rem;
	background-color: #cdcdcd;
	color: #404040;
	font-family: Noto Sans CJK KR;
	border: none;
	border-radius: 0.75rem;
	text-align: center;

	:focus {
		outline: none;
	}
`;

export const CompleteMainWrapper = styled.div`
	position: absolute;
	top: 29.38rem;
	left: 40rem;
	width: 18.75rem;
	height: 9.375rem;
	background-color: white;
	box-shadow: 0px 3px 8px #9dc3c1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const CompleteTopWrapper = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: flex-end;
`;

export const CompleteCloseImg = styled.img`
	width: 1.375rem;
	height: 1.375rem;
	margin-top: 0.625rem;
	margin-right: 0.625rem;
	cursor: pointer;
`;

export const CompleteBodyWrapper = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
`;

export const CompleteText = styled.p`
	font-family: Noto Sans CJK KR;
	font-size: 0.8125rem;
	text-align: center;
	margin-top: 1.875rem;
`;
