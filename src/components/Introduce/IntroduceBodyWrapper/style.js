import styled from 'styled-components';

export const BodyWrapper = styled.div`
	width: 90%;
	height: calc(100% - 6.25rem);
	display: flex;
	justify-content: center;
	margin-left: 5%;
	margin-right: 5%;
`;

export const TextWrapper = styled.div`
	width: calc(100% - 46.88rem);
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TextTitle = styled.h1`
	width: 37.81rem;
	height: 4.375rem;
	font-family: Noto Sans CJK KR;
	margin: 0;
	font-size: 3.125rem;
	display: block;
	color: #535353;
`;

export const TextDividingLine = styled.div`
	width: 38.75rem;
	height: 0.1875rem;
	background-color: #707070;
	display: block;
`;

export const TextExplanation = styled.p`
	width: 37.81rem;
	height: 6.25rem;
	font-size: 1.063rem;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const RightBackgroundImg = styled.img`
	width: 46.88rem;
	height: 37.5rem;
	display: inline;
`;
