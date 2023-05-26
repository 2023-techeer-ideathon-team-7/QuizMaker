import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./App.css";
import Answers from "./pages/answers";
import Main from "./pages/main";
import Questions from "./pages/questions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/answers" element={<Answers />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
};

export default App;
