import React, { useState } from 'react';
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
	const dispatch = useDispatch();
	const viewModal = useSelector((state) => state.viewSuggested);
	const getSearch = (value) => {
		console.log(value);
		requestApiWithAccessToken(
			`/v1/campaigns/sorted-by/famous?start=0&count=6&state=approved&tag=${value}`,
			{},
			{},
			'get',
		).then((res) => {
			dispatch(campaignSearch(res.data.campaigns));
			setPosts(res.data.campaigns);
			console.log(res.data);
			console.log(viewModal);
		});
	};
	const modal = (campaign_uuid) => {
		dispatch(modalOn(campaign_uuid));
	};

	return (
		<React.Fragment>
			<S.SearchSection>
				<div style={{ display: 'flex', width: '100%' }}>
					<CampaignSearchHeader getSearch={getSearch} />
				</div>
				{viewModal.onModal && <ViewInProgressModal />}
				{posts.map((post) => (
					<Campaign props={post} onClick={modal} />
				))}
			</S.SearchSection>
		</React.Fragment>
	);
};

export default SearchContainer;
