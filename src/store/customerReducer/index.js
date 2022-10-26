const ADD_CUSTOMERS = "ADD_CUSTOMERS";

const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return { ...state, customers: [action.payload] };
    default:
      return state;
  }
};

export const addCustomersAction = (payload) => ({
  type: ADD_CUSTOMERS,
  payload,
});
