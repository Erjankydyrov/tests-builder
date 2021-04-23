import BunsPreview from "../../BunsBuilder/BunsPreview/BunsPreview";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BunsPreview ingredients={{
          PBuns: 1,
          Bread: 1,
          BBuns: 1,
          Crois: 1,
          Ecler: 1,
          MBuns: 1,
        }} price={150} />
      </div>
      <div className={classes.Buttons}>
        <Button green="true">Checkout</Button>
        <Button order="true" onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;