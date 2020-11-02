import React from 'react';
import * as S from './Style.js';
const list = [
	{ text: '참여한 캠페인', color: '#ABC9C7' },
	{ text: '등록한 캠페인', color: '#61A5B3' },
	{ text: '동의한 캠페인', color: '#78BBA8' },
];

const CampaignHowMuch = () => {
	return (
		<S.ListBoxWrapper>
			<S.smallBox>
				<S.ListBox>
					{list.map((item) => {
						return (
							<S.ItemBox>
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
