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
  height: 100vh
`;

const Title = styled.h1`
  /* CSS styles for the title */
  font-size: 24px;
  color: #333;
  text-align: center;
`;

// const Button = styled.button`
//   /* CSS styles for the buttons */
//   padding: 10px 20px;
//   margin: 10px;
//   background-color: #D9D9D9;
//   color: #000;
//   border: 2px solid #000;
//   border-radius: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   width: 200px;
//   height: 40px;
// `;

const GreyButton = styled.button`
  /* CSS styles for the buttons */
  padding: 10px 20px;
  margin: 10px;
  background-color: #D9D9D9;
  color: #000;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  height: 40px;
`;

const WhiteButton = styled.button`
  /* CSS styles for the buttons */
  padding: 10px 20px;
  margin: 10px;
  background-color: #FFFFFF;
  color: #000;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  height: 40px;
`;


const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  height: 20px;
`;

export default function Finish() {


  return (
    <Container>
      <Title>퀴즈가 생성되었습니다!</Title>
      <Input
        type="text" 
        placeholder="링크"/>
      <GreyButton id="copy_btn">URL(주소) 복사</GreyButton>
      <Link to="/">
      <WhiteButton id="restart_btn">또 다른 퀴즈 만들기!</WhiteButton>

      </Link>
    </Container>
  );
}
