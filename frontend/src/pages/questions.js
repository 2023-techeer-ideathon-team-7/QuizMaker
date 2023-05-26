import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
`;


const Button = styled.button`
  padding: 10px 0px;
  width: 120px;
  background-color: #eaeaea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  background-color: transparent;
  border: none;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled(FaArrowLeft)`
  font-size: 24px; /* Adjust the size as needed */
`;

const PageNumber = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState("");
  const totalQuestions = 5;

  useEffect(() => {
    // 백엔드에서 퀴즈 데이터 가져오는 비동기 함수 예시
    const fetchQuizData = async () => {
      try {
        // 퀴즈 데이터 가져오기
        const response = await fetch("/api/quiz");
        const data = await response.json();

        if (data.length > 0) {
          setQuestionNumber(1);
          setQuestion(data[0].question);
        } else {
          setQuestionNumber(0);
          setQuestion("");
        }
      } catch (error) {
        console.log("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  const goToPreviousQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
      // Update question using the fetched data or any other method
    }
  };

  return (
    <Container>
      <h1>Quiz {questionNumber}</h1>
      {questionNumber > 0 ? (
        <>
          <h2>{question}</h2>
          <ButtonContainer>
            <Button>O</Button>
            <Button>X</Button>
          </ButtonContainer>
          <ButtonContainer>
            <PrevButton onClick={goToPreviousQuestion}>
              <ArrowIcon />
            </PrevButton>
            <PageNumber>{questionNumber}/{totalQuestions}</PageNumber>
          </ButtonContainer>
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </Container>
  );
};

export default Questions;
