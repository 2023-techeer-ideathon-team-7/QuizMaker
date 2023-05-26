import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Answers from "./pages/answers";
import Main from "./pages/main";
import Questions from "./pages/questions";
import Loading from "./pages/loading";
import Finish from "./pages/finish";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
