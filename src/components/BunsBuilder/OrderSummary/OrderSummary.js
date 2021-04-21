import { useEffect, useState } from "react";
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price}) => {
  const labels = {
    PBuns: "Cake",
    Bread: "Roll",
    BBuns: "Black cake",
    Crois: "Croissant",
    Ecler: "Ecler",
    MBuns: "Mini cakes",
    PBunsF1: "Vanilla cake",
    BreadF1: "Chocolate roll",
    BBunsF1: "Chocolate cake",
    CroisF1: "Vanilla croissant",
    EclerF1: "Vanilla ecler",
    MBunsF1: "Vanilla mini cakes",
    PBunsF2: "Glazed cake",
    BreadF2: "Glazed roll",
    BBunsF2: "Strawberry cake",
    CroisF2: "Chocolate croissant",
    EclerF2: "Strawberry ecler",
    MBunsF2: "Glazed mini cakes",
  };
  let names = {};
  function count(array) {
    array.forEach((item) => {
      names[item] = (names[item] || 0) + 1;
    });
  }
  count(ingredients);

  const results = (ingredients).map((type) => (
    <li>
      {labels[type]}: {names[type]}
    </li>
  ));

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>{results}</ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
};

export default OrderSummary;
