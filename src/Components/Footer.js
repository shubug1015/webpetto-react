import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexCenter}
  /* background-color: #f2f2f2; */
  width: 100vw;
  max-width: 100%;
  height: 300px;
  z-index: 99;
`;

const Content = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 90%;
`;

const TopContainer = styled.div`
  margin-bottom: 50px;
`;

const BottomContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
`;

const Logo = styled.div`
  font-size: 30px;
`;

const LeftContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  height: 100px;
`;

const LeftText = styled.div`
  :first-child {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const RightContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  height: 100px;
  margin-left: 40px;
`;

const RightText = styled.div`
  font-size: 13px;
  :first-child {
    font-weight: 700;
    margin-bottom: 20px;
  }
  :not(:first-child) {
    margin-bottom: 10px;
  }
`;

const Footer = () => (
  <Container>
    <Content>
      <TopContainer>
        <Logo>로고</Logo>
      </TopContainer>
      <BottomContainer>
        <LeftContainer>
          <LeftText>Webpetto Inc.</LeftText>
          <LeftText>@2020 Webpetto Inc.</LeftText>
        </LeftContainer>
        <RightContainer>
          <RightText>Webpetto Inc. (주)웹페토</RightText>
          <RightText>
            (주)웹페토 | 사업자 등록번호: 000-00-00000 | 대표: 고동섭
          </RightText>
          <RightText>서울시 서대문구 세검정로 61-45 101호</RightText>
        </RightContainer>
      </BottomContainer>
    </Content>
  </Container>
);

export default Footer;
