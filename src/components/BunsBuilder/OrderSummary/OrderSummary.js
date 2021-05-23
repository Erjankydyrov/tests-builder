import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price, key }) => {
  const labels = {
    PBuns: "Cake",
    Bread: "Roll",
    BBuns: "Black cake",
    Crois: "Croissant",
    Ecler: "Ecler",
    MBuns: "Mini cakes",
    PBunsChocolate: "Vanilla cake",
    BreadChocolate: "Chocolate roll",
    BBunsChocolate: "Chocolate cake",
    CroisChocolate: "Vanilla croissant",
    EclerChocolate: "Vanilla ecler",
    MBunsChocolate: "Vanilla mini cakes",
    PBunsVanilla: "Glazed cake",
    BreadVanilla: "Glazed roll",
    BBunsVanilla: "Strawberry cake",
    CroisVanilla: "Chocolate croissant",
    EclerVanilla: "Strawberry ecler",
    MBunsVanilla: "Glazed mini cakes",
  };
  const results = Object.keys(ingredients).map((type, id) => (
    <li key={id}>
      {labels[type]}: {ingredients[type]}
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
