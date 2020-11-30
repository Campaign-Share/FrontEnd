import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { modalOff } from '../../../modules/viewSuggested';
import { reportModalOn } from '../../../modules/reportModal';
import * as S from './style';
import { report } from '../../../assets/img';
import { requestApiWithAccessToken } from '../../../APIrequest';

const ViewSuggestedModal = () => {
	const [selected, setSelected] = useState(0);
	const [userNickname, setUserNickname] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
	const campaignUuid = useSelector(
		(state) => state.viewSuggested.modalCampaign,
	);
	const campaignList = useSelector((state) => state.viewSuggested.campaigns);
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
		const res = await requestApiWithAccessToken(
			'/v1/users/with-uuids',
			{
				user_uuids: [modalCampaignInfo.user_uuid],
			},
			{},
			'post',
		);
		return res.data.user_informs[0].user_id;
	};

	const voteAgree = async (selected) => {
		if (selected !== 0) {
			cancelVote(selected);
			return;
		}
		console.log('no');
		await requestApiWithAccessToken(
			`/v1/campaigns/uuid/${modalCampaignInfo.campaign_uuid}/actions/agree`,
			{},
			{},
			'post',
		).then((res) => {
			switch (res.data.status) {
				case 200: {
					alert('투표에 성공하셨습니다.');
					setSelected(1);
					break;
				}
				case 401: {
					alert('인증 오류');
					history.push('/login');
					break;
				}
				case 404: {
					alert('투표 오류');
					window.location.reload();
					break;
				}
				case 409: {
					if (res.data.code === -1071) {
						alert('이미 투표한 캠페인입니다.');
						break;
					} else if (res.data.code === -1072) {
						alert('투표하지 않은 캠페인입니다.');
						break;
					}
				}
			}
		});
	};

	const voteDisagree = async (selected) => {
		if (selected !== 0) {
			cancelVote(selected);
			return;
		}
		await requestApiWithAccessToken(
			`/v1/campaigns/uuid/${modalCampaignInfo.campaign_uuid}/actions/disagree`,
			{},
			{},
			'post',
		).then((res) => {
			switch (res.data.status) {
				case 200: {
					alert('투표에 성공하셨습니다.');
					setSelected(2);
					break;
				}
				case 401: {
					alert('인증 오류');
					history.push('/login');
					break;
				}
				case 404: {
					alert('투표 오류');
					window.location.reload();
					break;
				}
				case 409: {
					if (res.data.code === -1071) {
						alert('이미 투표한 캠페인입니다.');
						break;
					} else if (res.data.code === -1072) {
						alert('투표하지 않은 캠페인입니다.');
						break;
					}
				}
			}
		});
	};

	const cancelVote = async (selected) => {
		if (selected === 1) {
			await requestApiWithAccessToken(
				`/v1/campaigns/uuid/${modalCampaignInfo.campaign_uuid}/actions/cancel-agree`,
				{},
				{},
				'post',
			).then((res) => {
				switch (res.data.status) {
					case 200: {
						alert('투표에 성공하셨습니다.');
						setSelected(0);
						break;
					}
					case 401: {
						alert('인증 오류');
						history.push('/login');
						break;
					}
					case 404: {
						alert('투표 오류');
						window.location.reload();
						break;
					}
					case 409: {
						if (res.data.code === -1071) {
							alert('이미 투표한 캠페인입니다.');
							break;
						} else if (res.data.code === -1072) {
							alert('투표하지 않은 캠페인입니다.');
							break;
						}
					}
				}
			});
		} else {
			await requestApiWithAccessToken(
				`/v1/campaigns/uuid/${modalCampaignInfo.campaign_uuid}/actions/canceldisagree`,
				{},
				{},
				'post',
			).then((res) => {
				switch (res.data.status) {
					case 200: {
						alert('투표에 성공하셨습니다.');
						setSelected(0);
						break;
					}
					case 401: {
						alert('인증 오류');
						history.push('/login');
						break;
					}
					case 404: {
						alert('투표 오류');
						window.location.reload();
						break;
					}
					case 409: {
						if (res.data.code === -1071) {
							alert('이미 투표한 캠페인입니다.');
							break;
						} else if (res.data.code === -1072) {
							alert('투표하지 않은 캠페인입니다.');
							break;
						}
					}
				}
			});
		}
	};

	useEffect(() => {
		getUserNickname().then((nickname) => {
			setUserNickname(nickname);
		});
	}, [modalCampaignInfo]);

	return (
		<S.MainWrapper onClick={modalOffDispatch}>
			<S.ModalWrapper>
				<S.BodyWrapper>
					<S.LeftWrapper>
						<S.Poster
							src={`http://campaignshare.s3.ap-northeast-2.amazonaws.com/${modalCampaignInfo.post_uri}`}
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
						<S.ModalBtnWrapper>
							<S.ModalAgreeBtn
								onClick={() => voteAgree(selected)}
								selected={selected}>
								동의
							</S.ModalAgreeBtn>
							<S.ModalDisagreeBtn
								onClick={() => voteDisagree(selected)}
								selected={selected}>
								반대
							</S.ModalDisagreeBtn>
						</S.ModalBtnWrapper>
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

export default ViewSuggestedModal;
