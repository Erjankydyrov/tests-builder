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
  const names = ["PBuns", "Bread", "BBuns", "Crois", "Ecler", "MBuns"];

  for (const name in names) {
    result.push(
      <BunsControl
        type={names[name] + filling}
        key={names[name]}
        switchFilling={switchFilling}
        count={ingredients.length}
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
        <Button disabled={!ingredients.length} onClick={startOrdering} glav="true">
          Order
        </Button>
      </div>
    </div>
  );
};

export default BunsControls;
