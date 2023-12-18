import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import homeNav from "../img/tetris.png";

// 네비게이션 바 스타일
const Nav = styled.nav`
  background-color: #d6727c;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 링크 스타일
const NavLink = styled.img`
  width: 80px;
  height: auto;
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`;

// 네비게이션 컴포넌트
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <NavLink
        src={homeNav}
        onClick={() => {
          navigate("/");
        }}
      />
    </Nav>
  );
};

export default Navigation;
