import React, {useState} from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Email = () => {
	let [email, setEmail] = useState('');
	let [isEmail, setIsEmail] = useState('');

	const emailChange = (e) => {
		const button = document.getElementById('button');
		button.style.backgroundColor = '#d3e2dc';
		setEmail(e.target.value);
	};
	const emailCheck = (str) => {
		let re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		return re2.test(str) ? true : false;
	}
	
	const onEmail = () => {
		if(emailCheck(email) === false){
			alert("이메일 형식이 올바르지 않습니다.");
			setEmail('');
			console.log(email);
		}
		else {
			//서버 코드 
			console.log(email);
		}
	}
	return (
		<L.UserContainer url={background}>
			<L.UserBox>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<S.Explan>가입할 이메일을 입력해 주세요.</S.Explan>
					<S.Explan>이메일로 전송된 코드를 입력해 주세요</S.Explan>
					<L.InputBox email>
						<S.Email id="email" onChange={emailChange}></S.Email>
					</L.InputBox>
					<L.UserBtn onClick={onEmail} id="button">
						다음
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default Email;
