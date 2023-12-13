import React from "react";
import { StyedCell } from "./styles/StyledCell";
import { TERTORMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return <StyedCell type={type} color={TERTORMINOS[type].color} />;
};

export default Cell;
