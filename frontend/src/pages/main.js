import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px; /* Increase the max-width as per your preference */
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Main() {
  return (
    <Container>
      <Title>QuizMaker</Title>
      <Description>키워드와 생성할 문제의 수를 입력해주세요</Description>
      <InputContainer>
        <Input type="text" placeholder="키워드" />
        <Input type="number" placeholder="문제수" />
      </InputContainer>
      <Button>완료</Button>
    </Container>
  );
}
