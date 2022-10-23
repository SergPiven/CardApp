import React, { useState, useEffect } from "react";
import stringToColor from "string-to-color";

import classes from "./Avatar.module.css";

const Avatar = ({ firstName, lastName }) => {
  const [color, setColor] = useState("#000000");
  const [name, setName] = useState("?");

  const init = () => {
    if (firstName && lastName) {
      const abbr = firstName.split("")[0] + lastName.split("")[0];

      setName(abbr);
      setColor(stringToColor(abbr));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={classes.avatar} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

export default Avatar;