import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCampaignList } from '../../../modules/viewSuggested';
import ReportModal from '../../../components/Modal/ReportModal/ReportModal';
import ViewSuggestedModal from '../../../components/Modal/ViewSuggestedModal/ViewSuggestedModal';
import ViewSuggested from '../../../components/ViewSuggested/ViewSuggested';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewSuggestedContainer = () => {
	const [fetching, setFetching] = useState(false);
	const [index, setIndex] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();
	const reportModalRedux = useSelector((state) => state.reportModal);
	const viewSuggestedRedux = useSelector((state) => state.viewSuggested);

	const getCampaign = async () => {
		let count = 6,
			sortBy = viewSuggestedRedux.sortBy;

		await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				index +
				'&count=' +
				count +
				'&state=pending',
			{},
			{},
			'get',
		).then((res) => {
			if (res.data.status !== 200) {
				alert('인증 오류');
				history.push('/login');
				return;
			}
			dispatch(getCampaignList(res.data));
			setIndex((index) => index + 6);
		});
	};

	const getMoreCampaignInfo = async () => {
		let count = 6,
			sortBy = viewSuggestedRedux.sortBy;

		setFetching(true);
		const res = await requestApiWithAccessToken(
			'/v1/campaigns/sorted-by/' +
				sortBy +
				'?start=' +
				index +
				'&count=' +
				count +
				'&state=pending',
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
	}, [viewSuggestedRedux.sortBy]);

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
				<ReportModal modalCaller="viewSuggested" />
			)}
			{viewSuggestedRedux.onModal && <ViewSuggestedModal />}
			<ViewSuggested />
		</>
	);
};

export default ViewSuggestedContainer;
