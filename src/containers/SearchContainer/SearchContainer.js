import React from 'react';
import CampaignSearchHeader from '../../components/common/CampaignSearchHeader/CampaignSearchHeader';

const SearchContainer = () => {
	const getSearch = (value) => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<CampaignSearchHeader getSearch={getSearch} />
		</React.Fragment>
	);
};

export default SearchContainer;
