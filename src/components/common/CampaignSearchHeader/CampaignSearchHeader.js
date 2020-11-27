import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import { profile, search } from '../../../assets/img';

const CampaignSearchHeader = ({ getSearch }) => {
	const history = useHistory();
	let [value, setValue] = useState('');

	const inputChange = (e) => {
		setValue(e.target.value);
	};
	const inputFocus = () => {
		history.push('/main/search');
	};
	const myPage = () => {
		history.push('/main/mypage');
	};

	const onSearch = () => {
		if (value.charAt(0) == '#') {
			const values = value.substr(1);
			getSearch(values);
		} else {
			alert('잘못된 검색입니다. 태그로 검색해 주세요.');
		}
	};

	const searchKey = () => {
		if (window.event.keyCode == 13) onSearch();
	};

	return (
		<React.Fragment>
			<S.Header>
				<S.SearchBarWrapper>
					<S.SearchBar
						placeholder="Search"
						onChange={inputChange}
						onFocus={inputFocus}
						onKeyUp={searchKey}
					/>
					<S.SearchIcon src={search} onClick={onSearch} />
				</S.SearchBarWrapper>
				<S.HeaderIcon src={profile} onClick={myPage} />
			</S.Header>
		</React.Fragment>
	);
};

export default CampaignSearchHeader;
