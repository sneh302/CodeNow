import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import OutputDisplay from "./OutputDisplay";
import "./App.css";

function App() {
  const [htmlcode, setHtmlCode] = useState(`
<div style={{ paddingTop: "55%", paddingLeft: "20%" }}>
  <h2>CodeNow</h2>
  <p>Build by: Sneh Koshiya</p>
</div>
  `);
  const [csscode, setCssCode] = useState("");

  const [showOnlyOutputDisplay, setShowOnlyOutputDisplay] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#EEF5FF",
        justifyContent: "space-around",
      }}
    >
      {!showOnlyOutputDisplay && (
        <CodeEditor
          htmlcode={htmlcode}
          csscode={csscode}
          onHtmlChange={setHtmlCode}
          onCssChange={setCssCode}
        />
      )}

      <OutputDisplay
        htmlcode={htmlcode}
        csscode={csscode}
        setShowOnlyOutputDisplay={setShowOnlyOutputDisplay}
        showOnlyOutputDisplay={showOnlyOutputDisplay}
      />
    </div>
  );
}

export default App;
