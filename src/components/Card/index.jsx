import React, { useState } from "react";
import { Avatar } from "../../components";

import classes from "./Card.module.css";

const Card = () => {
  const [isCircle, setIsCircle] = useState(true); /* true => circle */

  const circleAvatarForm = () => {
    setIsCircle(true);
  };

  const squareAvatarForm = () => {
    setIsCircle(false);
  };

  return (
    <button className={classes.card}>
      <div className={classes.wall}>
        <div className={classes.wrapper}>
          <Avatar
            firstName="Leanne Graham Bret"
            lastName="Romaguera-Crona"
            circleForm={isCircle}
          />
        </div>
      </div>

      <div className={classes.userdata}>
        <span className={classes.username}>Leanne Graham Bret</span>
        <span className={classes.userinfo}>Romaguera-Crona</span>
        <span className={classes.userinfo}>Sincere@april.biz</span>
        <span className={classes.userinfo}>Gwenborough</span>
        <span className={classes.userinfo}>1-770-736-8031</span>
        <span className={classes.userinfo}>hildegard.org</span>
        <div className={classes.switch_field}>
          <input
            type="checkbox"
            onClick={isCircle ? squareAvatarForm : circleAvatarForm}
          />
          <label>Square</label>
        </div>
      </div>
    </button>
  );
};

export default Card;
