import { api } from "../../config";
import { addCustomersAction } from "../../store/customerReducer";

export const getCustomers = () => {
  return async (dispatch) => {
    await api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return dispatch(addCustomersAction(response.data));
      })
      .catch((error) => {
        console.error(error);
      });

    // this is work correctly too
    // const { data, status } = await api.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // if (status !== 200) throw new Error();
    // return dispatch(addCustomersAction(data));
  };
};
