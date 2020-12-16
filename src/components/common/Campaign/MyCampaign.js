import React from 'react';
import * as S from './style';
import { good, bad, member } from '../../../assets/img/index';

const MyCampaign = ({ props, onClick, isSuggested, isCampaign, isRefusal }) => {
	const imgUrl = 'https://campaignshare.s3.ap-northeast-2.amazonaws.com/';
	return (
		<React.Fragment>
			<S.MainWrapper
				onClick={() => onClick(props.campaign_uuid)}
				isCampaign={isCampaign}>
				<S.Poster src={imgUrl + props.post_uri} />
				<S.CampaignTextWrapper>
					<S.CampaignPublisher>{props.nick_name}</S.CampaignPublisher>
					<S.CampaignSummaryWrapper>
						<S.CampaignSubtitle>{props.sub_title}</S.CampaignSubtitle>
						<S.CampaignTitle>{props.title}</S.CampaignTitle>
						{props.campaign_tags.map((tag) => (
							<S.CampaignTags>{tag.replace(/'/g, '')}</S.CampaignTags>
						))}
						<S.CampaignTags>{props.tags}</S.CampaignTags>
					</S.CampaignSummaryWrapper>
				</S.CampaignTextWrapper>
				{isSuggested ? (
					<S.CampaignGraphWrapper>
						<S.CampaignLikeIcon src={good} />
						<S.CampaignDisagreeGraph>
							<S.CampaignFlexDiv
								flex={props.agree_number}
								isFull={props.disagree_number === 0}>
								<S.CampaignAgreeNumber>
									{props.agree_number}
								</S.CampaignAgreeNumber>
							</S.CampaignFlexDiv>
							<S.CampaignFlexDiv flex={props.disagree_number}>
								<S.CampaignDisagreeNumber>
									{props.disagree_number}
								</S.CampaignDisagreeNumber>
							</S.CampaignFlexDiv>
						</S.CampaignDisagreeGraph>
						<S.CampaignDislikeIcon src={bad} />
					</S.CampaignGraphWrapper>
				) : (
					''
				)}
				{isRefusal ? (
					''
				) : (
					<S.CampaignParticipationWrapper>
						<S.CampaignParticipationDiv>
							<S.CampaignParticipationIcon src={member} />
							<S.CampaignParticipationText>
								{props.participation_number}
							</S.CampaignParticipationText>
						</S.CampaignParticipationDiv>
					</S.CampaignParticipationWrapper>
				)}
			</S.MainWrapper>
			<S.voidContainer isCampaign={isCampaign}>
				<S.voidText>아직 정보가 없습니다.</S.voidText>
			</S.voidContainer>
		</React.Fragment>
	);
};

export default MyCampaign;
