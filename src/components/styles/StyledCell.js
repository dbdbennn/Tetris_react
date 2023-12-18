import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: ${({ color }) =>
    color === "0, 0, 0"
      ? "#09101e" // 기본 배경색
      : `rgba(${color}, 0.8)`}; // props로 전달된 color 값을 사용하여 rgba로 배경색 설정
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
