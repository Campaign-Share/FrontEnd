import React, { useState } from 'react';
import * as S from './style';
import Modal from '../Modal/Modal';
import SideBar from '../Navigation/sideBar/SideBar';
import { profile } from '../../assets/img';

const Suggest = ({
	history,
	isModal,
	setIsModal,
	suggestForm,
	setSuggestForm,
	onSubmitForm,
}) => {
	const [isImage, setIsImage] = useState(false);

	const onChangeForm = (e) => {
		if ([e.target.name] == 'periodDay') {
			setSuggestForm({
				...suggestForm,
				[e.target.name]: +e.target.value,
			});
		}
		setSuggestForm({
			...suggestForm,
			[e.target.name]: e.target.value,
		});
	};

	const onChangeImgForm = (e) => {
		setSuggestForm({
			...suggestForm,
			[e.target.name]: e.target.files[0],
		});
	};

	const setThumbnail = (event) => {
		const reader = new FileReader();

		reader.onload = function (event) {
			const img = document.createElement('img');
			img.style.maxWidth = '100%';
			img.style.maxHeight = '100%';
			img.setAttribute('src', event.target.result);
			img.addEventListener('click', removeThumbnail);
			img.id = 'posterImg';
			document.querySelector('#image_container').appendChild(img);
		};

		reader.readAsDataURL(event.target.files[0]);
		setIsImage(true);
		onChangeImgForm(event);
	};

	const removeThumbnail = (e) => {
		const img = document.querySelector('#posterImg');
		img.parentNode.removeChild(img);
		setIsImage(false);
		onChangeImgForm(e);
	};

	return (
		<S.MainWrapper>
			{isModal && <Modal setIsModal={setIsModal} />}
			<SideBar />
			<S.RightWrapper>
				<S.Header>
					<S.HeaderIcon src={profile} onClick={() => history.push('/mypage')} />
				</S.Header>
				<S.BodyWrapper>
					<S.SuggestWrapper>
						<S.SuggestTitle name="title" onChange={onChangeForm} />
						<S.SuggestSubTitle name="subTitle" onChange={onChangeForm} />
						<S.SuggestBodyWrapper>
							<S.SuggestLeftWrapper>
								<S.SuggestImageContainer>
									{!isImage && (
										<S.SuggestImageLabel>
											<S.SuggestImageInput
												name="poster"
												onChange={setThumbnail}
												placeholder="이미지를 넣어주세요"
												type="file"
												accept="image/png, image/jpeg"
											/>
											이미지를 넣어주세요
											<br />
											(선택)
										</S.SuggestImageLabel>
									)}
								</S.SuggestImageContainer>
							</S.SuggestLeftWrapper>
							<S.SuggestDividingLine />
							<S.SuggestRightWrapper>
								<S.SuggestRightTitle>캠페인 설명</S.SuggestRightTitle>
								<S.SuggestRightInput
									placeholder="캠페인 설명에 대한 것을 적어주세요."
									name="introduction"
									onChange={onChangeForm}
								/>
								<S.SuggestRightTitle>참여 방법</S.SuggestRightTitle>
								<S.SuggestRightInput
									placeholder="참여 방법에 대한 것을 적어주세요."
									name="participation"
									onChange={onChangeForm}
								/>
							</S.SuggestRightWrapper>
						</S.SuggestBodyWrapper>
						<S.SuggestBottomWrapper>
							<S.SuggestBottomLeftWrapper>
								<S.SuggestPeriodInput
									placeholder="캠페인 게시 기간(1 ~ 30일)"
									type="number"
									max="30"
									min="1"
									name="periodDay"
									onChange={onChangeForm}
								/>
							</S.SuggestBottomLeftWrapper>
							<S.SuggestBottomRightWrapper>
								<S.SuggestSubmitBtn onClick={onSubmitForm}>
									등록
								</S.SuggestSubmitBtn>
							</S.SuggestBottomRightWrapper>
						</S.SuggestBottomWrapper>
					</S.SuggestWrapper>
				</S.BodyWrapper>
			</S.RightWrapper>
		</S.MainWrapper>
	);
};

export default Suggest;
