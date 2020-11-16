import React from 'react';
import * as S from './style';
import Campaign from '../../../common/Campaign/Campaign';

const RefusalCampaign = () => {
	return (
		<S.MainContainer>
			<S.BodyContainer>
				<Campaign />
				<Campaign />
				<Campaign />
			</S.BodyContainer>
		</S.MainContainer>
	);
};

export default RefusalCampaign;
