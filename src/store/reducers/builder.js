import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
} from "../actions/types";

const initialState = {
  ingredients: {},
  price: 0,
};
const prices = {
  PBuns: 10,
  Bread: 12,
  BBuns: 10,
  Crois: 20,
  Ecler: 15,
  MBuns: 15,
  PBunsChocolate: 10,
  BreadChocolate: 12,
  BBunsChocolate: 10,
  CroisChocolate: 20,
  EclerChocolate: 15,
  MBunsChocolate: 15,
  PBunsVanilla: 10,
  BreadVanilla: 12,
  BBunsVanilla: 10,
  CroisVanilla: 20,
  EclerVanilla: 15,
  MBunsVanilla: 15,
};

const builder = (state = initialState, action) => {
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
    case SET_INGREDIENTS:
      return { ...action.data };
      break;

    default:
      break;
  }

  return newState;
};

export default builder;
