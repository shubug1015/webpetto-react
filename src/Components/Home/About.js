import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  position: relative;
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
`;

const Slogan = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 75%;
  height: 10vw;
  font-size: 100px;
  font-weight: 900;
  margin: 100px 0 200px 0;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 100px;
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
`;

const Subtitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
  font-size: 24px;
  font-weight: 900;
  opacity: 0.5;
`;

const Titles = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 4.7vw;
  }
  font-size: 42px;
  font-weight: 700;
  margin-top: 50px;
`;

const Title = styled.div`
  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 900px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 28px;
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  margin-top: 80px;
  word-break: keep-all;
  font-size: 18px;
`;

const ContentSection = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  width: 45%;
  padding: 15px 0;
  line-height: 32px;
  word-break: keep-all;
`;

const Underline = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
`;

const About = ({ aboutRef, loading }) => (
  <Container ref={aboutRef}>
    <Loader loading={loading} />
    {loading === false && (
      <>
        <Slogan imgUrl={require('Components/assets/about.png')} />
        <TitleContainer>
          <Subtitle>ABOUT</Subtitle>
          <Titles>
            <Title>웹페토는 웹사이트가 아닌</Title>
            {/* <Title>여러분만의</Title> */}
            <Title>브랜드를 만들어드립니다.</Title>
          </Titles>
        </TitleContainer>
        <ContentContainer>
          <ContentSection>
            귀사의 브랜드를 제대로 파악하지 못한, 예쁘기만 한 사이트는{' '}
            <Underline style={{ marginRight: '5px' }}>
              저렴한 곳에 맡기셔도 좋습니다.
            </Underline>
            시중에는 공장식으로 찍어내는 저가형 업체가 많습니다.
          </ContentSection>
          <ContentSection>
            그러나 웹사이트는 <Underline>회사의 얼굴</Underline>입니다. 단순한
            구색이 아닌 진정으로 회사를 나타내는, 그래서 큰 차이를 만들어낼 수
            있는, <Underline>진짜 웹사이트</Underline>를 만들고 싶으신
            클라이언트를 모십니다.
          </ContentSection>
        </ContentContainer>
      </>
    )}
  </Container>
);

export default About;
