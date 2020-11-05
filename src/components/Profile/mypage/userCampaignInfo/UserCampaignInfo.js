import React, { useEffect, useState } from 'react';
import * as S from './style';
import CampaignHowMuch from '../campaignHowMuch/CampaignHowMuch';

const UserCampaignInfo = ({ userInfo }) => {
	const [count, setCount] = useState({});
	useEffect(() => {
		userInfo.userData.campaign_number &&
			setCount({
				a: userInfo.userData.campaign_number.accept,
				b: userInfo.userData.campaign_number.reject,
				c: userInfo.userData.campaign_number.participate,
			});
	}, [userInfo.userData.campaign_number]);
	return (
		<S.UserCampaignBox>
			<S.UserCampaign>
				<CampaignHowMuch></CampaignHowMuch>
				<S.GraphBox>
					<S.StickBox>
						<S.Stick color={'#ABC9C7'} />
						<S.Stick color={`#61A5B3`} />
						<S.Stick color={`#78BBA8`} />
					</S.StickBox>
					<S.Line />
					<S.NumberBox>
						<S.Number height={count.a}>{count.a}</S.Number>
						<S.Number height={count.b}>{count.b}</S.Number>
						<S.Number height={count.c}>{count.c}</S.Number>
					</S.NumberBox>
				</S.GraphBox>
			</S.UserCampaign>
		</S.UserCampaignBox>
	);
};
export default UserCampaignInfo;
