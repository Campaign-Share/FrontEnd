import React, { useState } from 'react';
import * as S from './style';
import SideBar from '../Navigation/sideBar/SideBar';
import { profile } from '../../assets/img';

// props 받아서 할당해주기
const Suggest = () => {
	const [isImage, setIsImage] = useState(false);
	const [suggestForm, setSuggestForm] = useState({
		title: '',
		img: '',
		explanation: '',
	});

	const onChangeForm = (e) => {
		setSuggestForm({
			...suggestForm,
			[e.target.name]: e.target.value,
		});
	};

	const setThumbnail = (event) => {
		const reader = new FileReader();

		reader.onload = function (event) {
			const img = document.createElement('img');
			img.style.maxWidth = '100%';
			img.style.maxHeight = '100%';
			img.setAttribute('src', event.target.result);
			document.querySelector('#image_container').appendChild(img);
		};

		reader.readAsDataURL(event.target.files[0]);
		setIsImage(true);
	};

	return (
		<S.MainWrapper>
			<SideBar />
			<S.RightWrapper>
				<S.Header>
					<S.HeaderIcon src={profile} />
				</S.Header>
				<S.BodyWrapper>
					<S.SuggestWrapper>
						<S.SuggestTitle name="title" onChange={onChangeForm} />
						<S.SuggestBodyWrapper>
							<S.SuggestLeftWrapper>
								<S.SuggestImageContainer>
									{!isImage && (
										<S.SuggestImageLabel>
											<S.SuggestImageInput name="img" onChange={setThumbnail} />
											이미지를 넣어주세요
										</S.SuggestImageLabel>
									)}
								</S.SuggestImageContainer>
							</S.SuggestLeftWrapper>
							<S.SuggestDividingLine />
							<S.SuggestRightWrapper>
								<S.SuggestRightTitle>
									캠페인 설명 & 참여 방법
								</S.SuggestRightTitle>
								<S.SuggestRightInput
									name="explanation"
									onChange={onChangeForm}
								/>
							</S.SuggestRightWrapper>
						</S.SuggestBodyWrapper>
						<S.SuggestBottomWrapper>
							<S.SuggestSubmitBtn>등록</S.SuggestSubmitBtn>
						</S.SuggestBottomWrapper>
					</S.SuggestWrapper>
				</S.BodyWrapper>
			</S.RightWrapper>
		</S.MainWrapper>
	);
};

export default Suggest;
