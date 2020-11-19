import React, { useState } from 'react';
import CampaignSearchHeader from '../../components/common/CampaignSearchHeader/CampaignSearchHeader';
import { requestApiWithAccessToken } from '../../APIrequest';
import { useDispatch } from 'react-redux';
import { campaignSearch, user } from '../../modules/CampaignList';
import * as S from '../../components/common/CampaignSearchHeader/style';
import Campaign from '../../components/common/Campaign/Campaign';

const SearchContainer = () => {
	let [posts, setPosts] = useState([]);
	const dispatch = useDispatch();
	const getSearch = (value) => {
		console.log(value);
		requestApiWithAccessToken(
			`/v1/campaigns/sorted-by/famous?start=0&count=6&state=approved&tag=${value}`,
			{},
			{},
			'get',
		).then((res) => {
			dispatch(campaignSearch(res.data.campaigns));
			// dispatch(user(res.data.campaigns.findIndex((i) => i.user_uuid)));
			setPosts(res.data.campaigns);
			console.log(res.data.campaigns.findIndex((i) => i.user_uuid));
		});
		// requestApiWithAccessToken('/v1/users/with-uuids', {}, {}, 'post').then(
		// 	(res) => {
		// 		console.log(res.data);
		// 	},
		// );
	};
	return (
		<React.Fragment>
			<S.SearchSection>
				<div style={{ display: 'flex', width: '100%' }}>
					<CampaignSearchHeader getSearch={getSearch} />
				</div>
				{posts.map((post) => (
					<Campaign props={post} />
				))}
			</S.SearchSection>
		</React.Fragment>
	);
};

export default SearchContainer;
