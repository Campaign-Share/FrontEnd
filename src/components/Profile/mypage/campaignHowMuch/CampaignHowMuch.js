import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Style.js';
const list = [
	{ text: '참여한 캠페인', color: '#ABC9C7' },
	{ text: '수락된 캠페인', color: '#61A5B3' },
	{ text: '거절된 캠페인', color: '#78BBA8' },
];

const CampaignHowMuch = () => {
	const history = useHistory();
	const itemClick = (item) => {
		switch (item) {
			case '참여한 캠페인': {
				history.push(`/main/mypage/enterList`);
				break;
			}
			case '수락된 캠페인': {
				history.push(`/main/mypage/acceptList`);
				break;
			}
			case '거절된 캠페인': {
				history.push('/main/mypage/refusalList');
				break;
			}
		}
	};
	return (
		<S.ListBoxWrapper>
			<S.smallBox>
				<S.ListBox>
					{list.map((item) => {
						return (
							<S.ItemBox onClick={() => itemClick(item.text)}>
								<S.ItemCircle backgroundColor={item.color}></S.ItemCircle>
								<S.ItemText color={item.color}>{item.text}</S.ItemText>
							</S.ItemBox>
						);
					})}
				</S.ListBox>
			</S.smallBox>
		</S.ListBoxWrapper>
	);
};
export default CampaignHowMuch;
