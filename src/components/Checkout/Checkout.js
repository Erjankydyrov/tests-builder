import BunsPreview from "../BunsBuilder/BunsPreview/BunsPreview";
import classes from "./Checkout.module.css";
import CheckoutForm from "./ChecoutForm/CheckoutForm";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const { token, id } = useSelector((state) => state.auth);
  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);

  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post("/orders.json?auth=" + token, {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        ingredients: ingredients,
        price: price,
        userId: id
      })
      .then((response) => {
        history.replace("/");
      });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <BunsPreview ingredients={ingredients} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default withAxios(Checkout, axios);
