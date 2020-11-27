import styled, { css } from 'styled-components';

export const MainWrapper = styled.div`
	width: 20rem;
	height: 33.13rem;
	border-radius: 1.375rem;
	border: 1px solid #707070;
	display: ${(props) => {
		if (props.isCampaign) return 'none';
		else return 'flex';
	}};
	height: 36.25rem;
	margin-right: 2.5rem;
	border-radius: 1.375rem;
	border: 1px solid rgb(112, 112, 112, 0.16);
	box-shadow: 0.3125rem 0.3125rem 0.5rem rgb(0, 0, 0, 0.16);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 6.25rem;
	margin-top: 1.25rem;
`;

export const Poster = styled.img`
	padding-top: 1.25rem;
	width: 90%;
	height: calc(65% - 1.25rem);
`;

export const CampaignTextWrapper = styled.div`
	width: 90%;
	height: 24%;
	margin-top: 1%;
	display: flex;
	flex-direction: column;
`;

export const CampaignPublisher = styled.h3`
	font-size: 0.9375rem;
	width: 3rem;
	margin: 0;
	border-bottom: 2px solid #b8d4c8;
	text-align: center;
	white-space: nowrap;
`;

export const CampaignSummaryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const CampaignSubtitle = styled.h4`
	font-size: 0.9375rem;
	margin: 0;
	font-family: Noto Sans CJK KR;
	color: #535353;
`;

export const CampaignTitle = styled.h2`
	font-size: 1.06rem;
	margin: 0;
	font-family: Noto Sans CJK KR;
	color: #000000;
`;

export const CampaignTagsWrapper = styled.div`
	display: flex;
`;

export const CampaignTags = styled.p`
	color: #78bba8;
	font-size: 0.9375rem;
	font-family: Noto Sans CJK KR;
	font-weight: 500;
	margin: 0;
	margin-top: 0.5rem;
	margin-right: 0.625rem;
`;

export const CampaignGraphWrapper = styled.div`
	width: 90%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CampaignLikeIcon = styled.img`
	width: 1.563rem;
`;

export const CampaignDisagreeGraph = styled.div`
	width: 11.25rem;
	height: 1.25rem;
	background-color: #e3e3e3;
	margin: 0 0.625rem;
	border: none;
	border-radius: 1.375rem;
	display: flex;
	position: relative;
`;

export const CampaignDislikeIcon = styled.img`
	width: 1.563rem;
`;

export const CampaignFlexDiv = styled.div`
	&:nth-child(1) {
		background-color: #bed9d7;
		border-top-left-radius: 1.375rem;
		border-bottom-left-radius: 1.375rem;
		${(props) => props.isFull && 'border-radius:22px;'}
	}

	flex: ${(props) => props.flex};
`;

export const CampaignAgreeNumber = styled.p`
	position: absolute;
	top: -0.8125rem;
	left: 0.625rem;
	font-size: 0.8125rem;
	color: white;
	font-family: Noto Sans CJK KR;
`;

export const CampaignDisagreeNumber = styled.p`
	position: absolute;
	top: -0.8125rem;
	left: 10rem;
	font-size: 0.8125rem;
	color: white;
	font-family: Noto Sans CJK KR;
`;

export const CampaignMember = styled.div`
	margin: 10px 0px 0px 240px;
`;

export const Member = styled.img`
	width: 1.563rem;
	height: auto;
	margin-right: 0.3125rem;
`;

export const CampaignParticipationWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const CampaignParticipationDiv = styled.div`
	margin-right: 30px;
	height: 20px;
	display: flex;
`;

export const CampaignParticipationIcon = styled.img`
	width: 1.875rem;
	height: 1.25rem;
	margin-right: 0.3125rem;
`;

export const CampaignParticipationText = styled.p`
	margin: 0;
	height: 20px;
	font-size: 15px;
	font-family: Noto Sans CJK KR;
	color: #353535;
`;

export const voidContainer = styled.div`
	display: ${(props) => {
		if (props.isCampaign) return 'block';
		else return 'none';
	}};
	width: 100%;
	text-align: center;
	height: 80%;
	line-height: 400px;
`;
export const voidText = styled.p`
	font-size: 22px;
	font-weight: bold;
	color: #9dc3c1;
`;
