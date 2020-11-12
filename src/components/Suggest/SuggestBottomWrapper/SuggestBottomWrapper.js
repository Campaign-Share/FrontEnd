import React from 'react';
import * as S from './style';

const SuggestBottomWrapper = ({ onChangeForm, onSubmitForm }) => {
	return (
		<S.SuggestBottomWrapper>
			<S.SuggestBottomLeftWrapper>
				<S.SuggestPeriodInput
					placeholder="캠페인 게시 기간(1 ~ 30일)"
					type="number"
					max="30"
					min="1"
					name="periodDay"
					onChange={onChangeForm}
				/>
			</S.SuggestBottomLeftWrapper>
			<S.SuggestBottomRightWrapper>
				<S.SuggestSubmitBtn onClick={onSubmitForm}>등록</S.SuggestSubmitBtn>
			</S.SuggestBottomRightWrapper>
		</S.SuggestBottomWrapper>
	);
};

export default SuggestBottomWrapper;
