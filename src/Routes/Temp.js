import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.mainColor};
  z-index: 100;
`;

const LogoContainer = styled.div`
  ${(props) => props.theme.flexCenter}
`;

const LogoText = styled.div`
  font-size: 50px;
  font-weight: 800;
  color: #fafafa;
  margin-left: 30px;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const Text = styled.div`
  font-size: 30px;
  margin-top: 100px;
  color: #fafafa;
`;

const Temp = () => (
  <Container>
    <LogoContainer>
      <LogoText>Webpetto</LogoText>
    </LogoContainer>
    <TextContainer>
      <Text>현재 서비스 준비 중입니다 : )</Text>
    </TextContainer>
  </Container>
);

export default Temp;
