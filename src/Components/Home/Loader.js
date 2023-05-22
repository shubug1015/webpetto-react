import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  position: absolute;
  top: 0%;
  left: 0;
  background: linear-gradient(to right, #8e93ac, #7579e7);
  width: 100%;
  height: ${(props) => (props.loading ? '100vh' : 0)};
  overflow: hidden;
  transition: height 0.7s ease-in-out;
  z-index: 1;
`;

const Img = styled.div`
  font-size: 120px;
  font-weight: 900;
  padding: 200px 0;
`;

const Test = styled.div`
  :not(:last-child) {
    margin-bottom: 35px;
  }
  :nth-child(2) {
    margin-left: 190px;
  }
  :nth-child(3) {
    margin-left: 140px;
  }
`;

const Highlight = styled.span`
  background-color: #fafafa;
  border-radius: 10px;
  color: ${(props) => props.theme.mainColor};
  padding: 12px;
`;

const Loader = ({ ref2, loading }) => (
  <Container ref={ref2} loading={loading}>
    <Img>
      <Test>
        <Highlight
          style={{
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '60px',
            borderTopRightRadius: '50px',
          }}
        >
          WE
        </Highlight>
        'll
      </Test>
      <Test>
        <Highlight
          style={{
            borderBottomLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        >
          B
        </Highlight>
        e your
      </Test>
      <Test>
        Ze
        <Highlight
          style={{
            borderBottomRightRadius: '50px',
            borderBottomLeftRadius: '50px',
            borderTopRightRadius: '50px',
          }}
        >
          PETTO
        </Highlight>
      </Test>
    </Img>
  </Container>
);

export default Loader;
