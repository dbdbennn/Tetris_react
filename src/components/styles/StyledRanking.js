import styled from "styled-components";
import bgImage from "../../img/bg.jpeg";

export const StyledRankingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center;
`;

export const RankingListWrapper = styled.div`
  border: 2px solid #ffd57c;
  background-color: #fff4dd;
  border-radius: 18px;
  width: 450px;
  max-height: 300px;
  padding: 35px 45px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const RankingNumber = styled.span`
  color: ${(props) => {
    if (props.ranking === 1) {
      return "gold"; // 랭킹이 1일 때 노란색
    } else if (props.ranking === 2) {
      return "silver"; // 랭킹이 2일 때 은색
    } else if (props.ranking === 3) {
      return "#d08d57"; // 랭킹이 3일 때 동색
    }
    // 기본 값
    return "black";
  }};
  font-size: 28px;
  line-height: 40px;
`;

export const RankingList = styled.span`
  font-size: 26px;
`;

export const RankingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

export const EmptyMessage = styled.div`
  color: #bd213c;
  text-align: center;
  font-size: 18px;
`;
