import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { modalOn } from '../../../../modules/viewInProgress';
import MyCampaign from '../../../common/Campaign/MyCampaign';
import CampaignSearchHeader from '../../../common/CampaignSearchHeader/CampaignSearchHeader';
import * as S from './style';

const CampaignsList = ({ isSuggested, isSelect }) => {
	const headerList = [
		{ id: 1, text: '참여한 캠페인' },
		{ id: 2, text: '수락된 캠페인' },
		{ id: 3, text: '거절된 캠페인' },
	];

	let [isPick, setIsPick] = useState('0');
	const dispatch = useDispatch();
	const history = useHistory();

	const myPageList = useSelector((store) => store.list.campaigns);
	const campaign = useSelector((store) => store.list.isCampaign);

	const onModal = (campaign_uuid) => {
		dispatch(modalOn(campaign_uuid));
	};

	const listChange = (id) => {
		setIsPick(id);
		switch (id) {
			case 1: {
				history.push('/main/mypage/participationList');
				break;
			}
			case 2: {
				history.push('/main/mypage/acceptList');
				break;
			}
			case 3: {
				history.push('/main/mypage/refusalList');
				break;
			}
		}
	};

	useEffect(() => {
		switch (isPick) {
			case '0':
				setIsPick('0');
				break;
			case '1':
				setIsPick('1');
				break;
			case '2':
				setIsPick('2');
				break;
		}
	});
	return (
		<S.MainContainer>
			<S.ListContainer>
				<CampaignSearchHeader />
				<S.HeaderBox>
					{headerList.map((item) => (
						<S.Filtering
							key={item.id}
							id={item.id}
							pick={isPick}
							select={isSelect}
							onClick={() => listChange(item.id)}>
							{item.text}
						</S.Filtering>
					))}
				</S.HeaderBox>
				{myPageList.map((item) => (
					<MyCampaign
						props={item}
						onClick={onModal}
						isSuggested={isSuggested}
						isCampaign={campaign}
					/>
				))}
			</S.ListContainer>
		</S.MainContainer>
	);
};

export default CampaignsList;
