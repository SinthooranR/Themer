import React from "react";
import classes from "./Preview.module.css";

const Preview = (props) => {
  return (
    <div
      style={props.style}
      className={[classes.Preview, props.className].join(" ")}
    >
      <div className={classes.Post}>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Preview;
