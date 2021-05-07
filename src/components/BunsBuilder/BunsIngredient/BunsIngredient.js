import classes from "./BunsIngredient.module.css";
import buns from "../../../images/buns.svg";
import bread from "../../../images/bread.svg";
import blackBun from "../../../images/blackBun.svg";
import croissant from "../../../images/croissant.svg";
import ecler from "../../../images/ecler.svg";
import miniBuns from "../../../images/miniBuns.svg";
import bunsF1 from "../../../images/bunsF1.svg";
import breadF1 from "../../../images/breadF1.svg";
import blackBunF1 from "../../../images/blackBunF1.svg";
import miniBunsF1 from "../../../images/miniBunsF1.svg";
import croissantF1 from "../../../images/croissantF1.svg";
import eclerF1 from "../../../images/eclerF1.svg";
import bunsF2 from "../../../images/bunsF2.svg";
import breadF2 from "../../../images/breadF2.svg";
import eclerF2 from "../../../images/eclerF2.svg";
import blackBunF2 from "../../../images/blackBunF2.svg";
import miniBunsF2 from "../../../images/miniBunsF2.svg";
import croissantF2 from "../../../images/croissantF2.svg";
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
    PBunsF1: {
      backgroundImage: `url("${bunsF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BreadF1: {
      backgroundImage: `url("${breadF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    MBunsF1: {
      backgroundImage: `url("${miniBunsF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    CroisF1: {
      backgroundImage: `url("${croissantF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    EclerF1: {
      backgroundImage: `url("${eclerF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BBunsF1: {
      backgroundImage: `url("${blackBunF1}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    PBunsF2: {
      backgroundImage: `url("${bunsF2}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BreadF2: {
      backgroundImage: `url("${breadF2}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    MBunsF2: {
      backgroundImage: `url("${miniBunsF2}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    CroisF2: {
      backgroundImage: `url("${croissantF2}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    EclerF2: {
      backgroundImage: `url("${eclerF2}")`,
      backgroundSize: "Cover",
      width: "55px",
      height: "55px",
      marginRight: "5px",
      display: "inline-block",
    },
    BBunsF2: {
      backgroundImage: `url("${blackBunF2}")`,
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
        left: ingredientLeft
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  console.log(type );
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default React.memo(BunsIngredient);
