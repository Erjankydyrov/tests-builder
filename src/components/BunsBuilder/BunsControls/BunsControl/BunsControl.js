import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import BunsIngredient from "../../BunsIngredient/BunsIngredient";
import classes from "./BunsControl.module.css";

const BunsControl = ({ count, type }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.BunsControl}>
      <Button
        className={classes.ControlButton}
        onClick={() => dispatch(remove(type))}
        disabled={!count}
      >
        -
      </Button>
      <div className={classes.ingredient}>
        <BunsIngredient type={type} fixed />
      </div>
      <Button
        className={classes.ControlButton}
        onClick={() => dispatch(add(type))}
      >
        +
      </Button>
    </div>
  );
};

export default BunsControl;
