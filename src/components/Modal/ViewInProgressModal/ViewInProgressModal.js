import React from 'react';
import { useDispatch } from 'react-redux';
import { modalOff } from '../../../modules/viewSuggested';
import * as S from './style';
import { report } from '../../../assets/img';

const viewSuggestedModal = () => {
	const dispatch = useDispatch();
	const modalOffDispatch = (e) => {
		if (e.currentTarget === e.target) dispatch(modalOff());
	};

	return (
		<S.MainWrapper onClick={modalOffDispatch}>
			<S.ModalWrapper>
				<S.BodyWrapper>
					<S.LeftWrapper>
						<S.Poster src="https://img1.bizhows.com/bhfile01/__CM_FILE_DATA/201911/20/18/1481579_1574242985072.jpg" />
					</S.LeftWrapper>
					<S.RightWrapper>
						<S.ModalTextWrapper>
							<S.ModalPublisher>Klairs X jOGUMAN STUDiO</S.ModalPublisher>
							<S.ModalSubTitle>클레어스 6th 기부 프로젝트</S.ModalSubTitle>
							<S.ModalTitle>GO CRUELTY FREE: LET US BE!</S.ModalTitle>
							<S.ModalIntroduction>
								세계 실험동물의 날을 맞아 진행하는 GO CRUELTY FREE: LET US BE!는
								클레어스의 여섯 번째 기부 프로젝트입니다. 반려동물과의 산책이
								컨셉인 캠페인 굿즈는 풉백으로 사용 가능한 미니 파우치, 손수건,
								드링크 백 등으로 조구만 스튜디오의 일러스트가 그러져있습니다.
								클레어스 공식몰에서 캠페인 굿즈를 구매하면 자동으로 참여할 수
								있습니다. 더불어 SNS 제품 리뷰, 해시태그 포스팅 등의 방법으로
								캠페인에 동참하실 수 있습니다.{' '}
							</S.ModalIntroduction>
						</S.ModalTextWrapper>
						<S.ModalJoinWrapper>
							<S.ModalJoinButton>참여하기</S.ModalJoinButton>
						</S.ModalJoinWrapper>
					</S.RightWrapper>
				</S.BodyWrapper>
				<S.ModalBottomWrapper>
					<S.ModalReportWrapper>
						<S.ModalReportBtn>
							<S.ModalReportIcon src={report} />
							<S.ModalReportText>신고하기</S.ModalReportText>
						</S.ModalReportBtn>
					</S.ModalReportWrapper>
				</S.ModalBottomWrapper>
			</S.ModalWrapper>
		</S.MainWrapper>
	);
};

export default viewSuggestedModal;
