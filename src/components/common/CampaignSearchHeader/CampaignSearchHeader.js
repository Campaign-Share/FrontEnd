import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

// search 이미지 삽입 중
import { profile, search } from '../../../assets/img';

const CampaignSearchHeader = () => {
	const history = useHistory();

	return (
		<S.Header>
			<S.SearchBarWrapper>
				<S.SearchBar placeholder="Search" />
				<S.SearchIcon src={search} />
			</S.SearchBarWrapper>
			<S.HeaderIcon src={profile} onClick={() => history.push('/mypage')} />
		</S.Header>
	);
};

export default CampaignSearchHeader;
