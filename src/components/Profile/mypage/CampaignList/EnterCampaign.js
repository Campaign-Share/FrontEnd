import React from 'react';
import { defaultImg } from '../../../../assets/img';
import Campaign from '../../../common/Campaign/Campaign';
import * as S from './style';

const EnterCampaign = () => {
	return (
		<S.MainContainer>
			<S.BodyContainer>
				<Campaign />
				<Campaign />
				<Campaign />
				<Campaign />
				<Campaign />
			</S.BodyContainer>
		</S.MainContainer>
	);
};

export default EnterCampaign;
