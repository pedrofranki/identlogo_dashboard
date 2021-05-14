import styled from "styled-components";
import background_2 from "../../assets/background_2.png";

export const StyledGrid = styled.div``;

export const AttendanceHistoryCardList = styled.div`
  width: 100%;
  height: 30vh;
  padding: 16px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-gap: 16px;
`;

export const AttendanceHistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .background-icon {
    background: url(${background_2});
    width: 100%;
    height: 120px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-treatment {
      color: #0094ff;
      font-size: 35px;
    }
  }

  h4 {
    margin-bottom: 8px;
  }

  .label {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
`;
