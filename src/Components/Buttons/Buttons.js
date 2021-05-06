import React from "react";
import s from "./buttons.module.css";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className={s.buttons}>
      <Link to={props.id - 1 > 0 ? "/question" + (props.id - 1) : "/question1"}>
        <div className={props.id - 1 > 0 ? s.back : s.backaps}>❮❮ Back</div>
      </Link>
      {props.empty ? (
        <Link to={props.id + 1 < 6 ? "/question" + (props.id + 1) : "/result"}>
          <div onClick={props.setgoodcolor} className={s.next}>
            Next
          </div>
        </Link>
      ) : (
        <div onClick={props.setbadcolor} className={s.next}>
          Next
        </div>
      )}
    </div>
  );
};

export default Buttons;
