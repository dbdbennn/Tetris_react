import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;

// this page brings in styles and sets up the display
