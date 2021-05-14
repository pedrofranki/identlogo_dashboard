import React from "react";
import { StyledContentBackground } from "./styles";

export interface ContentBackgroundProps {
  generalInformation: React.ReactNode;
  attendanceHistory: React.ReactNode;
}

const ContentBackground = ({
  generalInformation,
  attendanceHistory,
}: ContentBackgroundProps) => {
  return (
    <StyledContentBackground>
      <div className="general-information">{generalInformation}</div>
      <h2>Histórico de atendimentos</h2>
      <div className="attendance-history">{attendanceHistory}</div>
    </StyledContentBackground>
  );
};

export default ContentBackground;
