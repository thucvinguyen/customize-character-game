import React from "react";

function Items({ partName, index, zIndex }) {
  return (
    <img
      src={`character/${partName}/${index}.png`}
      alt=""
      width={260}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
    />
  );
}

export default Items;
