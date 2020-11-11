import styled from 'styled-components';

export const SuggestBodyWrapper = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SuggestLeftWrapper = styled.div`
	width: 40%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const SuggestImageContainer = styled.div`
	width: 60%;
	height: 85%;
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

export const SuggestTagsInput = styled.input`
	width: 45%;
	height: 10%;
	margin-top: 10px;
	border: none;
	border-bottom: 1px solid #aecfc0;
	font-family: Noto Sans CJK KR;
	font-size: 15px;
	color: #adadad;

	:focus {
		outline: none;
	}
`;

export const SuggestDividingLine = styled.div`
	width: 0.0625rem;
	height: 90%;
	background-color: #707070;
`;

export const SuggestRightWrapper = styled.div`
	width: calc(60% - 1.875rem);
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 1.875rem;
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
