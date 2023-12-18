import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import s from "./style.module.scss";

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "someJSCodeExample",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "someCSSCodeExample",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "someHTMLCodeExample",
  },
};

function TextEditor() {
  const [fileName, setFileName] = useState("script.js");

  const file = files[fileName];

  const editorOptions = {
    minimap: { enabled: false },
    lineNumbers: "off",
    glyphMargin: false,
  };

  return (
    <div>
      <Editor
        height="30vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        options={editorOptions}
      />
    </div>
  );
}

export default TextEditor;
