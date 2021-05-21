import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (orders) => ({
  type: SET_ORDERS,
  orders: orders,
});

export const load = (token, id) => {
  return (dispatch) =>
    axios.get("/orders.json?auth=" + token + '&orderBy="userId"&equalTo="' + id + '"').then((response) => {
      const newOrders = Object.keys(response.data).map((id) => {
        return {
          ...response.data[id],
          id: id,
        };
      });
      dispatch(set(newOrders));
    });
};
