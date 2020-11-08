import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestApiWithAccessToken } from '../../APIrequest';

import Suggest from '../../components/Suggest/Suggest';

const MainContainer = () => {
	const [suggestForm, setSuggestForm] = useState({
		title: '',
		subTitle: '',
		introduction: '',
		participation: '',
		periodDay: 0,
	});
	const [posterImg, setPosterImg] = useState();
	const [isModal, setIsModal] = useState(false);

	const history = useHistory();

	const checkPeriod = () => {
		if (suggestForm.periodDay > 30) {
			alert('기간은 30일을 초과할 수 없습니다.');
		}
	};

	const onClickBtn = () => {
		for (var key in suggestForm) {
			if (suggestForm[key].length === 0) {
				alert('빈 칸을 채워주세요');
				break;
			}
		}
	};

	const onSubmitForm = async () => {
		checkPeriod();
		onClickBtn();
		var formData = new FormData();
		formData.append('title', suggestForm.title);
		formData.append('subTitle', suggestForm.subTitle);
		formData.append('poster', suggestForm.poster);
		formData.append('introduction', suggestForm.introduction);
		formData.append('participation', suggestForm.participation);
		formData.append('periodDay', suggestForm.periodDay);
		try {
			const res = await requestApiWithAccessToken(
				'/v1/campaigns',
				formData,
				{},
				'post',
			);
			// if (res.data.status == '400') {
			// 	alert()
			// }
			if (res.data.status == '401') {
				// history.push('/login');
				return;
			}
			if (res.data.status == '409') {
				alert('하루 생성 가능 캠페인을 초과했습니다.');
				return;
			}
			setIsModal(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Suggest
			history={history}
			isModal={isModal}
			setIsModal={setIsModal}
			suggestForm={suggestForm}
			setSuggestForm={setSuggestForm}
			onSubmitForm={onSubmitForm}
			posterImg={posterImg}
			setPosterImg={setPosterImg}
		/>
	);
};

export default MainContainer;
