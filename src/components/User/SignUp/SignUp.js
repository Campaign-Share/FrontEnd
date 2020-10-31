import React from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const SignUp = () => {
	return (
		<L.UserContainer url={background}>
			<L.UserBox>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<L.InputBox>
						<S.Name />
						<S.NickName />
						<S.IdBox>
							<S.Id />
							<S.IdBtn>중복 체크 </S.IdBtn>
						</S.IdBox>
						<S.Password />
					</L.InputBox>
					<L.UserBtn signUp>회원가입</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default SignUp;
