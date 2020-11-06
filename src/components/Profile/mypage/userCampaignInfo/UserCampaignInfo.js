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
						<S.Stick color={'#ABC9C7'} height={count.a}/>
						<S.Stick color={`#61A5B3`} height={count.b}/>
						<S.Stick color={`#78BBA8`} height={count.c}/>
					</S.StickBox>
					<S.Line />
					<S.NumberBox>
						<S.Number >{count.a}</S.Number>
						<S.Number >{count.b}</S.Number>
						<S.Number >{count.c}</S.Number>
					</S.NumberBox>
				</S.GraphBox>
			</S.UserCampaign>
		</S.UserCampaignBox>
	);
};
export default UserCampaignInfo;
