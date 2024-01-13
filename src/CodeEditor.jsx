import React, { useState } from "react";

const CodeEditor = ({ htmlcode, csscode, onHtmlChange, onCssChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h4 style={{ textAlign: "center" }}>HTML</h4>
        <textarea
          value={htmlcode}
          onChange={(e) => {
            onHtmlChange(e.target.value);
          }}
          style={{
            width: "100%",
            height: "40vh",
            fontFamily: "monospace",
            resize: "none",
          }}
        />
      </div>

      <div>
        <h4 style={{ textAlign: "center" }}>CSS</h4>
        <textarea
          value={csscode}
          onChange={(e) => {
            onCssChange(e.target.value);
          }}
          style={{
            width: "100%",
            height: "40vh",
            fontFamily: "monospace",
            resize: "none",
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
