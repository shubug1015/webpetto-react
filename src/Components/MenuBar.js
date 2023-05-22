import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';

const BackGround = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.menuBar ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.menuBar ? '1' : '0')};
  transition: opacity 0.7s ease-in-out, visibility 0.7s ease-in-out;
  z-index: -1;
`;

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  justify-content:flex-end;
  position: absolute;
  top: 0;
  right: ${(props) => (props.menuBar ? 0 : '-100vw')};
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.whiteColor};
  transition: right 0.7s ease-in-out;
`;

const Menu = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  /* ${(props) => props.theme.columnCenter} */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: black;
  width: 60%;
  height: 100%;
`;

const TopMenu = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
  height: ${(props) => props.theme.headerHeight};
`;

const Logo = styled.div`
  font-size: 30px;
`;

const Icon = styled.div`
  font-size: 36px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const MiddleMenu = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  height: 60%;
`;

const Item = styled(Link)`
  font-size: 48px;
  font-weight: 500;
  opacity: 0.5;
  :not(:last-child) {
    margin-bottom: 45px;
  }
  :hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const BottomMenu = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  margin-bottom: 50px;
`;

const Btn = styled.div`
  font-size: 20px;
  opacity: 0.5;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 20px;
  }
  :hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const MenuBar = ({ menuBar, closeMenuBar }) => {
  const list = [
    {
      id: 0,
      url: '/',
      name: 'Main',
    },
    {
      id: 1,
      url: '/our_work',
      name: 'Our Work',
    },
    {
      id: 2,
      url: '/column',
      name: 'Column',
    },
    {
      id: 3,
      url: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <>
      <BackGround menuBar={menuBar} />
      <Container menuBar={menuBar}>
        <Menu>
          <TopMenu>
            <Logo>로고</Logo>
            <Icon>
              <VscChromeClose onClick={closeMenuBar} />
            </Icon>
          </TopMenu>
          <MiddleMenu>
            {list &&
              list.length > 0 &&
              list.map((l) => (
                <Item key={l.id} to={l.url} onClick={closeMenuBar}>
                  {l.name}
                </Item>
              ))}
          </MiddleMenu>
          <BottomMenu>
            <Btn>링크</Btn>
            <Btn>링크</Btn>
          </BottomMenu>
        </Menu>
      </Container>
    </>
  );
};

export default MenuBar;
