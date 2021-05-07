import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actions/types";

const initialState = {
  ingredients: {
    PBuns: 1,
    Bread: 1,
    BBuns: 1,
    Crois: 1,
    Ecler: 1,
    MBuns: 1,
  },
  price: 250,
};
const prices = {
  PBuns: 10,
  Bread: 12,
  BBuns: 10,
  Crois: 20,
  Ecler: 15,
  MBuns: 15,
  PBunsF1: 10,
  BreadF1: 12,
  BBunsF1: 10,
  CroisF1: 20,
  EclerF1: 15,
  MBunsF1: 15,
  PBunsF2: 10,
  BreadF2: 12,
  BBunsF2: 10,
  CroisF2: 20,
  EclerF2: 15,
  MBunsF2: 15,
};

const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;

    default:
      break;
  }

  return newState;
}

export default builderReducer; 