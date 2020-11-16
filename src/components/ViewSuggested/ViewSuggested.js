import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalOn, changeSortBy } from '../../modules/viewSuggested';
import * as S from './style';

import CampaignSearchHeader from '../common/CampaignSearchHeader/CampaignSearchHeader';
import Campaign from '../common/Campaign/Campaign';

const ViewSuggested = () => {
	const [isSelected, setIsSelected] = useState('1');
	const campaignList = useSelector((store) => store.viewSuggested.campaigns);
	const dispatch = useDispatch();

	useEffect(() => {
		switch (isSelected) {
			case '1':
				setIsSelected('1');
				dispatch(changeSortBy('create-time'));
				break;
			case '2':
				setIsSelected('2');
				dispatch(changeSortBy('famous'));
				break;
			case '3':
				setIsSelected('3');
				dispatch(changeSortBy('random'));
				break;
			default:
				setIsSelected('1');
		}
	}, [isSelected]);

	const changeSelect = (id) => {
		setIsSelected(id);
	};

	const onModalDispatch = () => {
		dispatch(modalOn());
	};

	const sortTextArray = [
		{
			id: '1',
			sortText: '최신순',
		},
		{
			id: '2',
			sortText: '인기순',
		},
		{
			id: '3',
			sortText: '랜덤순',
		},
	];

	return (
		<>
			<S.RightWrapper>
				<CampaignSearchHeader />
				<S.SortTextWrapper>
					{sortTextArray.map((item) => (
						<S.SortText
							key={item.id}
							id={item.id}
							selected={isSelected}
							onClick={() => changeSelect(item.id)}>
							{item.sortText}
						</S.SortText>
					))}
				</S.SortTextWrapper>
				<S.BodyWrapper>
					{campaignList.map((item) => (
						<Campaign
							key={item.campaign_uuid}
							props={item}
							onClick={onModalDispatch}
						/>
					))}
				</S.BodyWrapper>
			</S.RightWrapper>
		</>
	);
};

export default ViewSuggested;
