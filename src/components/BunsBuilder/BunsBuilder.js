import axios from "../../axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const BunsBuilder = ({ history }) => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);

  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const [filling, setFilling] = useState("");
  function switchFilling(fillingBun) {
    setFilling(fillingBun);
  }

  const [ordering, setOrdering] = useState(false);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    } else {
      history.push("/auth");
    }
  }
  function stopOrdering() {
    setOrdering(false);
  }

  useEffect(() => dispatch(load()), []);

  function finishOrdering() {
    setOrdering(false);
    history.push("/checkout");
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview
        price={price}
        ingredients={ingredients}
        startOrdering={startOrdering}
      />
      <BunsControls
        filling={filling}
        ingredients={ingredients}
        switchFilling={switchFilling}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <div className={classes.CaseButtons}>
          <Button onClick={finishOrdering} green="green">
            Checkout
          </Button>
          <Button onClick={stopOrdering} order="order">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default withAxios(BunsBuilder, axios);
