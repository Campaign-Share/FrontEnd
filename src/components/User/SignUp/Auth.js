import React from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import background from '../../../assets/img/background.png';

const Auth = () => {
    return (
    <L.UserContainer url={background}>
    <L.UserBox>
        <L.ContentSection>
            <L.Title>회원가입</L.Title>
            <S.Explan>이메일로 전송된 코드를 입력해 주세요</S.Explan>
            <L.InputBox email>
                <S.Email placeholder="Code" id="email" ></S.Email>
            </L.InputBox>
            <L.UserBtn  id="button">
                다음
            </L.UserBtn>
        </L.ContentSection>
    </L.UserBox>
</L.UserContainer>
    )
}

export default Auth;