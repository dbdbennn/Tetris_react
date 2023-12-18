import {
  MainButton,
  MainTitleImg,
  MainWrapper,
  StyledMainWrapper,
} from "./styles/StyledMain";
import title from "../img/tetris.png";
import { useNavigate } from "react-router-dom";
import Navigation from "./Nav";

const Main = () => {
  const navigate = useNavigate();

  const handleGamePlayClick = () => {
    navigate("/tetris");
  };

  const handleRankingClick = () => {
    navigate("/ranking");
  };
  return (
    <>
      <Navigation />
      <StyledMainWrapper>
        <MainWrapper>
          <MainTitleImg src={title} />
          <MainButton
            onClick={handleGamePlayClick}
            backgroundColor="#f2af88"
            hoverBackgroundColor="#d27844"
          >
            Game Play
          </MainButton>
          <MainButton
            onClick={handleRankingClick}
            backgroundColor="#ff9a9a"
            hoverBackgroundColor="#c76868"
          >
            Ranking
          </MainButton>
        </MainWrapper>
      </StyledMainWrapper>
    </>
  );
};

export default Main;
