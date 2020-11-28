import React from 'react';
import * as S from './style';

import { good, bad, member } from '../../../assets/img';

const Campaign = ({ onClick, props, isSuggested }) => {
	return (
		<S.MainWrapper onClick={() => onClick(props.campaign_uuid)}>
			<S.Poster
				src={`http://campaignshare.s3.ap-northeast-2.amazonaws.com/${props.post_uri}`}
			/>
			<S.CampaignTextWrapper>
				<S.CampaignPublisher>{props.nick_name}</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>{props.sub_title}</S.CampaignSubtitle>
					<S.CampaignTitle>{props.title}</S.CampaignTitle>
					<S.CampaignTagsWrapper>
						{/* {props.campaign_tags.map((item) => (
							<S.CampaignTags>{item.replace(/'/g, '')}</S.CampaignTags>
						))} */}
					</S.CampaignTagsWrapper>
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
	);
};

export default Campaign;
