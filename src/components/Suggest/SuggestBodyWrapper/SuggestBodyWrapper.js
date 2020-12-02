import React, { useState } from 'react';
import * as S from './style';

const SuggestBodyWrapper = ({ onChangeForm, setPosterImg }) => {
	const [isImage, setIsImage] = useState(false);

	const onChangeImg = (e) => {
		setPosterImg(e.target.files[0]);
	};
	const onRemoveImg = () => {
		setPosterImg();
	};

	const setThumbnail = (event) => {
		const reader = new FileReader();

		reader.onload = function (event) {
			const img = document.createElement('img');
			img.style.width = '100%';
			img.style.height = '100%';
			img.setAttribute('src', event.target.result);
			img.addEventListener('click', removeThumbnail);
			img.id = 'posterImg';
			document.querySelector('#image_container').appendChild(img);
		};

		reader.readAsDataURL(event.target.files[0]);
		setIsImage(true);
		onChangeImg(event);
	};

	const removeThumbnail = () => {
		const img = document.querySelector('#posterImg');
		img.parentNode.removeChild(img);
		setIsImage(false);
		onRemoveImg();
	};

	return (
		<S.SuggestBodyWrapper>
			<S.SuggestLeftWrapper>
				<S.SuggestImageContainer id="image_container">
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
				<S.SuggestTagsInput
					placeholder="#태그설정"
					name="tags"
					onChange={onChangeForm}
				/>
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
	);
};

export default SuggestBodyWrapper;
