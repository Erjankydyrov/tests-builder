import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const BunsBuilder = ({ history }) => {

  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);

  const [filling, setFilling] = useState("")
  function switchFilling(fillingBun) {
    setFilling(fillingBun)
  }
  
  const [ordering, setOrdering] = useState(false);
  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }
  
  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-3fa6d-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);
  //       setIngredients(response.data.ingredients);
  //     });
  // }

  function finishOrdering() {
    axios.post(`https://builder-3fa6d-default-rtdb.firebaseio.com/orders.json`, {
          ingredients: ingredients,
          price: price,
          address: "1234 Jusaeva str",
          phone: "0 777 777 777",
          name: "Sadyr Japarov",
        })
        .then(() => {
          setOrdering(false);
          // loadDefaults();
          history.push('/checkout');
        })
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview price={price} ingredients={ingredients} startOrdering={startOrdering}/>
      <BunsControls
        filling={filling}
        ingredients={ingredients}
        switchFilling={switchFilling}
        startOrdering = {startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}/>
            <div className={classes.CaseButtons}>
              <Button onClick={finishOrdering} green="true">Checkout</Button>
              <Button onClick={stopOrdering} order="true">Cancel</Button>
            </div>
        </Modal>
    </div>
  );
};

export default React.memo(BunsBuilder);
