import React from 'react';
import * as S from './style';

import { Logo } from '../../../assets/img';

const CompleteTopWrapper = () => {
	return (
		<S.TopWrapper>
			<S.LogoWrapper>
				<S.Logo src={Logo} />
			</S.LogoWrapper>
		</S.TopWrapper>
	);
};

export default CompleteTopWrapper;
