import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

const InputContainer = styled.form`
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
  const [keyword, setKeyword] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!keyword || !number) {
      setErrorMessage("키워드와 문제수를 모두 입력해주세요.");
      return;
    }

    if (parseInt(number) < 1) {
      setErrorMessage("문제수는 1개 이상이어야 합니다.");
      return;
    }

    setErrorMessage("");
    handleSubmission(keyword, number);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmission = async (keyword, number) => {
    console.log("키워드:", keyword);
    console.log("문제수:", number);

    try {
      const response = await axios
        .post("/api/quiz", {
          keyword,
          number,
        })
        .then((response) => {
          navigate("questions", {
            replace: false,
            state: { quiz: response.data },
          });
        });

      console.log("API response:", response.data);
    } catch (error) {
      console.error("요청에 실패했습니다:", error);
    }
  };
  return (
    <Container>
      <Title>QuizMaker</Title>
      <Description>키워드와 생성할 문제의 수를 입력해주세요</Description>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="키워드"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <Input
          type="number"
          placeholder="문제수"
          value={number}
          onChange={handleNumberChange}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit">완료</Button>
      </InputContainer>
    </Container>
  );
}
