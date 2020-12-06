import React from 'react';
import * as S from './style';

import IntroduceTopWrapper from './IntroduceTopWrapper/IntroduceTopWrapper';
import IntroduceBodyWrapper from './IntroduceBodyWrapper/IntroduceBodyWrapper';

import BackgroundIMG from '../../assets/img/background.png';

const Introduce = () => {
	return (
		<S.MainWrapper url={BackgroundIMG}>
			<IntroduceTopWrapper />
			<IntroduceBodyWrapper />
		</S.MainWrapper>
	);
};

export default Introduce;
