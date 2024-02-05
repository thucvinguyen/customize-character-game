import React, { useState, useEffect } from "react";

import Avatar from "./components/Avatar";

import PartList from "./components/PartList";
import "./App.css";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const partsArray = Object.entries(total).map(([partName, amount]) => ({
  partName,
  amount,
}));

function App() {
  const [body, setBody] = useState(1);

  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);

  const [mouth, setMouth] = useState(1);
  const [nose, setNose] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [eyebrows, setEyebrows] = useState(1);
  const [hair, setHair] = useState(1);
  const [facial, setFacial] = useState(1);

  const [earrings, setEarrings] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [hat, setHat] = useState(1);
  const [neckwear, setNeckwear] = useState(1);

  console.log(eval("body"));

  const characterRandomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setNose(Math.floor(Math.random() * total.nose));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  useEffect(() => {
    characterRandomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="sub-title"> 🛠️CUSTOMIZATION🛠️ </div>
      <div className="divider"></div>

      <div className="avatar-group">
        <div>
          <Avatar
            body={body}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            mouth={mouth}
            nose={nose}
            eyes={eyes}
            eyebrows={eyebrows}
            hair={hair}
            facial={facial}
            earrings={earrings}
            glasses={glasses}
            hat={hat}
            neckwear={neckwear}
            characterRandomize={characterRandomize}
          />
        </div>

        <div>
          <div className="list-section">
            {partsArray.map((part) => (
              <div key={part.partName}>
                <h2>{part.partName}</h2>
                <PartList
                  selectedPart={eval(part.partName)}
                  partName={part.partName}
                  setPart={
                    part.partName === "body"
                      ? setBody
                      : part.partName === "clothing1"
                      ? setClothing1
                      : part.partName === "clothing2"
                      ? setClothing2
                      : part.partName === "clothing3"
                      ? setClothing3
                      : part.partName === "mouth"
                      ? setMouth
                      : part.partName === "nose"
                      ? setNose
                      : part.partName === "eyes"
                      ? setEyes
                      : part.partName === "eyebrows"
                      ? setEyebrows
                      : part.partName === "hair"
                      ? setHair
                      : part.partName === "facial"
                      ? setFacial
                      : part.partName === "earrings"
                      ? setEarrings
                      : part.partName === "glasses"
                      ? setGlasses
                      : part.partName === "hat"
                      ? setHat
                      : setNeckwear
                  }
                  amount={part.amount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
