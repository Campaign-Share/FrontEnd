import React, { useState } from 'react';
import * as S from './style';
import { good, bad, member } from '../../../assets/img/index';

const MyCampaign = ({ props, onClick }) => {
	const imgUrl = 'https://campaignshare.s3.ap-northeast-2.amazonaws.com/';
	const text = props.user_uuid;
	const tags = props.campaign_tags;
	const number = props.agree_number;
	const campaign = props.campaign_uuid;
	let [isGraph, setIsGraph] = useState(true);
	// if (number == 0) {
	// 	setIsGraph(false);
	// } else setIsGraph(true);

	return (
		<S.MainWrapper onClick={onClick}>
			<S.Poster src={imgUrl + props.post_uri} />
			<S.CampaignTextWrapper>
				<S.CampaignPublisher text={text.length}>{text}</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>{props.sub_title}</S.CampaignSubtitle>
					<S.CampaignTitle>{props.title}</S.CampaignTitle>
					{/* {tags.map((tag) => (
						<S.CampaignTags>{tag}</S.CampaignTags>
					))} */}
					<S.CampaignTags>{tags}</S.CampaignTags>
				</S.CampaignSummaryWrapper>
			</S.CampaignTextWrapper>
			{isGraph ? (
				<S.CampaignGraphWrapper>
					<S.CampaignLikeIcon src={good} />
					<S.CampaignDisagreeGraph>
						<S.CampaignFlexDiv>
							<S.CampaignAgreeNumber>
								{props.agree_number}
							</S.CampaignAgreeNumber>
						</S.CampaignFlexDiv>
						<S.CampaignFlexDiv>
							<S.CampaignDisagreeNumber>
								{props.disagree_number}
							</S.CampaignDisagreeNumber>
						</S.CampaignFlexDiv>
					</S.CampaignDisagreeGraph>
				</S.CampaignGraphWrapper>
			) : (
				<S.CampaignMember>
					<S.Member src={member} />
					{props.participation_number}
				</S.CampaignMember>
			)}
		</S.MainWrapper>
	);
};

export default MyCampaign;
