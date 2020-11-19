import React, { useState } from 'react';
import * as S from './style';
import { good, bad, member } from '../../../assets/img/index';

const MyCampaign = ({ props, onClick, isSuggested }) => {
	const imgUrl = 'https://campaignshare.s3.ap-northeast-2.amazonaws.com/';
	console.log(isSuggested);
	return (
		<S.MainWrapper onClick={onClick}>
			<S.Poster src={imgUrl + props.post_uri} />
			<S.CampaignTextWrapper>
				<S.CampaignPublisher>{props.user_uuid}</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>{props.sub_title}</S.CampaignSubtitle>
					<S.CampaignTitle>{props.title}</S.CampaignTitle>
					{/* {tags.map((tag) => (
						<S.CampaignTags>{tag.replace(/'/g, '')}</S.CampaignTags>
					))} */}
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

export default MyCampaign;
