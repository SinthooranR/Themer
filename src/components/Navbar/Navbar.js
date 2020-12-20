import React from "react";
import NavItem from "./NavItem.js";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const history = useHistory();
  let theme;
  switch (props.theme) {
    case false:
      theme = classes.Light;
      break;
    case true:
      theme = classes.Dark;
      break;
    default:
      theme = classes.Light;
      break;
  }

  let welcomeHandler = (event) => {
      history.push("/");
      event.preventDefault();
  }

  return (
    <nav className={[classes.Navbar, theme].join(" ")}>
      <h2 onClick={welcomeHandler}>Themer</h2>
      <ul>
        <NavItem route="/home" routeName="Home"/>
        <NavItem route="/aboutMe" routeName="About" />
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(Navbar);
