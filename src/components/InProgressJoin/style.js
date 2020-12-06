import styled from 'styled-components';

export const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 1.875rem;
	width: calc(100% - 1.875rem);
`;

export const BodyWrapper = styled.div`
	width: 100%;
	height: calc(100% - 4.375rem);
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const InProgressWrapper = styled.div`
	margin-top: 2%;
	width: 85%;
	height: 85%;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.5px solid #707070;
	border-radius: 1.375rem;
	box-shadow: 0.1875rem 0.1875rem 0.4375rem 0.0625rem rgba(112, 112, 112, 0.3);
`;

export const InProgressTitle = styled.h3`
	margin: 0;
	margin-top: 3.125rem;
	width: 35%;
	height: 6%;
	text-align: center;
	border: none;
	font-family: Noto Sans CJK KR;
	font-size: 1.438rem;
	color: #000000;
`;

export const InProgressBodyWrapper = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InProgressLeftWrapper = styled.div`
	width: 50%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const InProgressLeftTitle = styled.h3`
	margin-left: 2.5rem;
	font-family: Noto Sans CJK KR;
	font-size: 1.438rem;
	color: #535353;
`;

export const InProgressLeftExplanation = styled.p`
	margin-left: 2.5rem;
	font-family: Noto Sans CJK KR;
	font-size: 1.125rem;
	color: #535353;
`;

export const InProgressDividingLine = styled.div`
	width: 0.0625rem;
	height: 90%;
	background-color: #707070;
`;

export const InProgressRightWrapper = styled.div`
	width: 50%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const InProgressDetailWrapper = styled.div`
	width: calc(100% - 1.25rem);
	height: 60%;
	margin-left: 1.25rem;
`;

export const InProgressDetailExplanation = styled.p`
	font-family: Noto Sans CJK KR;
	font-size: 1.125rem;
	color: #535353;
	margin: 0;
	margin-bottom: 0.625rem;
`;

export const InProgressDetailTextarea = styled.textarea`
	width: 90%;
	height: 90%;
	font-family: Noto Sans CJK KR;
	font-size: 1.125rem;
	color: #000000;
	resize: none;

	:focus {
		outline: none;
	}
`;

export const InProgressAddFileWrapper = styled.div`
	width: calc(100% - 1.25rem);
	height: calc(10% - 0.625rem);
	padding-left: 1.25rem;
	padding-top: 0.625rem;
	margin-top: 3.125rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const InProgressAddFileIcon = styled.img`
	width: 1.25rem;
	height: 1.25rem;
	display: inline;
	margin-top: 0.625rem;
`;

export const InProgressAddFileText = styled.p`
	font-family: Noto Sans CJK KR;
	display: inline;
	margin-left: 0.3125rem;
`;

export const InProgressAddFileInput = styled.input`
	margin-left: 1.25rem;
	width: 12.5rem;
	height: 1.563rem;
`;

export const InProgressBottomWrapper = styled.div`
	width: 92%;
	height: 8%;
	display: flex;
	justify-content: flex-end;
`;

export const InProgressJoinBtn = styled.button`
	height: 90%;
	width: 10%;
	background-color: ${(props) => (props.isFull ? '#9DC3C1' : '#E7E7E7')};
	color: #ffffff;
	font-family: Noto Sans CJK KR;
	border-radius: 1.625rem;
	border: none;
	cursor: pointer;

	:focus {
		outline: none;
	}
`;
