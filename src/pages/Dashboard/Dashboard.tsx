import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import ContentBackground from "../../components/ContentBackgroud";
import { StyledGrid } from "./styles";

const listMenu = [
  {
    icon: <span className="iconify" data-icon="fa:home"></span>,
    title: "Dashboard",
    id: 1,
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="mdi:archive-arrow-down-outline"
        data-inline="false"
      ></span>
    ),
    title: "Pacientes",
    id: 2,
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="mdi:archive-arrow-down-outline"
        data-inline="false"
      ></span>
    ),
    title: "Testes",
    id: 3,
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="mdi:archive-arrow-down-outline"
        data-inline="false"
      ></span>
    ),
    title: "Configurações",
    id: 4,
  },
];

const Dashboard = () => {
  return (
    <StyledGrid>
      <NavBar listMenu={listMenu} />
      <ContentBackground />
    </StyledGrid>
  );
};

export default Dashboard;
