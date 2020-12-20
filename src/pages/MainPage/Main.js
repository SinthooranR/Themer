import React from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Main.module.css";

const Main = (props) => {
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

  let subThemeColor;
  switch (props.subTheme) {
    case "red":
      subThemeColor = classes.Red;
      break;
    case "blue":
      subThemeColor = classes.Blue;
      break;
    case "green":
      subThemeColor = classes.Green;
      break;
    default:
      subThemeColor = theme;
      break;
  }

  return (
    <div className={[classes.Main, theme].join(" ")}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>Welcome to Themer</h1>

      <div className={classes.MainSettings}>
        <div>
          <h2>Select Main Theme</h2>
          <div>
            <button onClick={props.onLightTheme}>Light</button>
            <button onClick={props.onDarkTheme}>Dark</button>
          </div>

          <h3>Select Custom Color</h3>

          <select
            placeholder="Please select your bank"
            value={props.subTheme}
            onChange={(event) => props.onSelectSubTheme(event.target.value)}
          >
            <option value=""> None </option>
            <option value="red"> Red </option>
            <option value="blue"> Blue </option>
            <option value="green"> Green </option>
          </select>
        </div>

        <div>
          <h2>Select Font</h2>
          <select
            placeholder="Please select your bank"
            value={props.subTheme}
            onChange={(event) => props.onSelectSubTheme(event.target.value)}
          >
            <option value=""> Default </option>
            <option value="red"> Red </option>
            <option value="blue"> Blue </option>
            <option value="green"> Green </option>
          </select>

          <h3>Font Size : {props.fontSize}px</h3>
          <button onClick={() => props.onFontIncrease(props.fontSize)}>
            +
          </button>
          <button onClick={() => props.onFontDecrease(props.fontSize)}>
            -
          </button>

          <h4
            className={subThemeColor}
            style={{ fontSize: `${props.fontSize}px` }}
          >
            HELLLLLLLLLLLLLLO {props.subTheme}
          </h4>
        </div>
      </div>

      <h1>Previews</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    subTheme: state.subTheme,
    fontSize: state.fontSize,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLightTheme: () => dispatch(actions.lightTheme()),
    onDarkTheme: () => dispatch(actions.darkTheme()),
    onSelectSubTheme: (color) => dispatch(actions.themeSelect(color)),
    onFontIncrease: (size) => dispatch(actions.incrementFont(size)),
    onFontDecrease: (size) => dispatch(actions.decrementFont(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
