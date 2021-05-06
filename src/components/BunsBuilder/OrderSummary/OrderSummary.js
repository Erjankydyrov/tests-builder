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
  const results = Object.keys(ingredients)
    .map(type => <li>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>{results}</ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
};

export default OrderSummary;
