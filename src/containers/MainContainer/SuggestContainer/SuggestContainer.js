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
	const history = useHistory();

	const onSubmitForm = () => {
		// 기간 초과 검사
		if (suggestForm.periodDay > 30) {
			alert('기간은 30일을 초과할 수 없습니다.');
			return;
		}

		// 태그 개수 검사
		let newTags = suggestForm.tags.split(' ');
		if (newTags.length > 4) {
			alert('태그는 5개까지만 작성가능합니다.');
			return;
		}
		setSuggestForm({
			...suggestForm,
			tags: newTags.join('|').replace('#', ''),
		});

		var formData = new FormData();
		formData.append('title', suggestForm.title);
		formData.append('subTitle', suggestForm.subTitle);
		formData.append('introduction', suggestForm.introduction);
		formData.append('participation', suggestForm.participation);
		formData.append('periodDay', suggestForm.periodDay);
		formData.append('poster', posterImg);
		formData.append('tags', suggestForm.tags);

		requestApiWithAccessToken('/v1/campaigns', formData, {}, 'post')
			.then((res) => {
				switch (res.data.status) {
					case 201: {
						setIsModal(true);
						break;
					}
					case 400: {
						alert('제목 소개, 참여 방법, 기간을 설정해야 합니다.');
						break;
					}
					case 401: {
						alert('인증 오류');
						history.push('/login');
						break;
					}
					case 409: {
						alert('하루 생성 가능 캠페인 개수를 초과했습니다.');
						break;
					}
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<Suggest
			isModal={isModal}
			setIsModal={setIsModal}
			suggestForm={suggestForm}
			setSuggestForm={setSuggestForm}
			onSubmitForm={onSubmitForm}
			setPosterImg={setPosterImg}
		/>
	);
};

export default SuggestContainer;
