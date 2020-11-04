import React from 'react';
import * as S from './style';
import SideBar from '../Navigation/sideBar/SideBar';
import { profile } from '../../assets/img';

const Suggest = () => {
	return (
		<S.MainWrapper>
			<SideBar />
			<S.RightWrapper>
				<S.Header>
					<S.HeaderIcon src={profile} />
				</S.Header>
				<S.BodyWrapper>
					<S.SuggestWrapper>
						<S.SuggestTitle />
						<S.SuggestBodyWrapper>
							<S.SuggestLeftWrapper>
								<S.SuggestImageInput>이미지를 넣어주세요</S.SuggestImageInput>
							</S.SuggestLeftWrapper>
							<S.SuggestDividingLine />
							<S.SuggestRightWrapper>
								<S.SuggestRightTitle>
									캠페인 설명 & 참여 방법
								</S.SuggestRightTitle>
								<S.SuggestRightInput placeholder="캠페인에 관한 것을 적어주세요." />
							</S.SuggestRightWrapper>
						</S.SuggestBodyWrapper>
						<S.SuggestBottomWrapper>
							<S.SuggestSubmitBtn>등록</S.SuggestSubmitBtn>
						</S.SuggestBottomWrapper>
					</S.SuggestWrapper>
				</S.BodyWrapper>
			</S.RightWrapper>
		</S.MainWrapper>
	);
};

export default Suggest;
