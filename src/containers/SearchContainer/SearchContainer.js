import React, { useState, useEffect, useCallback } from 'react';
import CampaignSearchHeader from '../../components/common/CampaignSearchHeader/CampaignSearchHeader';
import { requestApiWithAccessToken } from '../../APIrequest';
import { useDispatch, useSelector } from 'react-redux';
import { campaignSearch } from '../../modules/CampaignList';
import * as S from '../../components/common/CampaignSearchHeader/style';
import Campaign from '../../components/common/Campaign/Campaign';
import { modalOn } from '../../modules/viewInProgress';
import ViewInProgressModal from '../../components/Modal/ViewInProgressModal/ViewInProgressModal';

const SearchContainer = () => {
	let [posts, setPosts] = useState([]);
	let [loading, setLoading] = useState(true);
	let [count, setCount] = useState(6);
	let [isSearch, setIsSearch] = useState(false);
	let [searchValue, setSearchValue] = useState('');
	let [first, setFirst] = useState(false);
	const dispatch = useDispatch();
	const viewModal = useSelector((state) => state.viewSuggested);
	const getSearch = (value) => {
		if (value) {
			requestApiWithAccessToken(
				`/v1/campaigns/sorted-by/famous?start=0&count=${count}&state=approved&tag=${value}`,
				{},
				{},
				'get',
			).then((res) => {
				if (res.data.campaigns.length == 0) {
					setIsSearch(true);
					setFirst(false);
				} else {
					dispatch(campaignSearch(res.data.campaigns));
					setPosts(res.data.campaigns);
					setIsSearch(false);
				}
			});
		} else setFirst(true);
	};

	const modal = (campaign_uuid) => {
		dispatch(modalOn(campaign_uuid));
	};

	const isValue = (value) => {
		setSearchValue(value);
	};

	const handleScroll = useCallback(() => {
		const scrollHeight = document.documentElement.scrollHeight - 1;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && loading === true)
			setLoading(false);
		setCount((count) => count + 6);
	}, [loading]);

	useEffect(() => {
		getSearch(searchValue);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return (
		<React.Fragment>
			<S.SearchSection>
				<S.HeaderSection>
					<CampaignSearchHeader getSearch={getSearch} isValue={isValue} />
				</S.HeaderSection>
				{viewModal.onModal && <ViewInProgressModal />}

				<S.ContentSection isSearch={isSearch}>
					{posts.map((post) => (
						<Campaign props={post} onClick={modal} />
					))}
				</S.ContentSection>
				{isSearch && (
					<S.SearchSpace>
						<S.Space>검색 결과가 존재하지 않습니다.</S.Space>
					</S.SearchSpace>
				)}
				{first && (
					<S.SearchSpace>
						<S.Space>검색어를 입력해 주세요.</S.Space>
					</S.SearchSpace>
				)}
			</S.SearchSection>
		</React.Fragment>
	);
};

export default SearchContainer;
