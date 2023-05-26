import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 0px;
  width: 120px;
  background-color: white;
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
  font-size: 24px;
`;

const PageNumber = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState("");
  const [totalQuestions, setTotalQuestions] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    console.log("quiz");
    const fetchQuizData = async () => {
      try {
        // const response = await axios("/api/quiz");
        const quizData = location.state.quiz;
        setQuiz(quizData);
        setQuestionNumber(1);
        setQuestion(quizData[0].question);
        setTotalQuestions(quizData.length);
        // const data = await response.json();

        // if (data.length > 0) {
        //   setQuestionNumber(1);
        //   setTotalQuestions(data.length);
        // } else {
        //   setQuestionNumber(0);
        //   setQuestion("");
        //   setTotalQuestions(0);
        // }
      } catch (error) {
        console.log("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  const goToPreviousQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
      // setQuestion(quiz[questionNumber - 1].question);
      // Update question using the fetched data or any other method
    }
  };

  const oButtonClick = () => {
    if (quiz[questionNumber - 1].answer) {
      setCorrectCount(correctCount + 1);
    }
    if (totalQuestions <= questionNumber) {
      navigate("../finish", {
        replace: false,
        state: { correctCount },
      });
    } else {
      setQuestion(quiz[questionNumber].question);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const xButtonClick = () => {
    if (!quiz[questionNumber - 1].answer) {
      setCorrectCount(correctCount + 1);
    }
    if (totalQuestions <= questionNumber) {
      navigate("../finish", {
        replace: false,
        state: { correctCount },
      });
    } else {
      setQuestion(quiz[questionNumber].question);
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <Container>
      <h1>Quiz {questionNumber}</h1>
      {questionNumber > 0 ? (
        <>
          <h2>{question}</h2>
          <ButtonContainer>
            <Button onClick={oButtonClick}>O</Button>
            <Button onClick={xButtonClick}>X</Button>
          </ButtonContainer>
          <ButtonContainer>
            <PrevButton onClick={goToPreviousQuestion}>
              <ArrowIcon />
            </PrevButton>
            <PageNumber>
              {questionNumber}/{totalQuestions}
            </PageNumber>
          </ButtonContainer>
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </Container>
  );
};

export default Questions;
