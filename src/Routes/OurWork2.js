import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Meta from 'Meta';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  max-width: 100%;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  align-items: flex-end;
  width: 80%;
`;

const Title = styled.div`
  color: #ff8570;
  font-size: 45px;
  font-weight: 700;
`;

const TitleType = styled.div`
  color: #333333;
  font-weight: 700;
  margin-top: 10px;
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 80%;
`;

const ImgContainer = styled.div`
  width: 70%;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnStartCenter};
  width: 30%;
  height: 500px;
  padding: 50px 0;
`;

const TextSection = styled.div`
  padding: 20px 0;
`;

const TextTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const TextContent = styled.div`
  ${(props) => props.theme.flexStartCenter};
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #333333;
  word-break: keep-all;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #9e9e9e;
  margin-right: 15px;
`;

const LinkContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 80%;
  padding: 30px 0;
`;

const LinkBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 150px;
  height: 50px;
  margin: 0 20px;
  cursor: pointer;
  font-weight: 700;
  border: 1px solid black;
`;

const OurWork2 = () => {
  const metaData = {
    title: '웹사이트 제작 No.1 | Webpetto(웹페토)',
    description:
      '웹사이트 제작 전문 웹페토입니다. 웹페토의 서비스와 포트폴리오를 보시고 원하는 웹사이트를 문의해보세요!',
    canonical: '',
  };

  return (
    <>
      <Meta data={metaData} />
      <Container>
        <TitleContainer>
          <Title>Titan's Note</Title>
          <TitleType>랜딩페이지</TitleType>
        </TitleContainer>
        <ContentContainer>
          <ImgContainer bgUrl={require('Components/assets/portfolio.png')} />
          <TextContainer>
            <TextSection>
              <TextTitle>제작기간</TextTitle>
              <TextContent>
                12일 (기획 2일 / 디자인 4일 / 퍼블리싱 6일)
              </TextContent>
            </TextSection>
            <TextSection>
              <TextTitle>키워드</TextTitle>
              <TextContent>#개성있는 #통통튀는 #깔끔한</TextContent>
            </TextSection>
            <TextSection>
              <TextTitle>COLOR</TextTitle>
              <TextContent>
                <ColorBox style={{ backgroundColor: '#ff8570' }} />
                <ColorBox style={{ backgroundColor: '#fafafa' }} />
                <ColorBox style={{ backgroundColor: '#333333' }} />
              </TextContent>
            </TextSection>
            <TextSection>
              <TextTitle>기획의도</TextTitle>
              <TextContent>
                방문자들을 대상으로 진행중인 이벤트나 관련소식등 정보전달과
                상품구매등의 이익창출
              </TextContent>
            </TextSection>
          </TextContainer>
        </ContentContainer>
        <LinkContainer>
          <LinkBtn
            onClick={() =>
              window.open('https://webpetto.d2cpkqwx3bl9jj.amplifyapp.com')
            }
          >
            사이트 바로보기
          </LinkBtn>
        </LinkContainer>
      </Container>
    </>
  );
};

export default OurWork2;
