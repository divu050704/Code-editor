import React from "react";
import Editor from "./components/Editor";
import Nav from "./components/Nav";
import Shell from "./components/Shell";

export default function App(props) {
  const [lang, setLang] = React.useState(
    localStorage.getItem("lang") || "javascript"
  );
  function changeLang(event) {
    setLang(event.target.value);
  }
  React.useEffect(
    function () {
      localStorage.setItem("lang", lang);
    },
    [lang]
  );
  const [code, setCode] = React.useState(localStorage.getItem("code") || "");
  function Delete() {
    localStorage.removeItem("code");
    setCode((prev) => "");
  }
  React.useEffect(
    function () {
      localStorage.setItem("code", code);
    },
    [code]
  );
  const [shell, setShell] = React.useState(<p>$</p>);
  function Run() {
    let output;
    let flag;
    try {
      // eslint-disable-next-line
      output = eval(code).toString();
      flag = true;
    } catch (e) {
      output = e.toString();
      flag = false;
    }

    if (props.mode && flag === true) {
      setShell((props) => (
        <div>
          <p>{props}</p>
          <p style={{ color: "#04b006" }}>$ {output}</p>
        </div>
      ));
    }
    if (props.mode && flag === false) {
      setShell((props) => (
        <div>
          <p>{props}</p>
          <p style={{ color: "#ff322f" }}>$ {output}</p>
        </div>
      ));
    }
    if (!props.mode && flag === true) {
      setShell((props) => (
        <div>
          <p>{props}</p>
          <p style={{ color: "#bdf27e" }}>$ {output}</p>
        </div>
      ));
    }
    if (!props.mode && flag === false) {
      setShell((props) => (
        <div>
          <p>{props}</p>
          <p style={{ color: "#c26c6b" }}>$ {output}</p>
        </div>
      ));
    }
  }
  function Clear() {
    setShell(<p>$</p>);
  }
  return (
    <div>
      <Nav
        mode={props.mode}
        handleModeChange={props.changeMode}
        handleLangChange={changeLang}
        handleSave={Delete}
        lang={lang}
        handleRun={Run}
      />

      <Editor
        mode={props.mode}
        lang={lang}
        value={code}
        handleOnChange={setCode}
      />
      {lang === "javascript" && (
        <Shell value={shell} mode={props.mode} handleClear={Clear} />
      )}
    </div>
  );
}
