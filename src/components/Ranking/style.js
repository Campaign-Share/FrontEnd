import styled from 'styled-components';

export const RankingContainer = styled.div`
	width: calc(100% - 19.69rem);
	padding-left: 18.75rem;
`;

export const ContentContainer = styled.div`
	width: 83%;
`;

export const HeaderBox = styled.div`
	width: 22%;
	height: 2.813rem;
	background-color: #b1ccc0;
	border-radius: 50px;
	color: white;
	box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.35);
	margin: 2.5rem 0px 0px 30.94rem;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	line-height: 2.813rem;
	display: inline-block;
`;

export const UserContainer = styled.div`
	margin: 1.25rem 0 0 13.75rem;
	width: 100%;
`;

export const User = styled.p`
	margin: 0 auto;
	font-size: 13px;
	border-bottom: 2px solid #b8d4c8;
	width: 40%;
	color: #91a89e;
`;
export const SecondBox = styled.div`
	width: 20%;
	height: 18.75rem;
	border: 1px solid rgb(112, 112, 112, 0.25);
	border-radius: 20px;
	box-shadow: 3px 3px 8px rgb(140, 188, 185, 0.44);
	float: left;
	margin: 5rem 5rem 0 0;
`;

export const FirstBox = styled(SecondBox)`
	width: 23%;
	height: 20rem;
	margin: 1.25rem 5rem 0 0;
`;

export const ThirdBox = styled(SecondBox)`
	width: 18%;
	height: 17.5rem;
	margin-top: 5.625rem;
`;

export const Medal = styled.img`
	width: 20%;
	height: 15%;
	margin: -0.0625rem 0 0 0.9375rem;
	display: inline-block;
`;
export const InfoBox = styled.div`
	margin: -1.563rem 1.875rem 0 1.875rem;
	text-align: center;
`;

export const UserImg = styled.img`
	width: 6.875rem;
	height: 6.875rem;
	border-radius: 50%;
	margin-bottom: 0.625rem;
`;

export const UserInfo = styled.p`
	font-size: 15px;
	font-weight: 600;
	margin-top: 0.625rem;
	color: #8a8a8a;
`;

export const FirstUser = styled(UserImg)`
	width: 8.125rem;
	height: 8.125rem;
`;

export const ThirdUser = styled(UserImg)`
	width: 6.25rem;
	height: 6.25rem;
`;
export const FirstMedal = styled(Medal)`
	width: 18%;
`;
