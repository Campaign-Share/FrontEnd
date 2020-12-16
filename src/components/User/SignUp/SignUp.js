import React, { useState } from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';
import { useHistory } from 'react-router-dom';

const SignUp = ({ data }) => {
	let [name, setName] = useState('');
	let [nickname, setNickName] = useState('');
	let [id, setId] = useState('');
	let [password, setPassword] = useState('');
	let [isPassword, setIsPassword] = useState(false);
	let [isId, setIsId] = useState(false);
	let [isActive, setIsActive] = useState(false);
	const nameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const history = useHistory();

	const nickChange = (e) => {
		setNickName(e.target.value);
	};

	const idChange = (e) => {
		setId(e.target.value);
	};

	const passwordChange = (e) => {
		setPassword(e.target.value);
		setIsActive(true);
	};

	const isCheck = (str) => {
		const re = /^[a-zA-Z0-9]{4,12}$/;
		return re.test(str) ? true : false;
	};

	let isPasswordStyle = isPassword ? 'visible' : 'hidden';
	let isIdStyle = isId ? 'visible' : 'hidden';

	const joinBtn = () => {
		if (password.length < 4) {
			setIsPassword(true);
		} else setIsPassword(false);

		data(name, nickname, id, password);

		console.log(name, nickname, id, password);
		if (isCheck(id) === false) return setIsId(true);
		else return setIsId(false);
	};

	const enter = () => {
		if (window.event.keyCode == 13) joinBtn();
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
						</S.IdBox>
						<S.IsError style={{ visibility: isIdStyle }}>
							4~12자의 영문 대소문자와 숫자
						</S.IsError>
						<S.Password
							id="password"
							onChange={passwordChange}
							onKeyUp={enter}
						/>
						<S.IsError style={{ visibility: isPasswordStyle }}>
							비밀번호는 4자 이상으로 설정해 주세요.
						</S.IsError>
					</L.InputBox>
					<L.UserBtn signUp onClick={joinBtn} isActive={isActive}>
						회원가입
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default SignUp;
