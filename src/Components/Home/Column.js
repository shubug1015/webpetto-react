import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
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
`;

const ListContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.flexCenter}
  width: 75%;
  margin-top: 100px;
  flex-wrap: wrap;
  cursor: grab;
`;

const List = styled.div`
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  /* height: 22vw; */
  height: 300px;
  margin-top: 5px;
  margin-bottom: 50px;
  margin-left: 10px;
  margin-right: 50px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const ListTitleContainer = styled.div`
  padding-top: 50px;
  padding-left: 30px;
  margin-bottom: 50px;
`;

const ListTitle = styled.div`
  @media only screen and (max-width: 800px) {
    font-size: 3.5vw;
    line-height: 30px;
  }
  font-size: 2vw;
  font-weight: 900;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  word-break: keep-all;
  line-height: 40px;
`;

const ListContent = styled.div`
  @media only screen and (max-width: 800px) {
    font-size: 2.5vw;
  }
  font-size: 1.2vw;
  /* font-size: 18px; */
  width: 90%;
  padding-left: 30px;
  font-weight: 500;
  line-height: 28px;
  word-break: keep-all;
  opacity: 0.9;
`;

const Column = ({ columnRef }) => {
  const list = [
    {
      id: 0,
      title1: '웹페토의 원리를 모른다면,',
      title2: '문의를 받지 않습니다.',
      content:
        "'홍보를 원하는 그 무엇이든' 180만원대 저렴한 비용으로 홍보를 해 주는 마케팅 방식. '웹페토'에만 존재하는 기술을 알려드립니다.",
    },
    {
      id: 1,
      title1: '왜 나는 웹사이트 제작 업체에게',
      title2: '항상 속는 걸까?',
      content:
        '왜 웹사이트 제작 업체에게 당한 피해자가 많을까요? 피해자가 되지 않는 비법을 알려드립니다.',
    },
    {
      id: 2,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
    {
      id: 3,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
    {
      id: 4,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
    {
      id: 5,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
    {
      id: 6,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
    {
      id: 7,
      title1: '검색엔진 최적화,',
      title2: '네이버가 망하는 시기 예언!',
      content:
        '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    },
  ];

  // function useWindowWidth() {
  //   const [windowWidth, setWindowWidth] = useState(undefined);

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowWidth(window.innerWidth);
  //     }

  //     window.addEventListener('resize', handleResize);

  //     handleResize();

  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  //   return windowWidth;
  // }

  // const size = useWindowWidth();

  // console.log(size);

  return (
    <Container ref={columnRef}>
      <TitleContainer>
        <Subtitle>Column</Subtitle>
        <Titles>
          <Title>전문가의 칼럼,</Title>
          <Title>직접 읽고 판단해보세요.</Title>
          {/* <div>{size}</div> */}
        </Titles>
      </TitleContainer>
      <ListContainer>
        <Swiper
          style={{
            width: '100%',
            height: '400px',
          }}
          // spaceBetween={50}
          // slidesPerView={2.1}
          breakpoints={{
            // when window width is >= 640px
            100: {
              // width: 1000,
              slidesPerView: 1.1,
            },
            // when window width is >= 768px
            1000: {
              // width: 1000,
              slidesPerView: 2.1,
            },
          }}
          // navigation
          scrollbar={{ draggable: true }}
        >
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <SwiperSlide key={l.id} style={{ height: '350px' }}>
                <List>
                  <ListTitleContainer>
                    <ListTitle>{l.title1}</ListTitle>
                    <ListTitle>{l.title2}</ListTitle>
                  </ListTitleContainer>
                  <ListContent>{l.content}</ListContent>
                </List>
              </SwiperSlide>
            ))}
        </Swiper>
      </ListContainer>
    </Container>
  );
};

export default Column;
