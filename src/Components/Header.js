import React, { useState } from 'react';
import styled from 'styled-components';
import MenuBar from 'Components/MenuBar';
import { HiMenuAlt3 } from 'react-icons/hi';

const Container = styled.header`
  ${(props) => props.theme.flexBetweenCenter}
  position: fixed;
  top: 0;
  left: 0;
  /* border-bottom: 1px solid black; */
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 99;
`;

const Logo = styled.div`
  margin-left: 5%;
  font-size: 32px;
`;

const Icon = styled.div`
  margin-right: 5%;
  font-size: 36px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => setMenuBar(true);

  const closeMenuBar = () => setMenuBar(false);

  return (
    <Container>
      <Logo>로고</Logo>
      <Icon onClick={openMenuBar}>
        <HiMenuAlt3 />
      </Icon>
      <MenuBar menuBar={menuBar} closeMenuBar={closeMenuBar} />
    </Container>
  );
};

export default Header;
