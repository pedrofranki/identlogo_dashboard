import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 320px;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 20px;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 25px;

    span {
      padding: 10px 5px;
      font-size: 26px;
      line-height: 39px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
    }

    span > span {
      font-weight: 900;
    }
  }

  ul {
    list-style: none;
    font-size: 16px;
    
  }
`;
