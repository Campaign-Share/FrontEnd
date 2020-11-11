import React from 'react';
import * as S from './style';

import CampaignSearchHeader from '../common/CampaignSearchHeader/CampaignSearchHeader';
import SideBar from '../Navigation/sideBar/SideBar';
import Campaign from '../common/Campaign/Campaign';

const ViewSuggested = () => {
	return (
		<S.MainWrapper>
			<SideBar />
			<S.RightWrapper>
				<CampaignSearchHeader />
				<S.SortTextWrapper>
					<S.SortText selected>최신순</S.SortText>
					<S.SortText>인기순</S.SortText>
					<S.SortText>랜덤순</S.SortText>
				</S.SortTextWrapper>
				<S.BodyWrapper>
					<Campaign />
					<Campaign />
					<Campaign />
				</S.BodyWrapper>
			</S.RightWrapper>
		</S.MainWrapper>
	);
};

export default ViewSuggested;
