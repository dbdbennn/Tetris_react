import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #2d3c58;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "#bd213c" : "#999")};
  background: #09101e;
  font-size: 18px;
`;
