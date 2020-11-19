import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { campaignModal } from '../../../../modules/CampaignList';
import Campaign from '../../../common/Campaign/Campaign';
import MyCampaign from '../../../common/Campaign/MyCampaign';
import CampaignSearchHeader from '../../../common/CampaignSearchHeader/CampaignSearchHeader';
import * as S from './style';

const CampaignsList = (isSuggested) => {
	const headerList = [
		{ id: 1, text: '참여한 캠페인' },
		{ id: 2, text: '수락된 캠페인' },
		{ id: 3, text: '거절된 캠페인' },
	];

	let [isPick, setIsPick] = useState('0');
	const myPageList = useSelector((store) => store.list.campaigns);
	const dispatch = useDispatch();
	const history = useHistory();

	const onModal = () => {
		dispatch(campaingModal());
	};
	console.log(isSuggested);

	const listChange = (id) => {
		setIsPick(id);
		switch (id) {
			case 1: {
				history.push('/main/mypage/participationList');
				isSuggested = false;
				break;
			}
			case 2: {
				history.push('/main/mypage/acceptList');
				isSuggested = true;
				break;
			}
			case 3: {
				history.push('/main/mypage/refusalList');
				isSuggested = true;
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
					/>
				))}
			</S.ListContainer>
		</S.MainContainer>
	);
};

export default CampaignsList;
