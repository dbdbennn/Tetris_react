import styled from "styled-components";

export const DialogContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff; /* 다이얼로그 배경색 */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */

  h1 {
    font-size: 20px;
    margin: 5px 0 14px 0;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
  }

  input {
    width: calc(100% - 20px);
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    text-align: center;
  }

  input::placeholder {
    color: #bbb;
  }
`;
export const SaveButtonDialog = styled.button`
  /* 기본 스타일 */
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #90b8ce;
  background-color: #ebf4fb;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변경 시간 및 이징 설정 */

  /* hover 스타일 */
  &:hover {
    background-color: #90b8ce;
    color: white; /* 원하는 경우 글자 색상 변경도 가능합니다. */
  }
`;

export const XButtonDialog = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  color: #666;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  margin: 4px;
`;

export const TransparentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검정 배경 */
`;

export const AlertMessageDiv = styled.div`
  font-size: 10px;
  color: #d32f2f;
  margin-bottom: 3px;
`;
