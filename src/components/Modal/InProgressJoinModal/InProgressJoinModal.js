import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modalOff } from '../../../modules/inProgressJoin';
import * as S from './style';

const InProgressJoinModal = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const modalOffDipsatch = (e) => {
		if (e.currentTarget === e.target) {
			dispatch(modalOff());
			history.push('/main/ranking');
		}
	};

	return (
		<S.MainWrapper onClick={modalOffDipsatch}>
			<S.BodyWrapper>
				<S.ModalText>
					참여가 접수되었습니다.
					<br />
					관리자가 확인 및 승인 후, 참여가 완료됩니다.
				</S.ModalText>
				<S.ModalBtn onClick={modalOffDipsatch}>돌아가기</S.ModalBtn>
			</S.BodyWrapper>
		</S.MainWrapper>
	);
};

export default InProgressJoinModal;
