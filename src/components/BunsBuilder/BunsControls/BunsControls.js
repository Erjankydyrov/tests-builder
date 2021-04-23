import Button from "../../UI/Button/Button";
import BunsControl from "./BunsControl/BunsControl";
import classes from "./BunsControls.module.css";
import SwitchBun from "./SwitchBun/SwitchBun";

const BunsControls = ({
  switchFilling,
  startOrdering,
  filling,
  addIngredient,
  ingredients,
  removeIngredient,
}) => {
  const result = [];
  let total = 0;

  for (const ingredient in ingredients) {
    total += ingredients[ingredient];
    console.log(ingredient)
    result.push(
      <BunsControl
        type={ingredient + filling}
        key={ingredient}
        switchFilling={switchFilling}
        count={ingredients[ingredient]}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return (
    <div className={classes.BunsControls}>
      <SwitchBun switchFilling={switchFilling} />
      {result}
      <div className={classes.DivButton}>
        <Button disabled={!total} onClick={startOrdering} glav="true">
          Order
        </Button>
      </div>
    </div>
  );
};

export default BunsControls;
