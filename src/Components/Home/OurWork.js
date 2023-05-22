import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 765px) {
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
  @media only screen and (max-width: 765px) {
    width: 85%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
  margin-top: 100px;
  flex-wrap: wrap;
`;

const List = styled.div`
  @media only screen and (max-width: 765px) {
    width: 48%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 45%;
`;

const Box = styled.div`
  @media only screen and (max-width: 765px) {
    height: 28vw;
    box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.1);
  }
  /* background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover; */
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 22vw;
  margin-bottom: 23px;
`;

const ListTitle = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 20px;
  }
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  height: 45px;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.blackColor};
  width: 150px;
  height: 45px;
  font-size: 14px;
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.mainColor};
    margin-bottom: 5px;
    transition: background-color 0.3s ease-in-out,
      margin-bottom 0.3s ease-in-out;
  }
`;

const OurWork = ({ ourWorkRef }) => {
  const [more, setMore] = useState(false);

  const showMore = () => setMore(true);

  const list = [
    {
      id: 0,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 1,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 2,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 3,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 4,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 5,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 6,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 7,
      imgUrl: require('Components/assets/portfolio.png'),
    },
  ];

  return (
    <Container ref={ourWorkRef}>
      <TitleContainer>
        <Subtitle>Our Work</Subtitle>
        <Titles>
          <Title>다를 수 밖에 없는 포트폴리오</Title>
        </Titles>
      </TitleContainer>
      <ListContainer>
        {list &&
          list.length > 0 &&
          list.map((l) =>
            more ? (
              <List key={l.id}>
                <Box imgUrl={l.imgUrl}></Box>
                <ListTitle>title</ListTitle>
              </List>
            ) : (
              l.id < 2 && (
                <List key={l.id}>
                  <Box imgUrl={l.imgUrl}></Box>
                  <ListTitle>title</ListTitle>
                </List>
              )
            )
          )}
      </ListContainer>
      {more === false && (
        <BtnContainer>
          <Btn onClick={showMore}>더보기</Btn>
        </BtnContainer>
      )}
    </Container>
  );
};

export default OurWork;
