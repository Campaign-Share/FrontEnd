import React, { useState, useCallback, useEffect } from 'react';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Login = ({ login }) => {
	const [isActive, setIsActive] = useState(false);
	const [loginInfo, setLoginInfo] = useState({
		id: '',
		password: '',
	});
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const idChange = (e) => {
		setId(e.target.value);
	};

	const pwChange = (e) => {
		setPw(e.target.value);
		const button = document.getElementById('button');
		button.style.backgroundColor = '#d3e2dc';
		if (e.target.value == '') button.style.background = '#e7e7e7';
	};

	const loginBtn = () => {
		login(id, pw);
	};
	return (
		<S.UserContainer url={background}>
			<S.UserBox>
				<S.ContentSection>
					<S.Title>로그인</S.Title>
					<S.InputBox>
						<S.Id onChange={idChange} name="id"></S.Id>
						<S.Password onChange={pwChange} name="password"></S.Password>
					</S.InputBox>
				</S.ContentSection>
				<S.UserBtn onClick={loginBtn} id="button">
					로그인
				</S.UserBtn>
			</S.UserBox>
		</S.UserContainer>
	);
};

export default Login;
