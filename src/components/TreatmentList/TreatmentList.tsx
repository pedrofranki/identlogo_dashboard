import React from "react";
import {
  StyledGrid,
  AttendanceHistoryCardList,
  AttendanceHistoryCard,
} from "./styles";
import CardTreatment from "../CardTreatment";

import hex_icon from "../../assets/hex_icon.png";

const data = [
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
    icon: (
      <span
        className="iconify"
        data-icon="uil:brain"
        data-inline="false"
      ></span>
    ),
  },
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
];

const TreatmentList = () => {
  return (
    <>
      <StyledGrid>
        <AttendanceHistoryCardList>
          {data.map((item) => (
            <CardTreatment name={item.name} test={item.test} date={item.date} />
          ))}
        </AttendanceHistoryCardList>
        <AttendanceHistoryCard>
          <div className="icon-container">
            <img className="icon" src={hex_icon} alt="icon" />
          </div>
          <h4 className="card-title">Autismo</h4>
          <span className="subtitle">licenças disponiveis</span>
          <div className="flex-container">
            <h5>13</h5>
            <span>Comprar mais</span>
          </div>
        </AttendanceHistoryCard>
      </StyledGrid>
    </>
  );
};

export default TreatmentList;
