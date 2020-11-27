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
	let list;
	const dispatch = useDispatch();
	const onList = () => {
		dispatch(campaignList);
	};
	let [count, setCount] = useState(6);
	let [loading, setLoading] = useState(true);

	const onParticipationList = useCallback(() => {
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
			}
		});
	});

	switch (url) {
		case '/main/mypage/participationList': {
			onParticipationList();
			list = <CampaignsList isSuggested={false} isSelect={1} />;
			break;
		}
		case '/main/mypage/acceptList': {
			onAcceptList();
			list = <CampaignsList isSuggested={true} isSelect={2} />;
			break;
		}
		case '/main/mypage/refusalList': {
			onRefusalList();
			list = <CampaignsList isSuggested={true} isSelect={3} />;
			break;
		}
	}

	return <React.Fragment>{list}</React.Fragment>;
};
export default ListContainer;
