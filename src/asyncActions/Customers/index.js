import { api } from "../../config";
import { addCustomersAction } from "../../store/customerReducer";

export const getCustomers = () => {
  return (dispatch) => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(addCustomersAction(response.data)))
      .catch((error) => {
        console.error(error);
      });
  };
};
