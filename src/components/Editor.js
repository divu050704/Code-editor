import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import {html} from "@codemirror/lang-html"
import { markdown } from "@codemirror/lang-markdown";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";

export default function Editor(props) {
  let lang
  if (props.lang === "javascript"){
    lang = javascript({jsx : true})
  }
  if (props.lang === "python"){
    lang = python({})
  }
  if (props.lang ==="html"){
    lang=html({})
  }
  if (props.lang === "markdown"){
    lang = markdown({})
  }
  if (props.lang === "cpp"){
    lang = cpp({})
  }
  if (props.lang === "java"){
    lang = java({})
  }
  return (
    <CodeMirror
      value={props.value}
      height={props.lang === "javascript" ? "60vh" : "100%"}
      extensions={[lang]}
      onChange={(value, viewUpdate) => {
        props.handleOnChange(value);
      }}
      theme={props.mode === false ? "dark" : "light"}
      style={{ borderBottom: "2px solid  #4360bf" }}
    />
  );
}
