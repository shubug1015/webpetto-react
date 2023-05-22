import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
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
`;

const ListContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 75%;
  margin-top: 100px;
`;

const ListWrap = styled.div`
  @media only screen and (max-width: 900px) {
    width: 46%;
    margin: 0 2%;
  }
  ${(props) => props.theme.flexStartCenter};
  width: 30%;
  margin-right: 3.33%;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  width: 85%;
  height: 250px;
`;

const ListTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
  margin-bottom: 30px;
  padding-bottom: 20px;
`;

const ListContent = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  word-break: keep-all;
  line-height: 20px;
`;

const WhatWeDo = ({ whatWeDoRef }) => {
  const list = [
    {
      id: 0,
      title: '1. 기획',
      content1: '웹사이트 목적 정의',
      content2: '타겟 고객군 파악 및 브랜딩',
      content3: '요구사항 분석',
    },
    {
      id: 1,
      title: '2. 디자인',
      content1: '레이아웃 선정',
      content2: '브랜드 이미지 기반 UI / UX 제작',
      content3: '디자인 요소 제작',
    },
    {
      id: 2,
      title: '3. 개발',
      content1: 'Front-End UI / UX 구현',
      content2: 'DB 구축',
      content3: 'Back-End api 제작',
    },
    {
      id: 3,
      title: '4. 웹사이트 런칭',
      content1: '코드 deploy',
      content2: '도메인 연동',
      content3: 'SEO 최적화',
    },
    {
      id: 4,
      title: '5. 작업완료',
      content1: '최종 결과 전달',
      content2: '개발 리소스 인수인계',
      content3: '유지 & 보수',
    },
  ];

  return (
    <Container ref={whatWeDoRef}>
      <TitleContainer>
        <Subtitle>What We Do</Subtitle>
        <Titles>
          <Title>웹페토 프로세스</Title>
        </Titles>
      </TitleContainer>
      <ListContainer>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <ListWrap key={l.id}>
              <List>
                <ListTitle>{l.title}</ListTitle>
                <ListContent>{l.content1}</ListContent>
                <ListContent>{l.content2}</ListContent>
                <ListContent>{l.content3}</ListContent>
              </List>
            </ListWrap>
          ))}
      </ListContainer>
    </Container>
  );
};

export default WhatWeDo;
