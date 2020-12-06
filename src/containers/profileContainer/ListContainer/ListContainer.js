import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import CampaignsList from '../../../components/Profile/mypage/CampaignList/CampaignsList';
import {
	campaignList,
	campaignOff,
	campaignOn,
} from '../../../modules/CampaignList';
import MypageModal from '../../../components/Modal/MypageModal/MypageModal';
import MypageReport from '../../../components/Modal/ReportModal/MypageReport';

const ListContainer = (props) => {
	const url = props.match.url;
	const uuid = localStorage.getItem('user_uuid');
	const dispatch = useDispatch();
	let [count, setCount] = useState(6);
	let [loading, setLoading] = useState(false);

	let [component, setComponent] = useState(<></>);

	const myPageCampaign = useSelector((state) => state.list);
	const report = useSelector((state) => state.reportModal);

	const onParticipationList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/participate-campaigns?start=0&count=${count}`,
			{},
			{},
			'get',
		).then((res) => {
			if (res.data.campaigns.length == 0) dispatch(campaignOff());
			else {
				dispatch(campaignList(res.data.campaigns));
				dispatch(campaignOn());
				setLoading(true);
			}
		});
	});

	const onAcceptList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=approved`,
			{},
			{},
			'get',
		).then((res) => {
			if (res.data.campaigns.length == 0) dispatch(campaignOff());
			else {
				dispatch(campaignList(res.data.campaigns));
				dispatch(campaignOn());
				setLoading(true);
			}
		});
	});

	const onRefusalList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=rejected`,
			{},
			{},
			'get',
		).then((res) => {
			if (res.data.campaigns.length == 0) dispatch(campaignOff());
			else {
				dispatch(campaignList(res.data.campaigns));
				dispatch(campaignOn());
				setLoading(true);
			}
		});
	});

	const onRegisterList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=pending`,
			{},
			{},
			'get',
		).then((res) => {
			if (res.data.campaigns.length == 0) dispatch(campaignOff());
			else {
				dispatch(campaignList(res.data.campaigns));
				dispatch(campaignOn());
				setLoading(true);
			}
		});
	});

	const handleScroll = useCallback(() => {
		const scrollHeight = document.documentElement.scrollHeight - 1;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && loading === true) {
			setLoading(false);
			setCount((count) => count + 6);
		}
	}, [loading]);

	useEffect(() => {
		if (url === '/main/mypage/participationList') {
			onParticipationList();
		} else if (url === '/main/mypage/acceptList') {
			onAcceptList();
		} else if (url === '/main/mypage/refusalList') {
			onRefusalList();
		} else if (url === '/main/mypage/registerList') {
			onRegisterList();
		} else 0;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		if (url === '/main/mypage/participationList') {
			onParticipationList();
			setComponent(
				<CampaignsList isSuggested={false} isSelect={1} isRefusal={false} />,
			);
		} else if (url === '/main/mypage/registerList') {
			onRegisterList();
			setComponent(
				<CampaignsList isSuggested={true} isSelect={2} isRefusal={true} />,
			);
		} else if (url === '/main/mypage/acceptList') {
			onAcceptList();
			setComponent(
				<CampaignsList isSuggested={false} isSelect={3} isRefusal={false} />,
			);
		} else if (url === '/main/mypage/refusalList') {
			onRefusalList();
			setComponent(
				<CampaignsList isSuggested={false} isSelect={4} isRefusal={true} />,
			);
		}
	}, [url]);

	return (
		<React.Fragment>
			{myPageCampaign.modal && <MypageModal />}
			{report.onReportModal && <MypageReport />}
			{component}
		</React.Fragment>
	);
};
export default ListContainer;
