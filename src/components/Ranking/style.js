import styled from 'styled-components';

export const RankingContainer = styled.section`
	width: 79%;
`;

export const ContentContainer = styled.div`
	width: 83%;
`;

export const HeaderBox = styled.div`
	width: 22%;
	height: 45px;
	background-color: #b1ccc0;
	border-radius: 50px;
	color: white;
	box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.48);
	margin: 80px 0px 0px 510px;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	line-height: 45px;
	display: inline-block;
`;

export const UserContainer = styled.div`
	margin: 20px 0px 0px 220px;
	width: 100%;
`;

export const SecondBox = styled.div`
	width: 20%;
	height: 300px;
	border: 1px solid rgb(112, 112, 112, 0.25);
	border-radius: 20px;
	box-shadow: 3px 3px 8px rgb(140, 188, 185, 0.44);
	float: left;
	margin: 80px 80px 0px 0px;
`;

export const FirstBox = styled(SecondBox)`
	width: 23%;
	height: 320px;
	margin: 20px 80px 0px 0px;
`;

export const ThirdBox = styled(SecondBox)`
	width: 18%;
	height: 280px;
	margin-top: 90px;
`;

export const Medal = styled.img`
	width: 20%;
	height: 15%;
	margin: -1px 0px 0px 15px;
	display: inline-block;
`;
export const InfoBox = styled.div`
	margin: -25px 30px 0px 30px;
	text-align: center;
`;

export const UserImg = styled.img`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: #8db4a2;
	margin-bottom: 20px;
`;

export const UserInfo = styled.p`
	font-size: 15px;
	font-weight: 600;
	margin-top: 10px;
	color: #8a8a8a;
`;

export const FirstUser = styled(UserImg)`
	width: 130px;
	height: 130px;
`;

export const ThirdUser = styled(UserImg)`
	width: 100px;
	height: 100px;
`;
export const FirstMedal = styled(Medal)`
	width: 18%;
`;
