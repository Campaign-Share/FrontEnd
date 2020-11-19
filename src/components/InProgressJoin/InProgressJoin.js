import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import SuggestHeader from '../Suggest/SuggestHeader/SuggestHeader';
import { file } from '../../assets/img';
import { requestApiWithAccessToken } from '../../APIrequest';

const InProgressJoin = () => {
	const [isFull, setIsFull] = useState(false);
	const [text, setText] = useState('');
	const [attachments, setAttachments] = useState();
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
		console.log(campaignUuid);
		console.log(text);
		console.log(attachments);
		await requestApiWithAccessToken(`/v1/participations`, formData, {}, 'post');
	};

	return (
		<S.RightWrapper>
			<SuggestHeader />
			<S.BodyWrapper>
				<S.InProgressWrapper>
					<S.InProgressTitle>GO CRUELTY FREE: LET US BE!</S.InProgressTitle>
					<S.InProgressBodyWrapper>
						<S.InProgressLeftWrapper>
							<S.InProgressLeftTitle>참여 방법</S.InProgressLeftTitle>
							<S.InProgressLeftExplanation>
								클레어스 공식몰에서 캠페인 굿즈를 구매하면
								<br />
								자동으로 참여할 수 있습니다. SNS 제품 리뷰,
								<br />
								해시태그 포스팅 등의 방법으로 캠페인에 동참하실 수 있습니다.{' '}
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
						<S.InProgressJoinBtn isFull={isFull} onClick={onBtnClick}>
							참여
						</S.InProgressJoinBtn>
					</S.InProgressBottomWrapper>
				</S.InProgressWrapper>
			</S.BodyWrapper>
		</S.RightWrapper>
	);
};

export default InProgressJoin;
