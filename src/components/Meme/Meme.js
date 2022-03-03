import React from "react";

import "./Meme.css";

const Meme = ({ selectedMemeUrl, onClick }) => {
  return (
    <div>
      <img src={selectedMemeUrl} onClick={onClick} />
    </div>
  );
};

export default Meme;
