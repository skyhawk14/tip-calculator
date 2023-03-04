import { ADD_ITEM, REMOVE_ITEM } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ADD_ITEM) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }
  if (action.type === REMOVE_ITEM) {
    console.log(action);
    state = state.filter((v) => v.uuid !== action.payload.id);
    return state;
  }
  return state;
};

export default reducer;
