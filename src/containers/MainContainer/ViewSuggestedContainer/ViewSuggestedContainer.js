import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList } from '../../../modules/viewSuggested';
import ReportModal from '../../../components/Modal/ReportModal/ReportModal';
import ViewSuggestedModal from '../../../components/Modal/ViewSuggestedModal/ViewSuggestedModal';
import ViewSuggested from '../../../components/ViewSuggested/ViewSuggested';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewSuggestedContainer = () => {
	const dispatch = useDispatch();
	const reportModalRedux = useSelector((state) => state.reportModal);
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
		// 초기 6개
		getCampaign();
	}, [viewSuggestedRedux.sortBy]);

	return (
		<>
			{reportModalRedux.onReportModal && (
				<ReportModal modalCaller="viewSuggested" />
			)}
			{viewSuggestedRedux.onModal && <ViewSuggestedModal />}
			<ViewSuggested />
		</>
	);
};

export default ViewSuggestedContainer;
