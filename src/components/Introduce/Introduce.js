import React from "react";
import * as S from "./style";

import BackgroundIMG from "../../assets/img/background.png";
import Logo from "../../assets/img/Logo.png";
import group1 from "../../assets/img/group1.png";

const Introduce = () => {
  return (
    <S.MainWrapper url={BackgroundIMG}>
      <S.TopWrapper>
        <S.LogoWrapper>
          <S.Logo src={Logo} />
        </S.LogoWrapper>
        <S.LinkWrapper>
          <S.Link href="/naver.com">Login</S.Link>
          <S.Link href="/facebook.com">Join Us</S.Link>
        </S.LinkWrapper>
      </S.TopWrapper>
      <S.BodyWrapper>
        <S.TextWrapper>
          <S.TextTitle>SHARE YOUR CAMPAIGN</S.TextTitle>
          <S.TextDividingLine />
          <S.TextExplanation>
            '캠페인 쉐어' 는 좋은 뜻을 가진 캠페인을 공유하는 사이트입니다. 뜻
            깊은 캠페인을 참가하고 싶은 사람들, 자신의 캠페인을 공유하고 싶은
            사람들이 모여 캠페인을 나누고 있습니다. 캠페인 쉐어와 함께 다양한
            취지의 캠페인을 즐겨보세요.
          </S.TextExplanation>
        </S.TextWrapper>
        <S.RightBackgroundImg src={group1} />
      </S.BodyWrapper>
    </S.MainWrapper>
  );
};

export default Introduce;
