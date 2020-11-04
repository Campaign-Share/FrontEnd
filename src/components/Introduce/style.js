import styled from 'styled-components';

export const MainWrapper = styled.div`
	background-image: url(${(props) => props.url});
	background-position: left top;
	background-size: 100% 43.75rem;
	background-repeat: no-repeat;
	flex: 1;
	height: 100%;
`;

export const TopWrapper = styled.div`
	width: 100%;
	height: 6.25rem;
`;

export const LogoWrapper = styled.div`
	margin-left: 0.9375rem;
	margin-top: 0.9375rem;
	display: inline-block;
`;

export const Logo = styled.img`
	width: 4.375rem;
`;

export const LinkWrapper = styled.div`
	float: right;
	margin-top: 1.25rem;
	margin-right: 5rem;
`;

export const Link = styled.a`
	margin-left: 6.25rem;
	font-family: Noto Sans CJK KR;
	color: white;
	font-size: 1.438rem;
	text-decoration: none;
`;

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
