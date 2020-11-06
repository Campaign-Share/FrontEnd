import React from 'react';
import * as S from './style';

const Modal = ({ setIsModal }) => {
	return (
		<S.MainWrapper>
			<S.ModalWrapper>
				<S.ModalTopWrapper>
					<S.ModalTitle>
						캠페인 등록이 완료되었습니다.
						<br />
						해당 캠페인은 제안된 캠페인에서 확인하실 수 있습니다.
					</S.ModalTitle>
				</S.ModalTopWrapper>
				<S.ModalBottomWrapper>
					<S.ModalConfirmButton onClick={() => setIsModal(false)}>
						확인하기
					</S.ModalConfirmButton>
				</S.ModalBottomWrapper>
			</S.ModalWrapper>
		</S.MainWrapper>
	);
};

export default Modal;
