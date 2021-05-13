import React from "react";
import { StyledCardGeneralInformation } from "./styles";

export const CardGeneralInformation = () => {
  return (
    <StyledCardGeneralInformation>
      <div className="column">
        <span
          className="iconify"
          data-icon="mdi:account-outline"
          data-inline="false"
        ></span>
        <div>
          <span className="count">26</span>
          <span className="title">Pacientes ativos</span>
        </div>
      </div>
      <div>
        <span className="percentage">+30%</span>
      </div>
    </StyledCardGeneralInformation>
  );
};

export default CardGeneralInformation;
