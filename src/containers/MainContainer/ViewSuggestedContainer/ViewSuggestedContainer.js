import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList } from '../../../modules/viewSuggested';
import ViewSuggestedModal from '../../../components/Modal/ViewSuggestedModal/ViewSuggestedModal';
import ViewSuggested from '../../../components/ViewSuggested/ViewSuggested';
import { requestApiWithAccessToken } from '../../../APIrequest';

import ViewInProgressModal from '../../../components/Modal/ViewInProgressModal/ViewInProgressModal';

const ViewSuggestedContainer = () => {
	const dispatch = useDispatch();
	const viewSuggestedRedux = useSelector((state) => state.viewSuggested);

	const getCampaign = async () => {
		let count = 6,
			start = viewSuggestedRedux.index,
			sortBy = viewSuggestedRedux.sortBy;

		const res = await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				start +
				'&count=' +
				count +
				'&state=pending',
			{},
			{},
			'get',
		);
		dispatch(getCampaignList(res.data));
	};

	useEffect(() => {
		getCampaign();
	}, [viewSuggestedRedux.sortBy]);

	return (
		<>
			{viewSuggestedRedux.onModal && <ViewInProgressModal />}
			<ViewSuggested />
		</>
	);
};

export default ViewSuggestedContainer;
