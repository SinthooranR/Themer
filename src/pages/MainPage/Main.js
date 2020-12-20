import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Preview from "../../components/Preview/Preview";
import classes from "./Main.module.css";

const Main = (props) => {
  let theme;
  let defaultCustomTheme;
  switch (props.theme) {
    case false:
      theme = classes.Light;
      defaultCustomTheme = classes.CustomLight;
      break;
    case true:
      theme = classes.Dark;
      defaultCustomTheme = classes.CustomDark;
      break;
    default:
      theme = classes.Light;
      defaultCustomTheme = classes.CustomLight;
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
      subThemeColor = defaultCustomTheme;
      break;
  }

  if (props.fontSize > 20 || props.fontSize <= 0) {
  }

  return (
    <div className={[classes.Main, theme].join(" ")}>
      <div className={classes.MainSettings}>
        <div>
          <h2>Select Main Theme</h2>
          <div className={classes.ThemeButton}>
            <button onClick={props.onLightTheme}>Light</button>
            <button onClick={props.onDarkTheme}>Dark</button>
          </div>

          <h3>Select Custom Color</h3>

          <select
            placeholder="Please select your Color"
            value={props.subTheme}
            onChange={(event) => props.onSelectSubTheme(event.target.value)}
          >
            <option value=""> None </option>
            <option value="red"> Red </option>
            <option value="blue"> Blue </option>
            <option value="green"> Green </option>
          </select>
        </div>

        <div className={classes.Font}>
          <h2>Select Font</h2>
          <select
            placeholder="Please select your Font"
            value={props.font}
            onChange={(event) => props.onSelectFont(event.target.value)}
          >
            <option value=""> Default (Cairo) </option>
            <option value="Sans-serif"> Sans-serif </option>
            <option value="Cursive"> Cursive </option>
            <option value="Monospace"> Monospace </option>
            <option value="Times New Roman"> Times New Roman </option>
          </select>

          <h3>Font Size : {props.fontSize}px</h3>
          <button
            onClick={() => props.onFontDecrease(props.fontSize)}
            disabled={props.fontSize <= 20}
          >
            -
          </button>
          <button
            onClick={() => props.onFontIncrease(props.fontSize)}
            disabled={props.fontSize >= 40}
          >
            +
          </button>
        </div>
      </div>

      <h1>Previews</h1>
      <div
        className={[classes.Previews].join(" ")}
        style={{ fontFamily: `${props.font}` }}
      >
        <Preview
          style={{ fontSize: `${props.fontSize}px` }}
          className={subThemeColor}
          name="Post"
          desc="A Sample Preview"
        />
        <Preview
          style={{ fontSize: `${props.fontSize}px` }}
          className={subThemeColor}
          name="Post"
          desc="Another Sample Preview"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    font: state.font,
    subTheme: state.subTheme,
    fontSize: state.fontSize,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLightTheme: () => dispatch(actions.lightTheme()),
    onDarkTheme: () => dispatch(actions.darkTheme()),
    onSelectSubTheme: (color) => dispatch(actions.themeSelect(color)),
    onSelectFont: (font) => dispatch(actions.fontSelect(font)),
    onFontIncrease: (size) => dispatch(actions.incrementFont(size)),
    onFontDecrease: (size) => dispatch(actions.decrementFont(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
