import styled from "styled-components";
import backgroudImage from "../../assets/background.png";

export const StyledBackgroud = styled.div`
  background: url(${backgroudImage}),
    linear-gradient(107.65deg, #1042dd 0.43%, #24b0a8 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  padding: 32px 40px;
  box-sizing: border-box;
`;
