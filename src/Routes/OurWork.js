import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Meta from 'Meta';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  max-width: 100%;
  /* padding-top: 100px; */
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 765px) {
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  margin-top: 50px;
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
  /* background-image: url(${(props) =>
    props.imgUrl});
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

const OurWork = () => {
  const metaData = {
    title: '웹사이트 제작 No.1 | Webpetto(웹페토)',
    description:
      '웹사이트 제작 전문 웹페토입니다. 웹페토의 서비스와 포트폴리오를 보시고 원하는 웹사이트를 문의해보세요!',
    canonical: '',
  };

  const ref = useRef(null);

  const [scroll, setScroll] = useState({
    y: window.scrollY,
    innerHeight: window.innerHeight + 100,
    mainHeight: ref.current?.offsetHeight,
  });

  const [loading, setLoading] = useState(true);

  const useScroll = () => {
    const onScroll = () => {
      setScroll({
        y: window.scrollY,
        innerHeight: window.innerHeight,
        mainHeight: ref.current.offsetHeight + 100,
      });
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    });
    return scroll;
  };

  const { y, mainHeight, innerHeight } = useScroll();

  const list = [
    {
      id: 0,
      state: 1,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 1,
      state: 1,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 2,
      state: 1,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 3,
      state: 1,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 4,
      state: 2,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 5,
      state: 2,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 6,
      state: 2,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 7,
      state: 2,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 8,
      state: 3,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 9,
      state: 3,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 10,
      state: 3,
      imgUrl: require('Components/assets/portfolio.png'),
    },
    {
      id: 11,
      state: 3,
      imgUrl: require('Components/assets/portfolio.png'),
    },
  ];

  const [num, setNum] = useState(1);

  if (loading && y + innerHeight - mainHeight > 0) {
    setNum(num + 1);
    setLoading(false);
  }

  if (loading === false && y + innerHeight - mainHeight < 0) {
    setLoading(true);
  }
  console.log(y + innerHeight - mainHeight, num);

  return (
    <>
      <Meta data={metaData} />
      <Container ref={ref}>
        <TitleContainer>
          <Subtitle>Our Work</Subtitle>
          <Titles>
            <Title>다를 수 밖에 없는 포트폴리오</Title>
          </Titles>
        </TitleContainer>
        <ListContainer>
          {list &&
            list.length > 0 &&
            list.map(
              (l) =>
                l.state <= num && (
                  <List key={l.id}>
                    <Box imgUrl={l.imgUrl}></Box>
                    <ListTitle>title</ListTitle>
                  </List>
                )
            )}
        </ListContainer>
      </Container>
    </>
  );
};

export default OurWork;
