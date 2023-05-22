import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  width: 300px;
`;

const MainText = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 15px;
  }
  ${(props) => props.theme.flexCenter};
  color: ${(props) => props.theme.mainColor};
  width: 100%;
  font-size: 25px;
  font-weight: 800;
  padding: 40px 0;
`;

const SubText = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 13px;
  }
  ${(props) => props.theme.flexCenter};
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  padding: 10px 0;
  opacity: 0.7;
`;

const LinkContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
`;

const SLink = styled(Link)`
  ${(props) => props.theme.flexCenter};
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 4px;
  color: white;
  font-weight: 700;
  margin-top: 30px;
`;

const NotFound = () => (
  <Container>
    <Image
      src={require('Components/assets/404_image.jpg')}
      alt='404 error page image'
    />
    <MainText>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</MainText>
    <SubText>존재하지 않는 주소이거나,</SubText>
    <SubText>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</SubText>
    <LinkContainer>
      <SLink to='/'>Home</SLink>
    </LinkContainer>
  </Container>
);

export default NotFound;
