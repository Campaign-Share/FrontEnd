import React, { useState } from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Auth = ({ auth, email }) => {
	let [code, setCode] = useState('');

	const codeValue = (e) => {
		setCode(e.target.value);
		const button = document.getElementById('button');
		button.style.backgroundColor = '#d3e2dc';
		if (e.target.value == '') button.style.background = '#e7e7e7';
	};
	const authCheck = () => {
		auth(code);
	};

	const enter = () => {
		if (window.event.keyCode == 13) authCheck();
	};
	return (
		<L.UserContainer url={background}>
			<L.UserBox auth>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<S.Explan>이메일로 전송된 코드를 입력해 주세요</S.Explan>

					<L.InputBox email>
						<S.Email
							placeholder="Code"
							id="email"
							onChange={codeValue}
							onKeyUp={enter}></S.Email>
					</L.InputBox>
					<L.UserBtn auth id="button" onClick={authCheck}>
						다음
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default Auth;
