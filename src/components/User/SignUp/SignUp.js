import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const SignUp = (signUpInput) => {
	let [name, setName] = useState('');
	let [nickname, setNickName] = useState('');
	let [id, setId] = useState('');
	let [password, setPassword] = useState('');
	let [isPassword, setIsPassword] = useState(false);
	let [isId, setIsId] = useState(false);

	const config = {};
	const nameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const nickChange = (e) => {
		setNickName(e.target.value);
	};

	const idChange = (e) => {
		setId(e.target.value);
	};

	const passwordChange = (e) => {
		setPassword(e.target.value);
	};

	const isCheck = (str) => {
		const re = /^[a-zA-Z0-9]{4,12}$/;
		return re.test(str) ? true : false;
	};

	const data = {
		name: name,
		nickname: nickname,
		id: id,
		password: password,
	};

	let isPasswordStyle = isPassword ? 'visible' : 'hidden';
	let isIdStyle = isId ? 'visible' : 'hidden';

	const joinBtn = () => {
		if (password.length < 8) {
			setIsPassword(true);
		} else setIsPassword(false);

		console.log(name, nickname, id, password);
		if (isCheck(id) === false) return setIsId(true);
		else return setIsId(false);

		if (setIsPassword(false) && setId(false)) {
			signUpInput();
		}
	};

	return (
		<L.UserContainer join url={background}>
			<L.UserBox join>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<L.InputBox>
						<S.Name placeholder="Name" onChange={nameChange} />
						<S.NickName onChange={nickChange} />
						<S.IdBox>
							<S.Id onChange={idChange} />
							<S.IdBtn onClick={isCheck}>중복 체크 </S.IdBtn>
						</S.IdBox>
						<S.IsError style={{ visibility: isIdStyle }}>
							4~12자의 영문 대소문자와 숫자
						</S.IsError>
						<S.Password id="password" onChange={passwordChange} />
						<S.IsError style={{ visibility: isPasswordStyle }}>
							비밀번호는 8자 이상으로 설정해 주세요.{' '}
						</S.IsError>
					</L.InputBox>
					<L.UserBtn signUp onClick={joinBtn}>
						회원가입
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default SignUp;
