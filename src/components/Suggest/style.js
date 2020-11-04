import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
`;

export const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const Header = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const HeaderIcon = styled.img`
	width: 50px;
	margin-right: 2%;
`;

export const BodyWrapper = styled.div`
	width: 100%;
	height: calc(100% - 70px);
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const SuggestWrapper = styled.div`
	margin-top: 2%;
	width: 85%;
	height: 85%;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.5px solid #707070;
	border-radius: 22px;
	box-shadow: 3px 3px 7px 1px rgba(112, 112, 112, 0.3);
`;

export const SuggestTitle = styled.input.attrs({
	placeholder: '제목',
})`
	margin-top: 4%;
	width: 30%;
	height: 8%;
	text-align: center;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	font-family: Noto Sans CJK KR;
	font-size: 23px;
	color: #909090;

	:focus {
		outline: none;
	}
`;

export const SuggestBodyWrapper = styled.div`
	width: 100%;
	height: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SuggestLeftWrapper = styled.div`
	width: 50%;
	height: 80%;
	display: flex;
	justify-content: center;
`;

export const SuggestImageInput = styled.div`
	width: 45%;
	height: 100%;
	border: 1px solid #707070;
	font-family: Noto Sans CJK KR;
	color: #898989;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

export const SuggestDividingLine = styled.div`
	width: 1px;
	height: 80%;
	background-color: #707070;
`;

export const SuggestRightWrapper = styled.div`
	width: 50%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const SuggestRightTitle = styled.h3`
	font-family: Noto Sans CJK KR;
	margin: 0;
	margin-left: 10px;
`;

export const SuggestRightInput = styled.textarea`
	width: calc(90% - 15px);
	height: calc(90% - 10px);
	padding-top: 10px;
	padding-left: 15px;
	border: 1px solid #707070;
	margin-left: 10px;
	margin-top: 10px;
	border-radius: 24px;
	font-family: Noto Sans CJK KR;
	color: #b3b3b3;
	font-size: 18px;

	resize: none;
	:focus {
		outline: none;
	}
`;

export const SuggestBottomWrapper = styled.div`
	width: 92%;
	height: 13%;
	display: flex;
	justify-content: flex-end;
`;

export const SuggestSubmitBtn = styled.button`
	width: 110px;
	height: 40px;
	border-radius: 26px;
	background-color: #9dc3c1;
	color: white;
	border: none;
	font-family: Noto Sans CJK KR;
	font-size: 18px;
`;
