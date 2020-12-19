import React from "react";
import NavItem from "./NavItem.js";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <h4>Themer</h4>
      <ul>
        <NavItem route="/" routeName="Home" />
        <NavItem route="/aboutMe" routeName="About" />
      </ul>
    </nav>
  );
};

export default Navbar;
