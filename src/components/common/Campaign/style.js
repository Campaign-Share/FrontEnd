import styled from 'styled-components';

export const MainWrapper = styled.div`
	width: 320px;
	height: 530px;
	border-radius: 22px;
	border: 1px solid #707070;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Poster = styled.img`
	padding-top: 20px;
	width: 90%;
	height: calc(70% - 20px);
`;

export const CampaignTextWrapper = styled.div`
	width: 90%;
	height: 19%;
	margin-top: 1%;
	display: flex;
	flex-direction: column;
`;

export const CampaignPublisher = styled.h3`
	font-size: 15px;
	width: 50px;
	margin: 0;
	border-bottom: 2px solid #b8d4c8;
`;

export const CampaignSummaryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const CampaignSubtitle = styled.h3`
	font-size: 15px;
	margin: 0;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const CampaignTitle = styled.h2`
	font-size: 22px;
	margin: 0;
	font-family: Noto Sans CJK KR;
	color: #000000;
`;

export const CampaignGraphWrapper = styled.div`
	width: 90%;
	height: 10%;
`;
