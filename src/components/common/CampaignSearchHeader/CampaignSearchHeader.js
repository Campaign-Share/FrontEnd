import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import { profile, search } from '../../../assets/img';
import { requestApiWithAccessToken } from '../../../APIrequest';

const CampaignSearchHeader = ({ getSearch, isValue }) => {
	const history = useHistory();
	const imgUrl = 'https://campaignshare.s3.ap-northeast-2.amazonaws.com/';
	let [value, setValue] = useState('');
	let [img, setImg] = useState('');
	let [isImg, setIsImg] = useState(false);

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
			isValue(values);
		} else {
			alert('잘못된 검색입니다. 태그로 검색해 주세요.');
		}
	};

	const searchKey = () => {
		if (window.event.keyCode == 13) onSearch();
	};

	useEffect(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${localStorage.getItem('user_uuid')}`,
			{},
			{},
			'get',
		).then((res) => {
			console.log(res.data);
			if (res.data.profile_uri) {
				setIsImg(true);
				setImg(imgUrl + res.data.profile_uri);
			} else setIsImg(false);
		});
	});
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
				<S.HeaderIcon src={isImg ? img : profile} onClick={myPage} />
			</S.Header>
		</React.Fragment>
	);
};

export default CampaignSearchHeader;
