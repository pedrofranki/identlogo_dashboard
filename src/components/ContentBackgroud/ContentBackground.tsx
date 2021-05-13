import React from "react";
import { StyledContentBackground } from "./styles";

export interface ContentBackgroundProps {
  generalInformation: React.ReactNode;
}

const ContentBackground = ({ generalInformation }: ContentBackgroundProps) => {
  return (
    <StyledContentBackground>
      <div className="general-information">{generalInformation}</div>
    </StyledContentBackground>
  );
};

export default ContentBackground;
