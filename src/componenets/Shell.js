import React from "react";

export default function Shell(props) {
  return (
    <div className={props.mode ? "shell--light" : "shell--dark"}>
      <button
        onClick={props.handleClear}
        className={props.mode === false ? "clear--dark" : "clear--light"}
      >
        Clear
      </button>
      <p>{props.value}</p>
    </div>
  );
}
