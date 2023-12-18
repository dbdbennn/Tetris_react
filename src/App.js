// components
import Tetris from "./components/Tetris";
import Main from "./components/Main";
import Ranking from "./components/Ranking";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // 폰트 적용

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/tetris" element={<Tetris />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
