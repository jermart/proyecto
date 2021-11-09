import React from "react";
import converVideo from "./pexels-kelly-lacy-6498494.mp4";
import "./Cover.css";

function Cover() {
  return (
    <div className="cover-container">
      <video className="video" src={converVideo} autoPlay loop muted />
      <h1>Engertool</h1>
      <p>Una Agencia sin filtros</p>
    </div>
  );
}

export default Cover;
