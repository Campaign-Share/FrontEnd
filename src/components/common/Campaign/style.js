import styled from 'styled-components';

export const MainWrapper = styled.div`
	width: 20rem;
	height: 33.13rem;
	border-radius: 1.375rem;
	border: 1px solid #707070;
	display: flex;
	height: 580px;
	margin-right: 40px;
	border-radius: 22px;
	border: 1px solid rgb(112, 112, 112, 0.16);
	box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.16);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;

	margin-top: 20px;
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
	min-width: 3.125rem;
	margin: 0;
	border-bottom: 2px solid #b8d4c8;
	width: 55%;
	text-align: center;
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

export const CampaignTags = styled.p`
	color: #78bba8;
	font-size: 0.9375rem;
	font-family: Noto Sans CJK KR;
	margin: 0.5rem 0.3rem 0rem 0rem;
	font-weight: 500;
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
	width: 25px;
	height: auto;
	margin-right: 5px;
`;
