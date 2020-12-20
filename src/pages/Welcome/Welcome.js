import React from "react";
import { connect } from "react-redux";
import Logo from "../../assets/myLogo.png";
import classes from "./Welcome.module.css";

const Welcome = (props) => {
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

  return (
    <div className={[classes.Welcome, theme].join(" ")}>
      <h1>Welcome to the App</h1>
      <img src={Logo} className="App" alt="logo" />
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Welcome);
