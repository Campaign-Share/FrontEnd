import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestApiWithAccessToken } from '../../../APIrequest';

import Suggest from '../../../components/Suggest/Suggest';

const SuggestContainer = () => {
	const [suggestForm, setSuggestForm] = useState({
		title: '',
		subTitle: '',
		introduction: '',
		participation: '',
		tags: '',
		periodDay: 0,
	});
	const [posterImg, setPosterImg] = useState();
	const [isModal, setIsModal] = useState(false);
	const [isError, setIsError] = useState(false);

	const history = useHistory();

	const checkPeriod = () => {
		if (suggestForm.periodDay > 30) {
			alert('기간은 30일을 초과할 수 없습니다.');
			setIsError(true);
		}
	};

	const onClickBtn = () => {
		for (var key in suggestForm) {
			if (suggestForm[key].length === 0) {
				alert('빈 칸을 채워주세요');
				setIsError(true);
				break;
			}
		}
	};

	const distinguishTags = () => {
		let newTags = suggestForm.tags.split(' ');
		if (newTags.length > 4) {
			alert('태그는 5개까지만 작성가능합니다.');
			setIsError(true);
			return;
		}
		setSuggestForm({
			...suggestForm,
			tags: newTags.join('|').replace('#', ''),
		});
	};

	const onSubmitForm = async () => {
		setIsError(false);
		checkPeriod();
		onClickBtn();
		distinguishTags();
		if (isError === false) {
			var formData = new FormData();
			formData.append('title', suggestForm.title);
			formData.append('subTitle', suggestForm.subTitle);
			formData.append('poster', suggestForm.poster);
			formData.append('introduction', suggestForm.introduction);
			formData.append('participation', suggestForm.participation);
			formData.append('tags', suggestForm.tags);
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

export default SuggestContainer;
