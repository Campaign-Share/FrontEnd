import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Email = ({ joinEmail }) => {
	let [email, setEmail] = useState('');
	let [isEmail, setIsEmail] = useState(false);

	const history = useHistory();

	const emailChange = (e) => {
		const button = document.getElementById('button');
		button.style.backgroundColor = '#d3e2dc';
		setEmail(e.target.value);
	};
	const emailCheck = (str) => {
		let re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		return re2.test(str) ? true : false;
	};

	const onEmail = () => {
		if (emailCheck(email) === false) {
			setIsEmail(true);
			document.getElementById('email').value = null;
		} else {
			joinEmail(email);
		}
	};
	let isEmailStyle = isEmail ? 'visible' : 'hidden';

	return (
		<L.UserContainer url={background}>
			<L.UserBox email>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<S.Explan>가입할 이메일을 입력해 주세요.</S.Explan>
					<L.InputBox email>
						<S.Email
							placeholder="Email"
							id="email"
							onChange={emailChange}></S.Email>
						<S.IsError style={{ visibility: isEmailStyle }}>
							이메일 형식이 올바르지 않습니다.
						</S.IsError>
					</L.InputBox>

					<L.UserBtn onClick={onEmail} id="button" email>
						다음
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default Email;
