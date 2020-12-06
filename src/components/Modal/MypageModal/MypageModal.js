import React, { useState, useEffect } from 'react';
import * as I from '../ViewInProgressModal/style';
import * as S from '../ViewSuggestedModal/style';
import { useSelector, useDispatch } from 'react-redux';
import { off_modal } from '../../../modules/CampaignList';
import { useLocation, useHistory } from 'react-router-dom';
import { report } from '../../../assets/img';
import { reportModalOn } from '../../../modules/reportModal';

const MypageModal = () => {
	let [selected, setSelected] = useState(0);
	let [vote, setVote] = useState(false);
	let [member, setMember] = useState(false);
	let [isReport, setIsReport] = useState(false);

	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const uuid = useSelector((state) => state.list.modalCampaign);
	const myPageList = useSelector((state) => state.list.campaigns);
	const campaignModal = myPageList.find((id) => id.campaign_uuid == uuid);

	const modalOff = (e) => {
		if (e.target === e.currentTarget) dispatch(off_modal());
	};

	const agree = async (selected) => {
		if (selected !== 0) {
		}
	};

	const disagree = async (selected) => {
		if (selected !== 0) {
		}
	};

	const reportModal = () => {
		dispatch(reportModalOn());
	};

	useEffect(() => {
		switch (location.pathname) {
			case '/main/mypage/participationList':
				setVote(false);
				setMember(true);
				setIsReport(true);
				break;
			case '/main/mypage/acceptList':
				setVote(true);
				setMember(false);
				setIsReport(true);
				break;
			case '/main/mypage/refusalList':
				setVote(false);
				setMember(false);
				setIsReport(false);
				break;
		}
		console.log(campaignModal);
	});

	return (
		<I.MainWrapper onClick={modalOff}>
			<I.ModalWrapper>
				<I.BodyWrapper>
					<I.LeftWrapper>
						<I.Poster
							src={`http://campaignshare.s3.ap-northeast-2.amazonaws.com/${campaignModal.post_uri}`}></I.Poster>
					</I.LeftWrapper>
					<I.RightWrapper>
						<I.ModalTextWrapper>
							<I.ModalPublisher>{campaignModal.nick_name}</I.ModalPublisher>
							<I.ModalSubTitle>{campaignModal.sub_title}</I.ModalSubTitle>
							<I.ModalTitle>{campaignModal.title}</I.ModalTitle>
							<I.ModalIntroduction>
								{campaignModal.introduction}
							</I.ModalIntroduction>
							<I.ModalParticipationExplanation>
								참여방법
							</I.ModalParticipationExplanation>
							<I.ModalParticipation>
								{campaignModal.participation}
							</I.ModalParticipation>
						</I.ModalTextWrapper>
						{vote ? (
							<S.ModalBtnWrapper>
								<S.ModalAgreeBtn
									onClick={() => agree(selected)}
									selected={selected}>
									동의
								</S.ModalAgreeBtn>
								<S.ModalDisagreeBtn
									onClick={() => disagree(selected)}
									selected={selected}>
									반대
								</S.ModalDisagreeBtn>
							</S.ModalBtnWrapper>
						) : (
							''
						)}
						{member ? (
							<I.ModalJoinWrapper>
								<I.ModalJoinButton
									onClick={() => history.push('/main/inProgressJoin')}>
									참여하기
								</I.ModalJoinButton>
							</I.ModalJoinWrapper>
						) : (
							''
						)}
					</I.RightWrapper>
				</I.BodyWrapper>
				{isReport ? (
					<I.ModalBottomWrapper>
						<I.ModalReportWrapper>
							<I.ModalReportBtn>
								<I.ModalReportIcon onClick={reportModal} src={report} />
								<I.ModalReportText>신고하기</I.ModalReportText>
							</I.ModalReportBtn>
						</I.ModalReportWrapper>
					</I.ModalBottomWrapper>
				) : (
					''
				)}
			</I.ModalWrapper>
		</I.MainWrapper>
	);
};

export default MypageModal;
