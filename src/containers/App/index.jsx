import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../asyncActions/Customers";

import classes from "./App.module.css";

function App() {
  // const [user, setUsers] = useState(
  //   useSelector((state) => state.customers.customers)
  // );
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.customers);

  return (
    <div className={classes.cards}>
      <button onClick={() => dispatch(getCustomers())}>Add</button>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
