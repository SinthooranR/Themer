// import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import classes from "./App.module.css";

function App(props) {
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
    <div className={[classes.App, theme].join(" ")}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>Welcome to Themer</h1>

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
        <option value=""> Select your Bank </option>
        <option value="red"> Red </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <h4 className={subThemeColor}>HELLLLLLLLLLLLLLO {props.subTheme}</h4>

      <div></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    subTheme: state.subTheme,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLightTheme: () => dispatch(actions.lightTheme()),
    onDarkTheme: () => dispatch(actions.darkTheme()),
    onSelectSubTheme: (color) => dispatch(actions.themeSelect(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
