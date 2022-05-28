import React from "react";
import light from "../images/light.png";
import dark from "../images/dark.png";

export default function Nav(props) {
  return (
    <div className={props.mode === false ? "navBar--dark" : "navBar--light"}>
      <div onClick={props.handleModeChange}>
        <img
          src={props.mode === false ? dark : light}
          alt="light"
          className="toggle"
        ></img>
      </div>
      <div>
        <select
          className={
            props.mode === false ? "language--dark" : "language--light"
          }
          id="language"
          onChange={props.handleLangChange}
          value={props.lang}
        >
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
        </select>
      </div>
      {props.lang === "javascript" && (
        <div>
          <button
            className={props.mode === false ? "run--dark" : "run--light"}
            onClick={props.handleRun}
          >
            Run
          </button>
        </div>
      )}
      <div>
        <button
          onClick={props.handleSave}
          className={props.mode === false ? "delete--dark" : "delete--light"}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
