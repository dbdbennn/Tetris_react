import styled from "styled-components";

import bgImage from "../../img/bg.jpeg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center; /* 이미지를 화면의 중앙에 위치시킵니다. */
  overflow: hidden;
`;

export const StyledTitle = styled.img`
  height: 60px;
  width: auto;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
