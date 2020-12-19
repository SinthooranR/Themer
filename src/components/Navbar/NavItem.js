import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.route} activeStyle={props.activeStyle}>
        {props.routeName}
      </NavLink>
    </li>
  );
};

export default NavItem;
