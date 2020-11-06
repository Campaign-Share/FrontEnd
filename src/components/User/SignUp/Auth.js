import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Auth = ({ auth, email }) => {
	let [isAuth, setIsAuth] = useState(false);
	let [code, setCode] = useState('');
	let isAuthStyle = isAuth ? 'visible' : 'hidden';

	const codeValue = (e) => {
		setCode(e.target.value);
	};
	const history = useHistory();
	const authCheck = () => {
		auth(code);
		console.log(code, email);
		history.push({
			pathname: '/signUp/input',
			state: {
				email: email,
			},
		});
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
							onChange={codeValue}></S.Email>
						<S.IsError style={{ visibility: isAuthStyle }} auth>
							코드가 올바르지 않습니다.
						</S.IsError>
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
