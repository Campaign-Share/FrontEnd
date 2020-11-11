import React from 'react';
import * as S from './style';

import { good, bad } from '../../../assets/img';

const Campaign = () => {
	const agree = 10;
	const disagree = 2;
	const agreeWidth = agree / (agree + disagree);

	return (
		<S.MainWrapper>
			<S.Poster src="https://img1.bizhows.com/bhfile01/__CM_FILE_DATA/201911/20/18/1481579_1574242985072.jpg" />
			<S.CampaignTextWrapper>
				<S.CampaignPublisher>Interpark</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>대한민국 독서량 절벽!</S.CampaignSubtitle>
					<S.CampaignTitle>독서지원 캠페인</S.CampaignTitle>
					<S.CampaignTags>#동물 #기부 #클레어스</S.CampaignTags>
				</S.CampaignSummaryWrapper>
			</S.CampaignTextWrapper>
			<S.CampaignGraphWrapper>
				<S.CampaignLikeIcon src={good} />
				<S.CampaignDisagreeGraph>
					<S.CampaignAgreeGraph agreeWidth={agreeWidth}></S.CampaignAgreeGraph>
				</S.CampaignDisagreeGraph>
				<S.CampaignDislikeIcon src={bad} />
			</S.CampaignGraphWrapper>
		</S.MainWrapper>
	);
};

export default Campaign;
