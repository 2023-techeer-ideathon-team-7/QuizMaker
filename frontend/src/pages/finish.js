import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* CSS styles for the container */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 100vh;

  @media (max-width: 768px){
    width:100%;
  }
`;

const Title = styled.h1`
  /* CSS styles for the title */
  font-size: 35px;
  color: #333;
  text-align: center;
  margin-bottom : 50px;
`;


const GreyButton = styled.button`
  /* CSS styles for the buttons */
  padding: 10px 20px;
  margin: 10px;
  background-color: white;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 220px;
  height: 40px;
`;

const WhiteButton = styled.button`
  /* CSS styles for the buttons */
  padding: 10px 20px;
  margin: 10px;
  background-color: white;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 220px;
  height: 40px;
`;


const Input = styled.input`
  padding: 8px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  height: 20px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
`;


export default function Finish() {

  return (
    <Container>
      <Title>퀴즈가 생성되었습니다!</Title>
      <Input
        type="text" 
        placeholder="링크"/>
      <GreyButton id="copy_btn">URL (주소) 복사</GreyButton>
      <Link to="/">
      <WhiteButton id="restart_btn">다른 퀴즈 만들기</WhiteButton>

      </Link>
    </Container>
  );
}
