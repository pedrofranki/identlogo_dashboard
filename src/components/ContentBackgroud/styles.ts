import styled from "styled-components";

export const StyledContentBackground = styled.div`
  width: 100%;
  height: 92.5vh;
  background-color: #eff2f9;
  border-radius: 30px;
  padding: 40px;

  .general-information{
    display: grid;
    width: 100%;
    grid-gap: 12px;
    grid-template-columns: repeat(4, 3fr);
    margin-bottom: 32px;
  }

  .attendance-history{
    width: 100%;
    
  }
`;
