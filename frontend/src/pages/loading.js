import React from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 16px;
  font-size: 18px;
  color: #333;
`;

const CustomClipLoader = styled(ClipLoader)`
  // Add your custom CSS here
  // Example:
  margin-right: 16px;
`;

export default function LoadingPage() {
  return (
    <Container>
      <SpinnerContainer>
        <CustomClipLoader size={40} color={"#007bff"} loading={true} />
        <Text>결과 확인중...</Text>
      </SpinnerContainer>
    </Container>
  );
}
