import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin-left: 20%;
`;

const SmallTitle = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 19px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 17px;
  }
  ${(props) => props.theme.flexStartCenter}
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  opacity: 0.7;
`;

const BigTitleContainer = styled.div`
  display: flex;
  height: 30px;
`;

const BigTitle = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 29px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 22px;
  }
  ${(props) => props.theme.flexStartCenter}
  color: ${(props) => props.theme.mainColor};
  font-size: 39px;
  font-weight: 700;
`;

const TitleLines = styled.div`
  flex-grow: 100;
  height: 100%;
  margin-left: 1%;
  overflow: hidden;
`;

const TitleLine1 = styled.div`
  @media only screen and (max-width: 1000px) {
    border-bottom: 1px solid ${(props) => props.theme.mainColor};
  }
  border-bottom: 2px solid ${(props) => props.theme.mainColor};
  width: 100%;
  height: 50%;
`;

const TitleLine2 = styled.div`
  @media only screen and (max-width: 1000px) {
    border-top: 1px solid ${(props) => props.theme.mainColor};
  }
  border-top: 2px solid ${(props) => props.theme.mainColor};
  width: 100%;
  height: 50%;
`;

export const Title = (smallTitle, bigTitle) => (
  <Container>
    <SmallTitle>{smallTitle}</SmallTitle>
    <BigTitleContainer>
      <BigTitle>{bigTitle}</BigTitle>
      <TitleLines>
        <TitleLine1 />
        <TitleLine2 />
      </TitleLines>
    </BigTitleContainer>
  </Container>
);
