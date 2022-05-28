import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor(props) {
  return (
    <CodeMirror
      value={props.value}
      height={props.lang === "javascript" ? "60vh" : "100%"}
      extensions={[
        props.lang === "javascript" ? javascript({ jsx: true }) : python({})
      ]}
      onChange={(value, viewUpdate) => {
        props.handleOnChange(value);
      }}
      theme={props.mode === false ? "dark" : "light"}
      style={{ borderBottom: "2px solid  #4360bf" }}
    />
  );
}
