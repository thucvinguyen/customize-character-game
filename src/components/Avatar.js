import React from "react";
import Items from "./Items";

function Avatar({
  body,
  clothing1,
  clothing2,
  clothing3,
  mouth,
  nose,
  eyes,
  eyebrows,
  hair,
  facial,
  earrings,
  glasses,
  hat,
  neckwear,
  characterRandomize,
}) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <Items partName={"body"} index={body} zIndex={0}></Items>

        <Items
          partName={"clothes/layer_1"}
          index={clothing1}
          zIndex={1}
        ></Items>
        <Items
          partName={"clothes/layer_2"}
          index={clothing2}
          zIndex={1}
        ></Items>
        <Items
          partName={"clothes/layer_2"}
          index={clothing3}
          zIndex={1}
        ></Items>

        <Items partName={"mouths"} index={mouth} zIndex={2}></Items>
        <Items partName={"noses"} index={nose} zIndex={2}></Items>
        <Items partName={"eyes"} index={eyes} zIndex={2}></Items>
        <Items partName={"eyebrows"} index={eyebrows} zIndex={2}></Items>
        <Items partName={"hair"} index={hair} zIndex={3}></Items>
        <Items partName={"facial_hair"} index={facial} zIndex={2}></Items>

        <Items
          partName={"accessories/earrings"}
          index={earrings}
          zIndex={4}
        ></Items>
        <Items
          partName={"accessories/glasses"}
          index={glasses}
          zIndex={4}
        ></Items>
        <Items partName={"accessories/hats"} index={hat} zIndex={4}></Items>
        <Items
          partName={"accessories/neckwear"}
          index={neckwear}
          zIndex={4}
        ></Items>
      </div>
      <div className="customize-button">
        <button className="button" onClick={() => characterRandomize()}>
          Randomize!
        </button>
      </div>
    </div>
  );
}

export default Avatar;
