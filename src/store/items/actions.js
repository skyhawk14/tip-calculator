export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const addItem = (name, price) => {
  return {
    type: ADD_ITEM,
    payload: {
      name,
      price
    }
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id
    }
  };
};
