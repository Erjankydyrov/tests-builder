import Button from "../../UI/Button/Button";
import BunsControl from "./BunsControl/BunsControl";
import classes from "./BunsControls.module.css";
import SwitchBun from "./SwitchBun/SwitchBun";

const predIngredients = ["BBuns", "Bread", "Crois", "Ecler", "MBuns", "PBuns"];

const BunsControls = ({
  switchFilling,
  startOrdering,
  filling,
  ingredients,
}) => {
  const result = [];
  let total = 0;

  for (const key in predIngredients) {
    const ingredient = predIngredients[key];
    total += ingredients[ingredient];

    result.push(
      <BunsControl
        type={ingredient + filling}
        key={ingredient}
        filling={filling}
        switchFilling={switchFilling}
        count={ingredients[ingredient]}
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
