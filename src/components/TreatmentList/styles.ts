import styled from "styled-components";
import background_2 from "../../assets/background_2.png";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-gap: 16px;
`;

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
  background-color: #fff;
  padding: 16px;

  .icon-container {
    background: url(${background_2});
    width: 100%;
    height: 120px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: #0094ff;
      font-size: 100px;
    }
  }

  h4 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  .label {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    h5 {
      font-size: 16px;
      margin-right: 16px;
    }

    span {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 8px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      background: linear-gradient(93.05deg, #00a3ff 0%, #0057ff 100%);
      border-radius: 20px;
      padding: 5px 10px;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;
