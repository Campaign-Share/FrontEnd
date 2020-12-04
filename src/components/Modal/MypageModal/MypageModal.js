import React from 'react';
import * as I from '../ViewInProgressModal/style';
import * as S from '../ViewSuggestedModal/style';

const MypageModal = () => {
	return (
		<I.MainWrapper>
			<I.ModalWrapper>
				<I.BodyWrapper>
					<I.LeftWrapper>
						<I.Poster></I.Poster>
					</I.LeftWrapper>
					<I.RightWrapper>
						<I.ModalTextWrapper>
							<I.ModalPublisher></I.ModalPublisher>
							<I.ModalSubTitle></I.ModalSubTitle>
							<I.ModalTitle></I.ModalTitle>
							<I.ModalIntroduction></I.ModalIntroduction>
							<I.ModalParticipationExplanation></I.ModalParticipationExplanation>
							<I.ModalParticipation></I.ModalParticipation>
						</I.ModalTextWrapper>
						<S.ModalBtnWrapper>
							<S.ModalAgreeBtn>동의</S.ModalAgreeBtn>
							<S.ModalDisagreeBtn>반대</S.ModalDisagreeBtn>
						</S.ModalBtnWrapper>

						<I.ModalJoinWrapper>
							<I.ModalJoinButton>참여하기</I.ModalJoinButton>
						</I.ModalJoinWrapper>
					</I.RightWrapper>
				</I.BodyWrapper>

				<I.ModalReportWrapper>
					<I.ModalReportBtn>
						<I.ModalReportIcon />
						<I.ModalReportText>신고하기</I.ModalReportText>
					</I.ModalReportBtn>
				</I.ModalReportWrapper>
			</I.ModalWrapper>
		</I.MainWrapper>
	);
};

export default MypageModal;
