import classes from "./BunsIngredient.module.css";
import buns from "../../../images/buns.svg";
import bread from "../../../images/bread.svg";
import blackBun from "../../../images/blackBun.svg";
import croissant from "../../../images/croissant.svg";
import ecler from "../../../images/ecler.svg";
import miniBuns from "../../../images/miniBuns.svg";
import bunsChocolate from "../../../images/bunsF1.svg";
import breadChocolate from "../../../images/breadF1.svg";
import blackBunChocolate from "../../../images/blackBunF1.svg";
import miniBunsChocolate from "../../../images/miniBunsF1.svg";
import croissantChocolate from "../../../images/croissantF1.svg";
import eclerChocolate from "../../../images/eclerF1.svg";
import bunsVanilla from "../../../images/bunsF2.svg";
import breadVanilla from "../../../images/breadF2.svg";
import eclerVanilla from "../../../images/eclerF2.svg";
import blackBunVanilla from "../../../images/blackBunF2.svg";
import miniBunsVanilla from "../../../images/miniBunsF2.svg";
import croissantVanilla from "../../../images/croissantF2.svg";
import React from "react";

const BunsIngredient = ({ type, fixed }) => {
  const types = {
    PBuns: {
      backgroundImage: `url("${buns}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    Bread: {
      backgroundImage: `url("${bread}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BBuns: {
      backgroundImage: `url("${blackBun}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    Crois: {
      backgroundImage: `url("${croissant}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    Ecler: {
      backgroundImage: `url("${ecler}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    MBuns: {
      backgroundImage: `url("${miniBuns}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    PBunsChocolate: {
      backgroundImage: `url("${bunsChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BreadChocolate: {
      backgroundImage: `url("${breadChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    MBunsChocolate: {
      backgroundImage: `url("${miniBunsChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    CroisChocolate: {
      backgroundImage: `url("${croissantChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    EclerChocolate: {
      backgroundImage: `url("${eclerChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BBunsChocolate: {
      backgroundImage: `url("${blackBunChocolate}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    PBunsVanilla: {
      backgroundImage: `url("${bunsVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BreadVanilla: {
      backgroundImage: `url("${breadVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    MBunsVanilla: {
      backgroundImage: `url("${miniBunsVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    CroisVanilla: {
      backgroundImage: `url("${croissantVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    EclerVanilla: {
      backgroundImage: `url("${eclerVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BBunsVanilla: {
      backgroundImage: `url("${blackBunVanilla}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 320;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop, 2) + Math.pow(ingredientLeft, 2)
    );

    return distance
      ? {
          top: ingredientTop,
          left: ingredientLeft,
        }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default React.memo(BunsIngredient);
