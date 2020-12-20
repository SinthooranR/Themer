import React from "react";
import { connect } from "react-redux";
import classes from "./About.module.css";

const About = (props) => {
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
    <div className={[classes.About, theme].join(" ")}>
      <h1>About The App</h1>
      <p>
        This is just a fun small application which uses React and the basics of
        Redux to control the states globally
      </p>

      <h1 style={{paddingTop: 'none'}}>More Informaton</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sinthooranravinathan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SinthooranR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://sinthooranr.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(About);
