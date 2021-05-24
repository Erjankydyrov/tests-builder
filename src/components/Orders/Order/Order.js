import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
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

  const outputIngredients = Object.keys(ingredients).map((ingredient) => (
    <li>
      {labels[ingredient]} - {ingredients[ingredient]}
    </li>
  ));

  return (
    <div className={classes.Order}>
      <h2>Receipt</h2>
      <hr className={classes.hr} />
      <div>
        Name: {name}
      </div>
      <div>
        Phone: {phone}
      </div>
      <div>
        Address: {address}
      </div>
      <hr className={classes.hr} />
      <ul>{outputIngredients}</ul>
      <hr />
      <strong>Price: {price}</strong>
    </div>
  );
};

export default Order;
