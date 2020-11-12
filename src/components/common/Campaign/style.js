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

export const CampaignTags = styled.p`
	color: #78bba8;
	font-size: 15px;
	font-family: Noto Sans CJK KR;
	margin: 0;
	margin-top: 8px;
`;

export const CampaignGraphWrapper = styled.div`
	width: 90%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CampaignLikeIcon = styled.img`
	width: 25px;
`;

export const CampaignDisagreeGraph = styled.div`
	width: 180px;
	height: 20px;
	background-color: #e3e3e3;
	margin: 0 10px;
	border: none;
	border-radius: 22px;
	display: flex;
	position: relative;
`;

export const CampaignDislikeIcon = styled.img`
	width: 25px;
`;

export const CampaignFlexDiv = styled.div`
	&:nth-child(1) {
		background-color: #bed9d7;
		border-top-left-radius: 22px;
		border-bottom-left-radius: 22px;
		${(props) => props.isFull && 'border-radius:22px;'}
	}

	flex: ${(props) => props.flex};
`;

export const CampaignAgreeNumber = styled.p`
	position: absolute;
	top: -13px;
	left: 10px;
	font-size: 13px;
	color: white;
	font-family: Noto Sans CJK KR;
`;

export const CampaignDisagreeNumber = styled.p`
	position: absolute;
	top: -13px;
	left: 160px;
	font-size: 13px;
	color: white;
	font-family: Noto Sans CJK KR;
`;
