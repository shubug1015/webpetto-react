import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Meta from 'Meta';
import Controller from 'Components/Controller';
import Main from 'Components/Home/Main';
import About from 'Components/Home/About';
import WhatWeDo from 'Components/Home/WhatWeDo';
import OurWork from 'Components/Home/OurWork';
import Column from 'Components/Home/Column';
import Contact from 'Components/Home/Contact';
import { ControllerFunc } from 'Components/Func';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const Home = ({ homeRef }) => {
  const metaData = {
    title: '웹사이트 제작 No.1 | Webpetto(웹페토)',
    description:
      '웹사이트 제작 전문 웹페토입니다. 웹페토의 서비스와 포트폴리오를 보시고 원하는 웹사이트를 문의해보세요!',
    canonical: '',
  };

  const {
    mainRef,
    aboutRef,
    whatWeDoRef,
    ourWorkRef,
    columnRef,
    contactRef,
  } = homeRef;

  const [scroll, setScroll] = useState({
    y: window.scrollY,
    innerHeight: window.innerHeight + 100,
    mainHeight: mainRef.current?.offsetHeight,
  });

  const [loading, setLoading] = useState(false);

  const useScroll = () => {
    const onScroll = () => {
      setScroll({
        y: window.scrollY,
        innerHeight: window.innerHeight,
        mainHeight: mainRef.current.offsetHeight + 100,
      });
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    });
    return scroll;
  };

  const { y, mainHeight, innerHeight } = useScroll();

  const scrollToLoader = (e, ref) => {
    const scroll = y + innerHeight - mainHeight;

    if (loading && e.nativeEvent.wheelDelta < 0 && scroll > 0) {
      window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
      setTimeout(() => setLoading(false), 1500);
    }
  };

  // const [touch, setTouch] = useState({
  //   touchStartY: null,
  //   touchEndY: null,
  // });

  // const useTouch = () => {
  //   const startTouch = (e) => {
  //     setTouch({
  //       ...touch,
  //       touchStartY: e.touches[0].clientY,
  //     });
  //   };
  //   const endTouch = (e) => {
  //     setTouch({
  //       ...touch,
  //       touchEndY: e.changedTouches[0].clientY + 5,
  //     });
  //   };
  //   useEffect(() => {
  //     window.addEventListener('touchstart', startTouch);
  //     window.addEventListener('touchend', endTouch);
  //     return () => {
  //       window.removeEventListener('touchstart', startTouch);
  //       window.removeEventListener('touchend', endTouch);
  //     };
  //   });
  //   return touch;
  // };

  // const { touchStartY, touchEndY } = useTouch();

  // if (loading && touchStartY > touchEndY && y + innerHeight - mainHeight > 0) {
  //   window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop });
  //   setTimeout(() => setLoading(false), 1000);
  // }

  return (
    <>
      <Meta data={metaData} />
      <Container onWheel={(e) => scrollToLoader(e, aboutRef)}>
        <Controller {...homeRef} controllerRef={ControllerFunc(y, homeRef)} />
        <Main mainRef={mainRef} />
        <About aboutRef={aboutRef} loading={loading} />
        {loading === false && (
          <>
            <WhatWeDo whatWeDoRef={whatWeDoRef} />
            <OurWork ourWorkRef={ourWorkRef} />
            <Column columnRef={columnRef} />
            <Contact contactRef={contactRef} />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
