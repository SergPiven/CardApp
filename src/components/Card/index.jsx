import React, { useState } from "react";
import { Avatar } from "../../components";

import classes from "./Card.module.css";

const Card = (user) => {
  const [isCircle, setIsCircle] = useState(true); /* true => circle */

  const circleAvatarForm = () => {
    setIsCircle(true);
  };

  const squareAvatarForm = () => {
    setIsCircle(false);
  };

  console.log(user.user);
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
        <span className={classes.username}>{user.user.name}</span>
        <span className={classes.userinfo}>{user.user.email}</span>
        <span className={classes.userinfo}>{user.user.address.city}</span>
        <span className={classes.userinfo}>{user.user.company.name}</span>
        <span className={classes.userinfo}>{user.user.phone}</span>
        <span className={classes.userinfo}>{user.user.web}</span>
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
