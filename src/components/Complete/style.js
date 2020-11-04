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

export const BodyWrapper = styled.div`
	width: 90%;
	height: calc(100% - 6.25rem);
	display: flex;
	margin-left: 5%;
`;

export const LeftImgWrapper = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const LeftBackgroundImg = styled.img`
	margin-bottom: 25%;
	margin-left: 5%;
	width: 37.5rem;
	height: 25rem;

	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;
`;

export const RightWrapper = styled.div`
	width: calc(90% - 37.5rem);
	display: flex;
	flex-direction: column;
`;

export const TextWrapper = styled.div`
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const TextTitle = styled.h1`
	font-family: Noto Sans CJK KR;
	margin: 0;
	font-size: 35px;
	text-align: center;
	color: #464646;
`;

export const TextDividingLine = styled.div`
	width: 18.75rem;
	height: 0.25rem;
	background-color: #77a691;
	display: block;
`;

export const TextExplanation = styled.p`
	text-align: right;
	width: 18.13rem;
	font-family: Noto Sans CJK KR;
	white-space: pre-line;
	color: #535353;
`;

export const LinkWrapper = styled.div`
	margin-top: 5%;
	display: flex;
	justify-content: flex-end;
`;

export const LinkButton = styled.button`
	width: 12.5rem;
	height: 3.125rem;
	margin-left: 5rem;
	background-color: #f3f3f3;
	color: #79a28f;
	font-size: 1.063rem;
	font-family: #79a28f;
	font-weight: bold;
	border: none;
	box-shadow: 0.1875rem 0.1875rem 0.4375rem 0.0625rem rgba(112, 112, 112, 0.3);
`;
