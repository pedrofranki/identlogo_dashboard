import React from "react";
import {
  StyledGrid,
  AttendanceHistoryCardList,
  AttendanceHistoryCard,
} from "./styles";

import brain_icon from "../../assets/brain_icon.png";

interface CardTreatmentProps {
  name: string;
  test: string;
  date: string;
}

const CardTreatment = ({ name, test, date }: CardTreatmentProps) => {
  return (
    <>
      <AttendanceHistoryCard>
        <div className="background-icon">
          <img className="icon-treatment" src={brain_icon} alt="icon" />
        </div>
        <h4 className="card-title">{name}</h4>
        <span className="subtitle">Teste Realizado</span>
        <span className="label">{test}</span>
        <span className="subtitle">REALIZADO EM:</span>
        <span className="label">{date}</span>
      </AttendanceHistoryCard>
    </>
  );
};

export default CardTreatment;
