import React from "react";

export const PartList = ({
  total,
  path,
  set,
  selected,
  zoom = 1,
  top = "50%",
}) => {
  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={path + i}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
        onClick={() => set(i)}
      >
        <img
          src={`character/${path}/${i + 1}.png`}
          alt=""
          height={60 * zoom}
          className="img-center"
          style={{ top }}
        />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
};

// import React from "react";

// const PartList = ({ partName, setPart, amount, top = "50%", selectedPart }) => {
//   const handleClick = (index) => {
//     setPart(index);
//   };

//   console.log(partName, selectedPart);
//   const parts = [];
//   for (let i = 0; i < amount; i++) {
//     let path = partName;
//     if (partName === "clothing1") {
//       path = "clothes/layer_1";
//     }
//     if (partName === "clothing2") {
//       path = "clothes/layer_2";
//     }
//     if (partName === "clothing3") {
//       path = "clothes/layer_3";
//     }
//     if (partName === "hat") {
//       path = "accessories/hats";
//     }
//     if (partName === "glasses") {
//       path = "accessories/glasses";
//     }

//     parts.push(
//       <div
//         key={i}
//         className={i + 1 === selectedPart ? "square selected-square" : "square"}
//         onClick={() => handleClick(i + 1)}
//       >
//         <img
//           src={`character/${path}/${i + 1}.png`}
//           alt=""
//           height={60}
//           className="img-center"
//           style={{ top }}
//         />
//       </div>
//     );
//   }

//   return <div className="list">{parts}</div>;
// };

// export default PartList;
