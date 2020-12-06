import React from 'react';
import * as S from './style';

import CompleteTopWrapper from './CompleteTopWrapper/CompleteTopWrapper';
import CompleteBodyWrapper from './CompleteBodyWrapper/CompleteBodyWrapper';

import { background } from '../../assets/img';

const Complete = () => {
	return (
		<S.MainWrapper url={background}>
			<CompleteTopWrapper />
			<CompleteBodyWrapper />
		</S.MainWrapper>
	);
};

export default Complete;
