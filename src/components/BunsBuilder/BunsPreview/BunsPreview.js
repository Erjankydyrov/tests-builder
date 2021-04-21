import BunsIngredient from "../BunsIngredient/BunsIngredient";
import classes from "./BunsPreview.module.css";

const BunsPreview = ({ ingredients, price }) => {
    const result =[];

    for (const ingredient in ingredients) {
        result.push(<BunsIngredient key={ingredients[ingredient] + ingredient} type={ingredients[ingredient]} />);
    }

    return ( 
        <div className = {classes.BunsPreview}>
            <div className={classes.ingredients}>
                {result}
            </div>
            <div className={classes.price}>{price.toFixed(1)} som</div>
        </div>
    );
}
 
export default BunsPreview;