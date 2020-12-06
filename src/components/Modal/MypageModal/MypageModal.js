import React, { useState, useEffect } from 'react';
import * as I from '../ViewInProgressModal/style';
import * as S from '../../common/Campaign/style';
import { useSelector, useDispatch } from 'react-redux';
import { off_modal } from '../../../modules/CampaignList';
import { useLocation } from 'react-router-dom';
import { report, bad, good } from '../../../assets/img';
import { reportModalOn } from '../../../modules/reportModal';

const MypageModal = () => {
	let [isReport, setIsReport] = useState(false);
	let [isAccept, setIsAccept] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();
	const uuid = useSelector((state) => state.list.modalCampaign);
	const myPageList = useSelector((state) => state.list.campaigns);
	const campaignModal = myPageList.find((id) => id.campaign_uuid == uuid);

	const modalOff = (e) => {
		if (e.target === e.currentTarget) dispatch(off_modal());
	};

	const reportModal = () => {
		dispatch(reportModalOn());
	};

	useEffect(() => {
		switch (location.pathname) {
			case '/main/mypage/participationList':
				setIsReport(true);

				break;
			case '/main/mypage/acceptList':
				setIsReport(false);

				break;
			case '/main/mypage/refusalList':
				setIsReport(false);

				break;
			case '/main/mypage/registerList':
				setIsAccept(true);
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
					</I.RightWrapper>
				</I.BodyWrapper>
				{isAccept ? (
					<S.CampaignGraphWrapper mypage>
						<S.CampaignLikeIcon src={good} />
						<S.CampaignDisagreeGraph>
							<S.CampaignFlexDiv
								flex={campaignModal.agree_number}
								isFull={campaignModal.disagree_number === 0}>
								<S.CampaignAgreeNumber>
									{campaignModal.agree_number}
								</S.CampaignAgreeNumber>
							</S.CampaignFlexDiv>
							<S.CampaignFlexDiv flex={campaignModal.disagree_number}>
								<S.CampaignDisagreeNumber>
									{campaignModal.disagree_number}
								</S.CampaignDisagreeNumber>
							</S.CampaignFlexDiv>
						</S.CampaignDisagreeGraph>
						<S.CampaignDislikeIcon src={bad} />
					</S.CampaignGraphWrapper>
				) : (
					''
				)}
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
