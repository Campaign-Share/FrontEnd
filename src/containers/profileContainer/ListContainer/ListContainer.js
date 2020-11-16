import React from 'react';
import AcceptCampaign from '../../../components/Profile/mypage/CampaignList/AcceptCampaign';
import EnterCampaign from '../../../components/Profile/mypage/CampaignList/EnterCampaign';
import RefusalCampaign from '../../../components/Profile/mypage/CampaignList/RefusalCampaign';

const ListContainer = (props) => {
	const url = props.match.url;
	let list;
	switch (url) {
		case '/main/mypage/enterList': {
			list = <EnterCampaign />;
			break;
		}
		case '/main/mypage/acceptList': {
			list = <AcceptCampaign />;
			break;
		}
		case '/main/mypage/refusalList': {
			list = <RefusalCampaign />;
			break;
		}
	}
	return <React.Fragment>{list}</React.Fragment>;
};
export default ListContainer;
