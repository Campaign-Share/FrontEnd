import React from 'react';
import * as S from './style';
import Modal from '../Modal/Modal';
import SideBar from '../Navigation/sideBar/SideBar';
import SuggestHeader from './SuggestHeader/SuggestHeader';
import SuggestBodyWrapper from './SuggestBodyWrapper/SuggestBodyWrapper';
import SuggestBottomWrapper from './SuggestBottomWrapper/SuggestBottomWrapper';

const Suggest = ({
	isModal,
	setIsModal,
	suggestForm,
	setSuggestForm,
	onSubmitForm,
}) => {
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

	return (
		<S.MainWrapper>
			{isModal && <Modal setIsModal={setIsModal} />}
			<SideBar />
			<S.RightWrapper>
				<SuggestHeader />
				<S.BodyWrapper>
					<S.SuggestWrapper>
						<S.SuggestTitle
							placeholder="제목"
							autoComplete="off"
							name="title"
							onChange={onChangeForm}
						/>
						<S.SuggestSubTitle
							placeholder="부제목"
							autoComplete="off"
							name="subTitle"
							onChange={onChangeForm}
						/>
						<SuggestBodyWrapper onChangeForm={onChangeForm} />
						<SuggestBottomWrapper
							onChangeForm={onChangeForm}
							onSubmitForm={onSubmitForm}
						/>
					</S.SuggestWrapper>
				</S.BodyWrapper>
			</S.RightWrapper>
		</S.MainWrapper>
	);
};

export default Suggest;
