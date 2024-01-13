import React from "react";

const OutputDisplay = ({
  htmlcode,
  csscode,
  showOnlyOutputDisplay,
  setShowOnlyOutputDisplay,
}) => {
  const combinedCode = `<style>${csscode}</style> ${htmlcode}`;

  return (
    <div
      style={{
        width: "100%",
        margin: "5px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{ textAlign: "center", marginTop: "5px" }}
        onClick={() => setShowOnlyOutputDisplay(!showOnlyOutputDisplay)}
      >
        Output
      </h2>
      <iframe
        title="Output"
        srcDoc={combinedCode}
        style={{
          width: "100%",
          border: "1px solid #ccc",
          flexGrow: "1",
          margin: "5px 0px",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default OutputDisplay;
