import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

import { profile } from '../../../assets/img';

const SuggestHeader = () => {
	const history = useHistory();

	return (
		<S.Header>
			<S.HeaderIcon
				src={profile}
				onClick={() => history.push('/main/mypage')}
			/>
		</S.Header>
	);
};

export default SuggestHeader;
