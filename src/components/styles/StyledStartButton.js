import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 30px;
  min-height: 30px;
  width: 100%;
  border: none;
  border-radius: 20px;
  color: black;
  background: #f27e7e;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변경 시간 및 이징 설정 */

  &:hover {
    background-color: #bd6363;
    color: white; /* 원하는 경우 글자 색상 변경도 가능합니다. */
  }
`;
