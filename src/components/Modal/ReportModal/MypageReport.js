import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reportModalOff } from '../../../modules/reportModal';
import * as S from './style';
import { cancel, check, checkBox } from '../../../assets/img';
import { requestApiWithAccessToken } from '../../../APIrequest';

const MypageReport = () => {
	const [isSubmit, setIsSubmit] = useState(false);
	const [imgNumber, setImgNumber] = useState('');
	const [reason, setReason] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const campaignUuid = useSelector((state) => state.list.modalCampaign);

	const reportModalOffDispatch = (e) => {
		if (e.currentTarget === e.target) dispatch(reportModalOff());
	};

	let textList = [
		{
			text: '광고성 캠페인입니다.',
			id: '1',
		},
		{ text: '악의성 캠페인입니다.', id: '2' },
		{ text: '부적절한 캠페인입니다.', id: '3' },
		{ text: '기타', id: '4' },
	];

	const checkboxClick = (e) => {
		setImgNumber(e.target.id);
	};

	const onChangeReason = (e) => {
		setReason(e.target.value);
	};

	const reportClick = async () => {
		if (imgNumber == '' || reason == '') {
			alert('빈 칸을 채워주세요.');
			return;
		}
		await requestApiWithAccessToken(
			'/v1/reports',
			{
				target_uuid: campaignUuid,
				field: textList[imgNumber - 1].text,
				reason: reason,
			},
			{},
			'post',
		).then((res) => {
			switch (res.data.status) {
				case 201: {
					setIsSubmit(true);
					break;
				}
				case 401: {
					alert('인증 오류');
					history.push('/login');
					break;
				}
				case 404: {
					alert('캠페인 데이터 오류');
					window.location.reload();
					break;
				}
				case 409: {
					alert('이미 신고된 캠페인입니다.');
					break;
				}
			}
		});
	};

	return (
		<S.Container onClick={reportModalOffDispatch}>
			{isSubmit ? (
				<S.CompleteMainWrapper>
					<S.CompleteTopWrapper>
						<S.CompleteCloseImg src={cancel} onClick={reportModalOffDispatch} />
					</S.CompleteTopWrapper>
					<S.CompleteBodyWrapper>
						<S.CompleteText>
							신고가 완료되었습니다.
							<br />
							원활한 사이트 운영을 위해 신고해 주셔서 감사합니다.
						</S.CompleteText>
					</S.CompleteBodyWrapper>
				</S.CompleteMainWrapper>
			) : (
				<S.MainWrapper>
					<S.BodyWrapper>
						<S.ReportCheckboxWrapper>
							<S.ReportTitle>Report</S.ReportTitle>
							<S.ReportCheckboxText>
								왜 신고하시려는 건가요?
							</S.ReportCheckboxText>
							{textList.map((item) => (
								<S.ReportCheckboxDiv
									id={item.id}
									key={item.id}
									onClick={checkboxClick}>
									{imgNumber === item.id ? (
										<S.ReportCheckboxImg id={item.id} src={check} />
									) : (
										<S.ReportCheckboxImg id={item.id} src={checkBox} />
									)}
									<S.ReportCheckBoxExplanation id={item.id}>
										{item.text}
									</S.ReportCheckBoxExplanation>
								</S.ReportCheckboxDiv>
							))}
						</S.ReportCheckboxWrapper>
						<S.ReportReasonWrapper>
							<S.ReportReasonText>이유를 적어주세요.</S.ReportReasonText>
							<S.ReportReasonInput
								placeholder="사유"
								onChange={onChangeReason}
							/>
						</S.ReportReasonWrapper>
						<S.ReportBtnWrapper>
							<S.ReportBtn onClick={reportClick}>신고</S.ReportBtn>
						</S.ReportBtnWrapper>
					</S.BodyWrapper>
				</S.MainWrapper>
			)}
		</S.Container>
	);
};

export default MypageReport;
