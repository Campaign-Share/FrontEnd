import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList } from '../../../modules/viewInProgress';
import ReportModal from '../../../components/Modal/ReportModal/ReportModal';
import ViewInProgressModal from '../../../components/Modal/ViewInProgressModal/ViewInProgressModal';
import ViewInProgress from '../../../components/ViewInProgress/ViewInProgress';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewInProgressContainer = () => {
	const [fetching, setFetching] = useState(false);
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const reportModalRedux = useSelector((state) => state.reportModal);
	const viewInProgressRedux = useSelector((state) => state.viewInProgress);

	const getCampaign = async () => {
		let count = 6,
			sortBy = viewInProgressRedux.sortBy;

		const res = await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				index +
				'&count=' +
				count +
				'&state=approved',
			{},
			{},
			'get',
		);
		dispatch(getCampaignList(res.data));
		setIndex((index) => index + 6);
	};

	const getMoreCampaignInfo = async () => {
		let count = 6,
			sortBy = viewInProgressRedux.sortBy;

		setFetching(true);
		const res = await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				index +
				'&count=' +
				count +
				'&state=approved',
			{},
			{},
			'get',
		);

		dispatch(getCampaignList(res.data));
		setFetching(false);
		setIndex((index) => index + 6);
	};

	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight - 1;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && fetching === false)
			getMoreCampaignInfo();
	};

	useEffect(() => {
		setIndex(0);
	}, [viewInProgressRedux.sortBy]);

	useEffect(() => {
		if (index === 0) getCampaign();
	}, [index]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [index]);

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
