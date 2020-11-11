import React from 'react';
import * as S from './style';

const Campaign = () => {
	return (
		<S.MainWrapper>
			<S.Poster src="https://img1.bizhows.com/bhfile01/__CM_FILE_DATA/201911/20/18/1481579_1574242985072.jpg" />
			<S.CampaignTextWrapper>
				<S.CampaignPublisher>Interpark</S.CampaignPublisher>
				<S.CampaignSummaryWrapper>
					<S.CampaignSubtitle>대한민국 독서량 절벽!</S.CampaignSubtitle>
					<S.CampaignTitle>독서지원 캠페인</S.CampaignTitle>
				</S.CampaignSummaryWrapper>
			</S.CampaignTextWrapper>
			<S.CampaignGraphWrapper></S.CampaignGraphWrapper>
		</S.MainWrapper>
	);
};

export default Campaign;
