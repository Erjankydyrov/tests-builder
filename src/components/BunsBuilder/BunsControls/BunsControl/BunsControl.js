import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import BunsIngredient from "../../BunsIngredient/BunsIngredient";
import classes from "./BunsControl.module.css";

const BunsControl = ({ count, type, filling }) => {
    const dispatch = useDispatch();

    return ( 
        <div className = {classes.BunsControl}>
            <Button className = {classes.ControlButton} onClick = {() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
            <BunsIngredient type = {type + filling} />
            <Button className = {classes.ControlButton} onClick = {() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
        </div>
    );
}
 
export default BunsControl;