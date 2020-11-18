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
	top: 320px;
	left: 640px;
	width: 250px;
	height: 300px;
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
	width: calc(100% - 15px);
	height: 60%;
	padding-top: 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ReportTitle = styled.h3`
	width: 80px;
	font-size: 18px;
	color: #737373;
	font-family: Noto Sans CJK KR;
	border-bottom: 2px solid #707070;
	text-align: center;
	margin: 0 auto;
`;

export const ReportCheckboxText = styled.p`
	margin: 0;
	margin-top: 20px;
	margin-bottom: 10px;
	color: #000000;
	font-family: Noto Sans CJK KR;
`;

export const ReportCheckboxDiv = styled.div`
	display: flex;
	margin-left: 20px;
	margin-bottom: 5px;
`;

export const ReportCheckboxImg = styled.img`
	margin-right: 10px;
	cursor: pointer;
`;

export const ReportCheckBoxExplanation = styled.p`
	font-size: 13px;
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
	margin-top: 10px;
	margin-bottom: 10px;
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
	width: 60px;
	height: 23px;
	background-color: #cdcdcd;
	color: #404040;
	font-family: Noto Sans CJK KR;
	border: none;
	border-radius: 12px;
	text-align: center;

	:focus {
		outline: none;
	}
`;

export const CompleteMainWrapper = styled.div`
	position: absolute;
	top: 470px;
	left: 640px;
	width: 300px;
	height: 150px;
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
	width: 22px;
	height: 22px;
	margin-top: 10px;
	margin-right: 10px;
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
	font-size: 13px;
	text-align: center;
	margin-top: 30px;
`;
