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
	cursor: pointer;
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
	autoComplete: 'off',
})`
	margin-top: 2%;
	width: 30%;
	height: 6%;
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

export const SuggestSubTitle = styled.input.attrs({
	placeholder: '부제목',
	autoComplete: 'off',
})`
	width: 20%;
	height: 4%;
	text-align: center;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	font-family: Noto Sans CJK KR;
	font-size: 18px;
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
	width: 40%;
	height: 80%;
	display: flex;
	justify-content: center;
`;

export const SuggestImageContainer = styled.div.attrs({
	id: 'image_container',
})`
	width: 45%;
	height: 100%;
`;

export const SuggestImageLabel = styled.label`
	width: 100%;
	height: 100%;
	border: 1px solid #707070;
	font-family: Noto Sans CJK KR;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #898989;
	font-size: 20px;
	cursor: pointer;
	text-align: center;
`;

export const SuggestImageInput = styled.input`
	display: none;
`;

export const SuggestDividingLine = styled.div`
	width: 1px;
	height: 80%;
	background-color: #707070;
`;

export const SuggestRightWrapper = styled.div`
	width: 60%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const SuggestRightTitle = styled.h3`
	font-family: Noto Sans CJK KR;
	margin: 0;
	margin-left: 10px;
	font-size: 15px;
`;

export const SuggestRightInput = styled.textarea`
	width: calc(90% - 15px);
	height: calc((90% - 10px) / 2);
	padding-top: 10px;
	padding-left: 15px;
	border: 1px solid #707070;
	margin-left: 10px;
	margin-top: 5px;
	border-radius: 24px;
	font-family: Noto Sans CJK KR;
	color: #b3b3b3;
	font-size: 12px;

	resize: none;
	:focus {
		outline: none;
	}
`;

export const SuggestBottomWrapper = styled.div`
	width: 92%;
	height: 13%;
	display: flex;
`;

export const SuggestBottomLeftWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-start;
`;

export const SuggestPeriodInput = styled.input`
	width: 11rem;
	height: 2rem;
	font-family: Noto Sans CJK KR;
	color: #b3b3b3;

	:focus {
		outline: none;
	}
`;

export const SuggestBottomRightWrapper = styled.div`
	width: 50%;
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
