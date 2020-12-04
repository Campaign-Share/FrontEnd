import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import MyCampaign from '../../../components/common/Campaign/MyCampaign';
import CampaignsList from '../../../components/Profile/mypage/CampaignList/CampaignsList';
import {
	campaignList,
	campaignOff,
	campaignOn,
} from '../../../modules/CampaignList';

const ListContainer = (props) => {
	const url = props.match.url;
	const uuid = localStorage.getItem('user_uuid');
	const dispatch = useDispatch();
	let [count, setCount] = useState(6);
	let [loading, setLoading] = useState(false);
	let [component, setComponent] = useState(<></>);

	const onParticipationList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/participate-campaigns?start=0&count=${count}`,

			{},
			{},
			'get',
		).then((res) => {
			console.log(res.data);
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
			console.log(res.data);
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
			console.log(res.data);
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
		} else 0;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		if (url === '/main/mypage/participationList') {
			onParticipationList();
			setComponent(<CampaignsList isSuggested={false} isSelect={1} />);
		} else if (url === '/main/mypage/acceptList') {
			onAcceptList();
			setComponent(<CampaignsList isSuggested={true} isSelect={2} />);
		} else if (url === '/main/mypage/refusalList') {
			onRefusalList();
			setComponent(<CampaignsList isSuggested={false} isSelect={3} />);
		} else 0;
	}, [url]);

	return <React.Fragment>{component}</React.Fragment>;
};
export default ListContainer;
