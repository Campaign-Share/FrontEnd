import React from 'react';
import * as S from './style';

import BackgroundIMG from '../../assets/img/background.png';
import Logo from '../../assets/img/Logo.png';

const Introduce = () => {
	return (
		<S.MainWrapper url={BackgroundIMG}>
			<S.Logo src={Logo} />
		</S.MainWrapper>
	);
};

export default Introduce;
