import React, { useState, useCallback, useEffect } from 'react';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Login = () => {
	const [isActive, setIsActive] = useState(false);
	const [loginInfo, setLoginInfo] = useState({
		id: '',
		password: '',
	});

	useEffect(() => {
		loginInfo.id && loginInfo.password && setIsActive(true);
	}, [loginInfo]);

	const changeLoginInfo = useCallback((e) => {
		const { name, value } = e.target;
		setLoginInfo((prev) => ({
			...prev,
			[name]: value,
		}));
		if (loginInfo.id == '' || loginInfo.password == '') setIsActive(false);
	}, []);

	return (
		<S.UserContainer url={background}>
			<S.UserBox>
				<S.ContentSection>
					<S.Title>로그인</S.Title>
					<S.InputBox>
						<S.Id
							value={loginInfo.id}
							onChange={changeLoginInfo}
							name="id"></S.Id>
						<S.Password
							value={loginInfo.password}
							onChange={changeLoginInfo}
							name="password"></S.Password>
					</S.InputBox>
				</S.ContentSection>
				<S.LoginBtn isActive={isActive}>로그인</S.LoginBtn>
			</S.UserBox>
		</S.UserContainer>
	);
};

export default Login;
