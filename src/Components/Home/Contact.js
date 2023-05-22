import React from 'react';
import styled from 'styled-components';

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
  @media only screen and (max-width: 900px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const FormContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  margin-top: 50px;
`;

// const Image = styled.img`
//   @media only screen and (max-width: 900px) {
//     width: 100%;
//     height: 600px;
//     object-fit: cover;
//     border-radius: 0px;
//   }
//   width: 40%;
//   height: 1300px;
//   object-fit: cover;
// `;

const FormContent = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  border: 2px solid ${(props) => props.theme.blackColor};
  width: 70%;
  padding: 100px 0;
  :hover {
    box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      margin-bottom 0.3s ease-in-out;
  }
`;

const FormTitle = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 80%;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const InputContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  flex-wrap: wrap;
  width: 80%;
`;

const Input = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  width: 45%;
  margin-bottom: 50px;
  font-size: 16px;
`;

const InputTitle = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  height: 40px;
  font-weight: 700;
`;

const InputText = styled.input`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.blackColor};
  width: 90%;
  height: 40px;
  outline: none;
`;

const TextArea = styled.textarea`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.blackColor};
  width: 210%;
  height: 150px;
  padding: 10px 0 0 10px;
  outline: none;
`;

const SubmitBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.blackColor};
  width: 150px;
  height: 45px;
  color: ${(props) => props.theme.whiteColor};
  margin-top: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Contact = ({ contactRef }) => {
  const list = [
    {
      id: 0,
      title: '회사명',
      placeholder: '회사명을 입력해주세요.',
    },
    {
      id: 1,
      title: '연락처',
      placeholder: '연락처를 입력해주세요.',
    },
    {
      id: 2,
      title: 'E-mail',
      placeholder: '이메일을 입력해주세요.',
    },
    {
      id: 3,
      title: '사이트 제작 목적',
      placeholder: '간략한 사이트 목적을 입력해주세요.',
    },
    {
      id: 4,
      title: '예산',
      placeholder: '사이트 제작 예산을 입력해주세요.',
    },
    {
      id: 5,
      title: '레퍼런스 페이지 (선택)',
      placeholder: '참고용 사이트 주소를 입력해주세요.',
    },
    {
      id: 6,
      title: '문의사항',
      placeholder:
        '간단한 회사소개와 함께 추가적으로 문의하실 사항을 적어주세요.',
    },
  ];

  return (
    <Container ref={contactRef}>
      <TitleContainer>
        <Subtitle>Contact</Subtitle>
        <Titles>
          <Title>고민하는 이 순간에도</Title>
          <Title>누군가는 나아가는중입니다.</Title>
        </Titles>
      </TitleContainer>
      <FormContainer>
        <FormContent>
          <FormTitle>문의하기</FormTitle>
          <InputContainer>
            {list &&
              list.length > 0 &&
              list.map((l) => (
                <Input key={l.id}>
                  <InputTitle>{l.title}</InputTitle>
                  {l.id !== 6 ? (
                    <InputText type='text' placeholder={l.placeholder} />
                  ) : (
                    <TextArea type='text' placeholder={l.placeholder} />
                  )}
                </Input>
              ))}
          </InputContainer>
          <SubmitBtn>문의하기</SubmitBtn>
        </FormContent>
      </FormContainer>
    </Container>
  );
};
export default Contact;
