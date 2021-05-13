import React, { useState } from "react";
import { StyledNavBar } from "./styles";
import logo from "../../assets/logo.png";
import ItemMenu from "../../components/ItemMenu";
import { ItemMenuProps } from "../../components/ItemMenu/ItemMenu";

export interface NavBarProps {
  listMenu: {
    icon: JSX.Element;
    title: string;
    id: number;
  }[];
}

export const NavBar = ({ listMenu }: NavBarProps) => {
  const [itemSelected, setItemSelected] = useState(1);

  function handleMenuClick(id: number) {
    console.log(id, itemSelected, "adadwdwa");

    setItemSelected(id);
  }

  return (
    <StyledNavBar>
      <div className="logo-container">
        <img src={logo} />
        <span>
          <span>Ident</span>logo
        </span>
      </div>
      <ul>
        {listMenu.map((item) => (
          <ItemMenu
            id={item.id}
            icon={item.icon}
            title={item.title}
            selected={item.id === itemSelected}
            handleClick={handleMenuClick}
          />
        ))}
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
