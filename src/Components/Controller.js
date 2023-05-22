import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 765px) {
    display: none;
  }
  font-size: 2vw;
  ${(props) => props.theme.columnStartCenter}
  position: fixed;
  top: ${(props) => props.theme.headerHeight};
  right: 0;
  visibility: ${(props) => (props.focus ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.focus ? 0 : 1)};
  transition: visibility 0.4s ease-in-out, opacity 0.4s ease-in-out;
  width: 150px;
  font-size: 15px;
  font-weight: 500;
  z-index: 99;
`;

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  opacity: ${(props) => (props.focus ? 1 : 0.5)};
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
`;

const Controller = ({
  aboutRef,
  whatWeDoRef,
  ourWorkRef,
  columnRef,
  contactRef,
  controllerRef,
}) => {
  const list = [
    {
      id: 0,
      ref: aboutRef,
      focus: controllerRef === 'About',
      content: 'About',
    },
    {
      id: 1,
      ref: whatWeDoRef,
      focus: controllerRef === 'What We Do',
      content: 'What We Do',
    },
    {
      id: 2,
      ref: ourWorkRef,
      focus: controllerRef === 'Our Work',
      content: 'Our Work',
    },
    {
      id: 3,
      ref: columnRef,
      focus: controllerRef === 'Column',
      content: 'Column',
    },
    {
      id: 4,
      ref: contactRef,
      focus: controllerRef === 'Contact',
      content: 'Contact',
    },
  ];

  const scrollToRef = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop + 100 });
  };

  return (
    <Container focus={controllerRef === null}>
      {list &&
        list.length > 0 &&
        list.map((l) => (
          <Item key={l.id} focus={l.focus} onClick={() => scrollToRef(l.ref)}>
            {l.content}
          </Item>
        ))}
    </Container>
  );
};

export default Controller;
