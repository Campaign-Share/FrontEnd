import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { campaingModal } from '../../../../modules/CampaignList';
import Campaign from '../../../common/Campaign/Campaign';
import MyCampaign from '../../../common/Campaign/MyCampaign';
import CampaignSearchHeader from '../../../common/CampaignSearchHeader/CampaignSearchHeader';
import * as S from './style';

const CampaignsList = () => {
	const headerList = [
		{ id: 1, text: '참여한 캠페인' },
		{ id: 2, text: '수락된 캠페인' },
		{ id: 3, text: '거절된 캠페인' },
	];

	const myPageList = useSelector((store) => store.list.campaigns);
	const dispatch = useDispatch();
	const history = useHistory();

	const onModal = () => {
		dispatch(campaingModal());
	};

	const listChange = (item) => {
		switch (item.id) {
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
	return (
		<S.MainContainer>
			<S.ListContainer>
				<CampaignSearchHeader />
				<S.HeaderBox>
					{headerList.map((item) => (
						<S.textBox>
							<S.Filtering
								key={item.id}
								id={item.id}
								onClick={() => listChange(item)}>
								{item.text}
							</S.Filtering>
						</S.textBox>
					))}
				</S.HeaderBox>
				{myPageList.map((item) => (
					<MyCampaign props={item} onClick={onModal} />
				))}
			</S.ListContainer>
		</S.MainContainer>
	);
};

export default CampaignsList;
