import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../actions/Customers";

import classes from "./App.module.css";

function App() {
  const [user, setUsers] = useState([]);
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.customers);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  // console.log(customer[1]);

  return (
    <div className={classes.cards}>
      <Card user={customer[0]} />
      <Card user={customer[1]} />
      <Card user={customer[2]} />
      <Card user={customer[3]} />
    </div>
  );
}

export default App;
