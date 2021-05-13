import styled from "styled-components";

export const StyledMenuItem = styled.li<{ selected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;

  letter-spacing: 1px;
  height: 57px;
  padding: 20px 25px;
  width: 230px;
  margin: 24px 0;
  background-color: ${({ selected }) => (selected ? "#eff2f9" : "transparent")};
  border-radius: 30px 0 0 25px;

  svg {
    margin-right: 16px;
    color: ${({ selected }) => (selected ? "#303b5b" : "#fff")};
  }

  a,
  :active {
    color: ${({ selected }) => (selected ? "#303b5b" : "#fff")};
    text-decoration: none;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    top: -65px;
    right: -5px;
    height: 65px;
    width: 50px;
    border-bottom-right-radius: 30px;
    box-shadow: ${({ selected }) => (selected ? "0 50px 0 0 #eff2f9" : "none")};
    background-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -65px;
    right: -5px;
    height: 65px;
    width: 50px;
    border-top-right-radius: 30px;
    box-shadow: ${({ selected }) =>
      selected ? "0 -50px 0 0 #eff2f9" : "none"};
    background-color: transparent;
  }
`;
