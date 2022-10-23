import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { api } from "../../config";

import "../../sources/styles/styles.css";
import classes from "./App.module.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setList]);

  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
