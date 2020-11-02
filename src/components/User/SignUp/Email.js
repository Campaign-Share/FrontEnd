import React from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Email = () => {
	const emailChange = (e) => {
		const email = document.getElementById('email');
		email.style.backgroundColor = '#d3e2dc';
	};
	return (
		<L.UserContainer url={background}>
			<L.UserBox>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<S.Explan>가입할 이메일을 입력해 주세요.</S.Explan>
					<L.InputBox email>
						<S.Email onChange={emailChange}></S.Email>
					</L.InputBox>
					<L.UserBtn email id="email">
						다음
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default Email;
