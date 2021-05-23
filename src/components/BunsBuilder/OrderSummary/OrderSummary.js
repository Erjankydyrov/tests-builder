import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price, key }) => {
  const labels = {
    PBuns: "Pretzel",
    Bread: "Cake",
    BBuns: "Waffle with ice cream",
    Crois: "Croissant",
    Ecler: "Jelly cookies",
    MBuns: "Waffle",
    PBunsChocolate: "Chocolate pretzel",
    BreadChocolate: "Chocolate cake",
    BBunsChocolate: "Waffle with сhocolate ice cream",
    CroisChocolate: "Vanilla croissant",
    EclerChocolate: "Jelly cookies with сhocolate",
    MBunsChocolate: "Chocolate waffle",
    PBunsVanilla: "Vanilla pretzel",
    BreadVanilla: "Vanilla cake",
    BBunsVanilla: "Waffle with vanilla ice cream",
    CroisVanilla: "Chocolate croissant",
    EclerVanilla: "Jelly cookies with vanilla",
    MBunsVanilla: "Vanilla waffle",
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
