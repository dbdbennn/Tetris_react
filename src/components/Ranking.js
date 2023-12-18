import { useState, useEffect } from "react";
import axios from "axios";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import {
  MainTitleImg,
  MainWrapper,
  StyledMainWrapper,
} from "./styles/StyledMain";

import title from "../img/Ranking.png";
import {
  RankingList,
  RankingListWrapper,
  RankingNumber,
  RankingWrapper,
  StyledRankingWrapper,
} from "./styles/StyledRanking";
import Navigation from "./Nav";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get_score")
      .then((response) => {
        setRanking(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ranking:", error);
      });
  }, []);

  return (
    <>
      <Navigation />
      <StyledMainWrapper>
        <MainWrapper>
          <MainTitleImg src={title} width={"250px"} />
          <RankingListWrapper>
            {ranking.map((player, index) => (
              <RankingWrapper>
                <RankingNumber ranking={index + 1}>{index + 1}.</RankingNumber>
                <RankingList>{player["player_name"]}</RankingList>
                <RankingList>{player["player_score"]}</RankingList>
              </RankingWrapper>
            ))}
          </RankingListWrapper>
        </MainWrapper>
      </StyledMainWrapper>
    </>
  );
};

export default Ranking;
