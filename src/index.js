import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

function Main() {
  const [mode, setMode] = React.useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );
  function changeMode() {
    setMode((prev) => !prev);
  }
  React.useEffect(
    function () {
      localStorage.setItem("mode", mode);
    },
    [mode]
  );
  return (
    <div className={mode ? "body-light" : "body-dark"}>
      <App mode={mode} changeMode={changeMode} />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
