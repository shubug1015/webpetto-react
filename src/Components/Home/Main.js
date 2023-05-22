import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TiArrowDownThick } from 'react-icons/ti';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding-top: 80px;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 80%;
`;

const Text = styled.div`
  font-size: 45px;
  /* font-size: 3vw; */
  font-weight: 900;
  line-height: 90px;
  word-break: keep-all;
  :not(:last-child) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 26px;
    line-height: 45px;
    :not(:last-child) {
      margin-bottom: 40px;
    }
    :last-child {
      font-size: 16px;
      font-weight: 700;
      opacity: 0.9;
    }
  }
`;

const Border = styled.span`
  @media only screen and (max-width: 900px) {
    border-bottom: 3px solid #333333;
  }
  border-bottom: 4px solid #333333;
  :first-child {
    margin-right: 10px;
  }
  :last-child {
    margin-left: 10px;
  }
`;

const Highlight = styled.span`
  @media only screen and (max-width: 900px) {
    border-bottom: 3px solid ${(props) => props.theme.mainColor};
  }
  color: ${(props) => props.theme.mainColor};
  border-bottom: 4px solid ${(props) => props.theme.mainColor};
`;

const ClickContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  font-size: 24px;
  font-weight: 700;
  opacity: 0.9;
`;

const bounce = keyframes`
  0% {
    transform: scale(1.5)
  }
  50% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.5)
  }
`;

const Circle = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${bounce} 1.5s infinite;
  background-color: ${(props) => props.theme.mainColor};
  margin-left: 100px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: #fafafa;
  :hover {
    background-color: #5b5fb2;
    transition: background-color 0.3s ease-in-out;
  }
`;

// const BtnContainer = styled.div`
//   @media only screen and (max-width: 900px) {
//     width: 90%;
//     margin-top: 30px;
//   }
//   ${(props) => props.theme.columnStartCenter}
//   width: 75%;
//   margin-top: 30px;
// `;

// const Btn = styled.div`
//   @media only screen and (max-width: 900px) {
//     width: 170px;
//     height: 45px;
//     font-size: 14px;
//   }
//   ${(props) => props.theme.flexCenter}
//   background-color: ${(props) => props.theme.blackColor};
//   width: 220px;
//   height: 60px;
//   font-size: 18px;
//   color: ${(props) => props.theme.whiteColor};
//   cursor: pointer;
//   z-index: 1;
//   :hover {
//     background-color: ${(props) => props.theme.mainColor};
//     transition: background-color 0.3s ease-in-out;
//   }
// `;

// const BtnText = styled.div`
//   ${(props) => props.theme.flexCenter};
//   width: 120px;
// `;

// const LineContainer = styled.div`
//   ${(props) => props.theme.flexStartCenter};
//   width: 100px;
// `;

// const Line = styled.div`
//   width: 50px;
// `;

// const TopLine = styled.div`
//   border-bottom: 1px solid ${(props) => props.theme.whiteColor};
//   width: ${(props) => (props.line ? '50px' : '30px')};
//   transition: width 0.3s ease-in-out;
// `;

// const BottomLine = styled.div`
//   border-top: 1px solid ${(props) => props.theme.whiteColor};
//   width: ${(props) => (props.line ? '50px' : '30px')};
//   transition: width 0.3s ease-in-out;
// `;

// const ImgContainer = styled.div`
//   @media only screen and (max-width: 900px) {
//     display: none;
//   }
//   ${(props) => props.theme.columnStartCenter}
//   width: 95%;
//   margin-top: -50px;
// `;

// const ImgContainerM = styled.div`
//   @media only screen and (min-width: 900px) {
//     display: none;
//   }
//   ${(props) => props.theme.columnStartCenter}
//   width: 95%;
//   margin: 20px 0;
// `;

// const Img = styled.img`
//   @media only screen and (max-width: 900px) {
//     width: 50px;
//     height: 100px;
//   }
//   width: 120px;
//   height: 250px;
// `;

const Main = ({ mainRef }) => {
  const [line, setLine] = useState(false);

  const onLine = () => setLine(true);

  const outLine = () => setLine(false);

  return (
    <Container ref={mainRef}>
      <Content>
        <TextContainer>
          <Text>
            <Border>저희는</Border>
            <Highlight>매력</Highlight>
            <Border>있는 회사와 함께합니다.</Border>
          </Text>
          <Text>
            <Border>저희는</Border>
            <Highlight>비전</Highlight>
            <Border>있는 회사와 함께합니다.</Border>
          </Text>
          <Text>
            <Border>저희는 </Border>
            <Highlight>똑똑한</Highlight>
            <Border>클라이언트와 함께합니다.</Border>
          </Text>
          <ClickContainer>
            위 조건에 해당하는 클라이언트 분들만 클릭해주세요. <Circle />
          </ClickContainer>
        </TextContainer>
      </Content>
      {/* <BtnContainer>
        <Btn onMouseEnter={onLine} onMouseLeave={outLine}>
          <BtnText>문의하기</BtnText>
          <LineContainer>
            <Line line={line}>
              <TopLine line={line} />
              <BottomLine line={line} />
            </Line>
            <AiOutlineRight
              size={20}
              style={{
                marginLeft: line ? '-14px' : '-34px',
                transition: 'margin-left 0.3s ease-in-out',
              }}
            />
          </LineContainer>
        </Btn>
      </BtnContainer>
      <ImgContainer>
        <Img src={require('Components/assets/main.png')} alt='' />
      </ImgContainer>
      <ImgContainerM>
        <Img src={require('Components/assets/main_m.png')} alt='' />
      </ImgContainerM> */}
    </Container>
  );
};

export default Main;
