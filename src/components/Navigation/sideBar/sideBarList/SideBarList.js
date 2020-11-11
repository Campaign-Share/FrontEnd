import React from 'react';
import * as S from './style.js';
import { useHistory } from 'react-router-dom';
import {
	ing,
	ingFocus,
	medal,
	medalFocus,
	upload,
	uploadFocus,
	proposal,
	proposalFocus,
} from '../../../../assets/img';

const ItemList = [
	{
		id: 1,
		img: medal,
		text: '명예의 전당',
		activeImg: medalFocus,
		path: '/main/ranking',
	},
	{
		id: 2,
		img: ing,
		text: '진행 중인 캠페인',
		activeImg: ingFocus,
		path: '/main/viewInProgress',
	},
	{
		id: 3,
		img: proposal,
		text: '제안된 캠페인',
		activeImg: proposalFocus,
		path: '/main/viewSuggested',
	},
	{
		id: 4,
		img: upload,
		text: '캠페인 제안',
		activeImg: uploadFocus,
		path: '/main/suggest',
	},
];
const SideBarList = () => {
	const history = useHistory();

	return (
		<>
			{ItemList.map((item) => {
				return (
					<S.ItemBox
						key={item.id}
						activeImg={item.activeImg}
						onClick={() => history.push(item.path)}>
						<S.ItemImg src={item.img} />
						<S.ItemText>{item.text}</S.ItemText>
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
