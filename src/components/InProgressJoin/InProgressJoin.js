import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import { modalOn } from '../../modules/inProgressJoin';
import SuggestHeader from '../Suggest/SuggestHeader/SuggestHeader';
import { file } from '../../assets/img';
import { requestApiWithAccessToken } from '../../APIrequest';

const InProgressJoin = () => {
	const [campaignInfo, setCampaignInfo] = useState({
		title: '',
		participationWay: '',
	});
	const [text, setText] = useState('');
	const [attachments, setAttachments] = useState();
	const dispatch = useDispatch();
	const campaignUuid = useSelector(
		(state) => state.viewInProgress.modalCampaign,
	);

	const onChangeText = (e) => {
		setText(e.target.value);
	};

	const onChangeAttachments = (e) => {
		setAttachments(e.target.files[0]);
	};

	const onBtnClick = async () => {
		if (text === '' || !attachments) {
			alert('빈 칸을 채워주세요.');
			return;
		}
		var formData = new FormData();
		formData.append('campaignUUID', campaignUuid);
		formData.append('introduction', text);
		formData.append('evidence', attachments);
		await requestApiWithAccessToken(`/v1/participations`, formData, {}, 'post');
		dispatch(modalOn());
	};

	const getCampaignInfo = async (e) => {
		const res = await requestApiWithAccessToken(
			`/v1/campaigns/uuid/${campaignUuid}`,
			{},
			{},
			'get',
		);
		return res;
	};

	useEffect(() => {
		getCampaignInfo().then((res) =>
			setCampaignInfo({
				...campaignInfo,
				title: res.data.title,
				participationWay: res.data.participation,
			}),
		);
	}, []);

	return (
		<S.RightWrapper>
			<SuggestHeader />
			<S.BodyWrapper>
				<S.InProgressWrapper>
					<S.InProgressTitle>{campaignInfo.title}</S.InProgressTitle>
					<S.InProgressBodyWrapper>
						<S.InProgressLeftWrapper>
							<S.InProgressLeftTitle>참여 방법</S.InProgressLeftTitle>
							<S.InProgressLeftExplanation>
								{campaignInfo.participationWay}
							</S.InProgressLeftExplanation>
						</S.InProgressLeftWrapper>
						<S.InProgressDividingLine />
						<S.InProgressRightWrapper>
							<S.InProgressDetailWrapper>
								<S.InProgressDetailExplanation>
									부가설명
								</S.InProgressDetailExplanation>
								<S.InProgressDetailTextarea
									onChange={onChangeText}
									placeholder="참여한 것에 대한 설명을 적어주세요."
								/>
							</S.InProgressDetailWrapper>
							<S.InProgressAddFileWrapper>
								<S.InProgressAddFileIcon src={file} />
								<S.InProgressAddFileText>첨부파일</S.InProgressAddFileText>
								<S.InProgressAddFileInput
									onChange={onChangeAttachments}
									type="file"
								/>
							</S.InProgressAddFileWrapper>
						</S.InProgressRightWrapper>
					</S.InProgressBodyWrapper>
					<S.InProgressBottomWrapper>
						<S.InProgressJoinBtn isFull onClick={onBtnClick}>
							참여
						</S.InProgressJoinBtn>
					</S.InProgressBottomWrapper>
				</S.InProgressWrapper>
			</S.BodyWrapper>
		</S.RightWrapper>
	);
};

export default InProgressJoin;
