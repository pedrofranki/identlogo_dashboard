import React, { ReactNode } from "react";
import { StyledMenuItem } from "./styles";

export interface ItemMenuProps {
  icon: JSX.Element;
  title: string;
  selected: boolean;
  id: number;
  handleClick: (id: number) => void;
}

const ItemMenu = ({
  icon,
  title,
  selected = false,
  handleClick,
  id,
}: ItemMenuProps) => {
  return (
    <StyledMenuItem selected={selected}>
      {icon}
      <a onClick={() => handleClick(id)}>{title}</a>
    </StyledMenuItem>
  );
};

export default ItemMenu;
