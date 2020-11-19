import React, { useState } from 'react';
import CampaignSearchHeader from '../../components/common/CampaignSearchHeader/CampaignSearchHeader';
import { requestApiWithAccessToken } from '../../APIrequest';
import Campaign from '../../components/common/Campaign/Campaign';

const SearchContainer = () => {
	let [posts, setPosts] = useState([]);
	const getSearch = (value) => {
		console.log(value);
		requestApiWithAccessToken(
			`/v1/campaigns/sorted-by/famous?start=0&count=6&state=approved&tag=${value}`,
			{},
			{},
			'get',
		).then((res) => {
			console.log(res.data);
			setPosts(res.data.campaigns);
		});
	};
	console.log(posts);
	return (
		<React.Fragment>
			<div style={{ display: 'flex', width: '80%' }}>
				<CampaignSearchHeader getSearch={getSearch} />
			</div>
			{posts.map((post) => (
				<Campaign props={post} />
			))}
		</React.Fragment>
	);
};

export default SearchContainer;
