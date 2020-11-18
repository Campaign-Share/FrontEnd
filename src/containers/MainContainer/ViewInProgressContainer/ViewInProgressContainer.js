import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList } from '../../../modules/viewInProgress';
import ReportModal from '../../../components/Modal/ReportModal/ReportModal';
import ViewInProgressModal from '../../../components/Modal/ViewInProgressModal/ViewInProgressModal';
import ViewInProgress from '../../../components/ViewInProgress/ViewInProgress';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewInProgressContainer = () => {
	const dispatch = useDispatch();
	const reportModalRedux = useSelector((state) => state.reportModal);
	const viewInProgressRedux = useSelector((state) => state.viewInProgress);

	const getCampaign = async () => {
		let count = 6,
			start = viewInProgressRedux.index,
			sortBy = viewInProgressRedux.sortBy;

		const res = await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				start +
				'&count=' +
				count +
				'&state=approved',
			{},
			{},
			'get',
		);
		dispatch(getCampaignList(res.data));
	};

	useEffect(() => {
		// 초기 6개
		getCampaign();
	}, [viewInProgressRedux.sortBy]);

	return (
		<>
			{reportModalRedux.onReportModal && (
				<ReportModal modalCaller="viewInProgress" />
			)}
			{viewInProgressRedux.onModal && <ViewInProgressModal />}
			<ViewInProgress />
		</>
	);
};

export default ViewInProgressContainer;
