import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import MyCampaign from '../../../components/common/Campaign/MyCampaign';
import CampaignsList from '../../../components/Profile/mypage/CampaignList/CampaignsList';
import { campaignList } from '../../../modules/CampaignList';
const ListContainer = (props) => {
	const url = props.match.url;
	const uuid = localStorage.getItem('user_uuid');
	let list;
	const dispatch = useDispatch();
	const onList = () => {
		dispatch(campaignList);
	};
	let [count, setCount] = useState(6);
	let [loading, setLoading] = useState(false);

	const onParticipationList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=pending`,
			{},
			{},
			'get',
		).then((res) => {
			dispatch(campaignList(res.data.campaigns));
		});
	});

	const onAcceptList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=approved`,
			{},
			{},
			'get',
		).then((res) => {
			dispatch(campaignList(res.data.campaigns));
		});
	});

	const onRefusalList = useCallback(() => {
		requestApiWithAccessToken(
			`/v1/users/uuid/${uuid}/campaigns?start=0&count=${count}&state=rejected`,
			{},
			{},
			'get',
		).then((res) => {
			dispatch(campaignList(res.data.campaigns));
		});
	});

	switch (url) {
		case '/main/mypage/participationList': {
			list = <CampaignsList isSuggested={false} />;
			onParticipationList();
			break;
		}
		case '/main/mypage/acceptList': {
			list = <CampaignsList isSuggested={true} />;
			onAcceptList();
			break;
		}
		case '/main/mypage/refusalList': {
			list = <CampaignsList isSuggested={true} />;
			onRefusalList();
			break;
		}
	}

	return <React.Fragment>{list}</React.Fragment>;
};
export default ListContainer;
