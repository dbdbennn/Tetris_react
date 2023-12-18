import styled from "styled-components";
import bgImage from "../../img/bg.jpeg";

export const MainTitleImg = styled.img`
  width: ${(props) => props.width ?? "300px"};
  height: auto;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: none;
`;

export const StyledMainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 38px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.hoverBackgroundColor};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: white;
  }
`;
