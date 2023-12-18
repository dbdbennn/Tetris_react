import { useState, useEffect } from "react";
import axios from "axios";
import {
  MainTitleImg,
  MainWrapper,
  StyledMainWrapper,
} from "./styles/StyledMain";

import title from "../img/Ranking.png";
import {
  EmptyMessage,
  RankingList,
  RankingListWrapper,
  RankingNumber,
  RankingWrapper,
} from "./styles/StyledRanking";
import Navigation from "./Nav";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [isRankingEmpty, setIsRankingEmpty] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get_score")
      .then((response) => {
        setRanking(response.data);
        if (ranking.length === 0) {
          setIsRankingEmpty(true);
        } else {
          setIsRankingEmpty(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching ranking:", error);
      });
  }, [ranking]);

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
            {isRankingEmpty && (
              <>
                <EmptyMessage>Ranking is Empty.</EmptyMessage>
              </>
            )}
          </RankingListWrapper>
        </MainWrapper>
      </StyledMainWrapper>
    </>
  );
};

export default Ranking;
