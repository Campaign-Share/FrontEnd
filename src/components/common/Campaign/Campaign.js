import React from 'react';
import * as S from './style';

import { good, bad } from '../../../assets/img';

const Campaign = ({ onClick, props }) => {
	return (
		<S.MainWrapper onClick={onClick}>
			<S.Poster src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/09/urbanbrush-20180908081303886995.png" />
			<S.CampaignTextWrapper>
				<S.CampaignPublisher>{props.user_uuid}</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>{props.sub_title}</S.CampaignSubtitle>
					<S.CampaignTitle>{props.title}</S.CampaignTitle>
					<S.CampaignTags>#동물 #기부 #클레어스</S.CampaignTags>
				</S.CampaignSummaryWrapper>
			</S.CampaignTextWrapper>
			<S.CampaignGraphWrapper>
				<S.CampaignLikeIcon src={good} />
				<S.CampaignDisagreeGraph>
					<S.CampaignFlexDiv
						flex={props.agree_number}
						isFull={props.disagree_number === 0}>
						<S.CampaignAgreeNumber>{props.agree_number}</S.CampaignAgreeNumber>
					</S.CampaignFlexDiv>
					<S.CampaignFlexDiv flex={props.disagree_number}>
						<S.CampaignDisagreeNumber>
							{props.disagree_number}
						</S.CampaignDisagreeNumber>
					</S.CampaignFlexDiv>
				</S.CampaignDisagreeGraph>
				<S.CampaignDislikeIcon src={bad} />
			</S.CampaignGraphWrapper>
		</S.MainWrapper>
	);
};

export default Campaign;
