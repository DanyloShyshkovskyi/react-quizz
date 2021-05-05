import React from "react";
import s from "./buttons.module.css";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  return (
      <div className={s.buttons}>
       <Link to={(props.id-1)>0 ? "/question"+(props.id-1) : "/question1"}> <div className={s.back}>❮❮ Back</div></Link>
        <Link to={(props.id+1)<6 ? "/question"+(props.id+1) : "/result"}><div className={s.next}>Next</div></Link>
      </div>
  );
};

export default Buttons;
