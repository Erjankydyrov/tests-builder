import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const BunsBuilder = () => {

  const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);
  const prices = {
    PBuns: 5,
    Bread: 5,
    BBuns: 5,
    Crois: 5,
    Ecler: 5,
    MBuns: 5,
    PBunsF1: 5,
    BreadF1: 5,
    BBunsF1: 5,
    CroisF1: 5,
    EclerF1: 5,
    MBunsF1: 5,
    PBunsF2: 5,
    BreadF2: 5,
    BBunsF2: 5,
    CroisF2: 5,
    EclerF2: 5,
    MBunsF2: 5,
  };

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
        })
  }

  useEffect(() => {
    axios.get(`https://builder-3fa6d-default-rtdb.firebaseio.com/default.json`)
        .then((responce) => {
          setPrice(responce.data.price);
          setIngredients(Object.values(responce.data.ingredients))
        })
  }, [])

  function addIngredient(type) {
    const newIngredients = [ ...ingredients ];
    newIngredients.push(type);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const index = ingredients.lastIndexOf(type);
    if (index !== -1) {
      const newIngredients = [ ...ingredients ];
      newIngredients.splice(index, 1);
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview price={price} ingredients={ingredients} startOrdering={startOrdering}/>
      <BunsControls
        filling={filling}
        ingredients={ingredients}
        switchFilling={switchFilling}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
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
