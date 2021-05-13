import styled from "styled-components";

export const StyledCardGeneralInformation = styled.div`
  width: 100%;
  height: 176px;
  background-color: #fff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .count {
      font-size: 36px;
      font-weight: 700;
      color: #303b5b;
    }

    .title {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #303b5b;
    }
  }

  .percentage {
    padding: 5px 10px;
    background-color: #1CBF84;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    color: #ffffff;
  }

  svg {
    color: #0057ff;
    font-size: 36px;
  }
`;
