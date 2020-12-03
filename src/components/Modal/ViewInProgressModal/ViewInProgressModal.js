import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modalOff } from '../../../modules/viewInProgress';
import { reportModalOn } from '../../../modules/reportModal';
import * as S from './style';
import { report } from '../../../assets/img';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewInProgressModal = () => {
	const [userNickname, setUserNickname] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const campaignUuid = useSelector(
		(state) => state.viewInProgress.modalCampaign,
	);
	const campaignList = useSelector((state) => state.viewInProgress.campaigns);
	const modalCampaignInfo = campaignList.find(
		(item) => item.campaign_uuid == campaignUuid,
	);

	const modalOffDispatch = (e) => {
		if (e.currentTarget === e.target) dispatch(modalOff());
	};

	const reportModalOnDispatch = () => {
		dispatch(reportModalOn());
	};

	const getUserNickname = async () => {
		await requestApiWithAccessToken(
			'/v1/users/with-uuids',
			{
				user_uuids: [modalCampaignInfo.user_uuid],
			},
			{},
			'post',
		).then((res) => {
			switch (res.data.status) {
				case 200: {
					setUserNickname(res.data.user_informs[0].user_id);
					break;
				}
				case 401: {
					alert('인증 오류');
					history.push('/login');
					break;
				}
				case 404: {
					alert('데이터 오류');
					window.location.reload();
					break;
				}
			}
		});
	};

	useEffect(() => {
		getUserNickname();
	}, [modalCampaignInfo]);

	return (
		<S.MainWrapper onClick={modalOffDispatch}>
			<S.ModalWrapper>
				<S.BodyWrapper>
					<S.LeftWrapper>
						<S.Poster
							src={
								modalCampaignInfo.post_uri
									? `http://campaignshare.s3.ap-northeast-2.amazonaws.com/${modalCampaignInfo.post_uri}`
									: ''
							}
						/>
					</S.LeftWrapper>
					<S.RightWrapper>
						<S.ModalTextWrapper>
							<S.ModalPublisher>{userNickname}</S.ModalPublisher>
							<S.ModalSubTitle>{modalCampaignInfo.sub_title}</S.ModalSubTitle>
							<S.ModalTitle>{modalCampaignInfo.title}</S.ModalTitle>
							<S.ModalIntroduction>
								{modalCampaignInfo.introduction}
							</S.ModalIntroduction>
							<S.ModalParticipationExplanation>
								참여 방법
							</S.ModalParticipationExplanation>
							<S.ModalParticipation>
								{modalCampaignInfo.participation}
							</S.ModalParticipation>
						</S.ModalTextWrapper>
						<S.ModalJoinWrapper>
							<S.ModalJoinButton
								onClick={() => history.push('/main/inProgressJoin')}>
								참여하기
							</S.ModalJoinButton>
						</S.ModalJoinWrapper>
					</S.RightWrapper>
				</S.BodyWrapper>
				<S.ModalBottomWrapper>
					<S.ModalReportWrapper>
						<S.ModalReportBtn onClick={reportModalOnDispatch}>
							<S.ModalReportIcon src={report} />
							<S.ModalReportText>신고하기</S.ModalReportText>
						</S.ModalReportBtn>
					</S.ModalReportWrapper>
				</S.ModalBottomWrapper>
			</S.ModalWrapper>
		</S.MainWrapper>
	);
};

export default ViewInProgressModal;
