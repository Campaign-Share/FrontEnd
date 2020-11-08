import React from 'react';
import * as S from './style';

import { Logo } from '../../../assets/img';

const IntroduceTopWrapper = () => {
	return (
		<S.TopWrapper>
			<S.LogoWrapper>
				<S.Logo src={Logo} />
			</S.LogoWrapper>
			<S.LinkWrapper>
				<S.Link href="/login">Login</S.Link>
				<S.Link href="/signUp/input">Join Us</S.Link>
			</S.LinkWrapper>
		</S.TopWrapper>
	);
};

export default IntroduceTopWrapper;
