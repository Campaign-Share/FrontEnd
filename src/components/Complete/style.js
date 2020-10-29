import styled from "styled-components";

export const MainWrapper = styled.div`
  background-image: url(${props => props.url});
  background-position: left top;
  background-size: 100% 700px;
  background-repeat: no-repeat;
  flex: 1;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const LogoWrapper = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  display: inline-block;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const BodyWrapper = styled.div`
  width: 90%;
  height: calc(100% - 100px);
  display: flex;
  margin-left: 5%;
`;

export const LeftImgWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LeftBackgroundImg = styled.img`
  margin-bottom: 25%;
  margin-left: 5%;
  width: 600px;
  height: 400px;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const RightWrapper = styled.div`
  width: calc(90% - 600px);
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextTitle = styled.h1`
  font-family: Noto Sans CJK KR;
  margin: 0;
  font-size: 35px;
  text-align: center;
  color: #464646;
`;

export const TextDividingLine = styled.div`
  width: 300px;
  height: 4px;
  background-color: #77a691;
  display: block;
`;

export const TextExplanation = styled.p`
  text-align: right;
  width: 290px;
  font-family: Noto Sans CJK KR;
  white-space: pre-line;
  color: #535353;
`;

export const LinkWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 80px;
  background-color: #f3f3f3;
  color: #79a28f;
  font-size: 17px;
  font-family: #79a28f;
  font-weight: bold;
  border: none;
  box-shadow: 3px 3px 7px 1px rgba(112, 112, 112, 0.3);
`;
