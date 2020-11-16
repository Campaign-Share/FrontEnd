import React, { useState } from 'react';
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
	const [itemUrl, setItemUrl] = useState('');
	const [isitem, setIsItem] = useState(false);
	const [itemImg, setItemImg] = useState();
	const url = history.location.pathname;

	const move = (item) => {
		switch (item.id) {
			case 1: {
				history.push(item.path);
				setItemUrl(url);
				break;
			}
			case 2: {
				history.push(item.path);
				setItemUrl(url);
				break;
			}
			case 3: {
				history.push(item.path);
				setItemUrl(url);
				break;
			}
			case 4: {
				history.push(item.path);
				setItemUrl(url);
				break;
			}
		}
	};

	const mouseOver = (img) => {
		setItemImg(img);
		setIsItem(true);
	};

	const mouseLeave = () => {
		setIsItem(false);
	};
	return (
		<>
			{ItemList.map((item) => {
				return (
					<S.ItemBox
						key={item.id}
						url={itemUrl}
						onClick={() => move(item)}
						onMouseOver={() => mouseOver(item.activeImg)}
						onMouseLeave={mouseLeave}>
						<S.ItemImg src={isitem ? itemImg : item.img} id={item.id} />
						<S.ItemText url={itemUrl}>{item.text}</S.ItemText>
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
