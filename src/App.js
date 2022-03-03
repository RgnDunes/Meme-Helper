import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [memesArray, setMemesArray] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [topLabel, setTopLabel] = useState("");
  const [bottomLabel, setBottomLabel] = useState("");
  const [finalMeme, setFinalMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((x) => x.json())
      .then((resp) => setMemesArray(resp.data.memes));
  }, []);

  return (
    <div>
      {memesArray.map((meme) => (
        <img src={meme.url} />
      ))}
    </div>
  );
};

export default App;
