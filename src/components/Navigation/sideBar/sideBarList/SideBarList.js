import React from 'react';
import * as S from './style.js';
import campaignWorking from '../../../../assets/img/ing.png';
import medal from '../../../../assets/img/medal.png';
import proposal from '../../../../assets/img/proposal.png';
import upload from '../../../../assets/img/upload.png';
import proposalF from '../../../../assets/img/proposalFocus.png';
import medalF from '../../../../assets/img/medalFocus.png';
import campaignWoringF from '../../../../assets/img/ingFocus.png';
import uploadF from '../../../../assets/img/uploadFocus.png';

const ItemList = [
	{ img: medal, text: '명예의 전당', activeImg: medalF },
	{
		img: campaignWorking,
		text: '진행 중인 캠페인',
		activeImg: campaignWoringF,
	},
	{ img: proposal, text: '제안된 캠페인', activeImg: proposalF },
	{ img: upload, text: '캠페인 제안', activeImg: uploadF },
];
const SideBarList = () => {
	return (
		<>
			{ItemList.map((item) => {
				return (
					<S.ItemBox activeImg={item.activeImg}>
						<S.ItemImg src={item.img} />
						<S.ItemText>{item.text}</S.ItemText>
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
