import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

import { group2 } from '../../../assets/img/';

const CompleteBodyWrapper = () => {
	const history = useHistory();

	return (
		<S.BodyWrapper>
			<S.LeftImgWrapper>
				<S.LeftBackgroundImg src={group2} />
			</S.LeftImgWrapper>
			<S.RightWrapper>
				<S.TextWrapper>
					<S.TextTitle>WELCOME TO THE CAMPAIGN SHARE</S.TextTitle>
					<S.TextDividingLine />
					<S.TextExplanation>
						캠페인 쉐어에 가입하신 것을 환영합니다.
						<br />
						로그인 하여 다양한 캠페인들을 만나보세요!
					</S.TextExplanation>
				</S.TextWrapper>
				<S.LinkWrapper>
					<S.LinkButton onClick={() => history.push('/introduce')}>
						소개 페이지
					</S.LinkButton>
					<S.LinkButton onClick={() => history.push('login')}>
						로그인
					</S.LinkButton>
				</S.LinkWrapper>
			</S.RightWrapper>
		</S.BodyWrapper>
	);
};

export default CompleteBodyWrapper;
