import styled from 'styled-components';

export const MainWrapper = styled.div`
	background-image: url(${(props) => props.url});
	background-position: left top;
	background-size: 100% 700px;
	background-repeat: no-repeat;
	flex: 1;
	height: 100%;
`;

export const TopWrapper = styled.div`
	width: 100%;
	height: 100px;
`;

export const LogoWrapper = styled.div`
	margin-left: 15px;
	margin-top: 15px;
	display: inline-block;
`;

export const Logo = styled.img`
	width: 70px;
`;

export const LinkWrapper = styled.div`
	float: right;
	margin-top: 20px;
	margin-right: 80px;
`;

export const Link = styled.a`
	margin-left: 100px;
	font-family: Noto Sans CJK KR;
	color: white;
	font-size: 23px;
	text-decoration: none;
`;

export const BodyWrapper = styled.div`
	width: 90%;
	height: calc(100% - 100px);
	display: flex;
	justify-content: center;
	margin-left: 5%;
	margin-right: 5%;
`;

export const TextWrapper = styled.div`
	width: calc(100% - 750px);
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TextTitle = styled.h1`
	width: 605px;
	height: 70px;
	font-family: Noto Sans CJK KR;
	margin: 0;
	font-size: 50px;
	display: block;
	color: #535353;
`;

export const TextDividingLine = styled.div`
	width: 620px;
	height: 3px;
	background-color: #707070;
	display: block;
`;

export const TextExplanation = styled.p`
	width: 605px;
	height: 100px;
	font-size: 17px;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const RightBackgroundImg = styled.img`
	width: 750px;
	height: 600px;
	display: inline;
`;
