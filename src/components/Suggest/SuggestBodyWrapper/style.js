import styled from 'styled-components';

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

export const SuggestImageContainer = styled.div`
	width: 45%;
	height: 100%;
`;

export const SuggestImageLabel = styled.label`
	width: 100%;
	height: 100%;
	border: 0.0625rem solid #707070;
	font-family: Noto Sans CJK KR;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #898989;
	font-size: 1.25rem;
	cursor: pointer;
	text-align: center;
`;

export const SuggestImageInput = styled.input`
	display: none;
`;

export const SuggestDividingLine = styled.div`
	width: 0.0625rem;
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
	margin-left: 0.625rem;
	font-size: 0.9375rem;
`;

export const SuggestRightInput = styled.textarea`
	width: calc(90% - 0.9375rem);
	height: calc((90% - 0.625rem) / 2);
	padding-top: 0.625rem;
	padding-left: 0.9375rem;
	border: 1px solid #707070;
	margin-left: 0.625rem;
	margin-top: 0.3125rem;
	border-radius: 1.5rem;
	font-family: Noto Sans CJK KR;
	color: #b3b3b3;
	font-size: 0.75rem;

	resize: none;
	:focus {
		outline: none;
	}
`;
