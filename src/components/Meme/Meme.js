import React from "react";

import "./Meme.css";

const Meme = ({ selectedMemeUrl, onClick, download = false }) => {
  return (
    <div className="meme_container">
      <img src={selectedMemeUrl} onClick={onClick} download={download} />
    </div>
  );
};

export default Meme;
