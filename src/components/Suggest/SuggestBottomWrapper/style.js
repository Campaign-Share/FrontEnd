import styled from 'styled-components';

export const SuggestBottomWrapper = styled.div`
	width: 92%;
	height: 8%;
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
	border: none;
	border-bottom: 1px solid #aecfc0;

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
	width: 6.875rem;
	height: 2.5rem;
	border-radius: 1.625rem;
	background-color: #9dc3c1;
	color: white;
	border: none;
	font-family: Noto Sans CJK KR;
	font-size: 1.125rem;
`;
