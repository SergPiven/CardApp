import { api } from "../config";
import { addCustomersAction } from "../store/customerReducer";

export const getCustomers = () => {
  return async (dispatch) => {
    const { data, status } = await api.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    if (status !== 200) throw new Error();
    return dispatch(addCustomersAction(data));
  };
};
