import React from "react";
import s from "./bigQuestion.module.css";

import Buttons from "../Buttons/Buttons";

const BigQuestion = (props) => {
  var a = [];

  a = JSON.parse(localStorage.getItem("question" + props.id)) || [];

  const [value, setValue] = React.useState("");

  function remove(e) {
    a.splice(a.indexOf(e), 1);
    localStorage.setItem("question" + props.id, JSON.stringify(a));
  }

  React.useEffect(() => {
    value != "" && a.push(value);
    localStorage.setItem("question" + props.id, JSON.stringify(a));
  }, [value]);

  const onChange = (event) => {
    a.includes(event.target.value)
      ? remove(event.target.value)
      : setValue(event.target.value);
  };

  return (
    <div className={s.question}>
      <div className={s.content}>
        <h1 className={s.h1}>{props.question}</h1>
        <h2 className={s.h2}>{props.remarks}</h2>
        <div className={s.ansvers}>
          {props.ansvers.map((ansver, index) => (
            <div className="form-group" key={index}>
              <input
                type="checkbox"
                value={ansver}
                onChange={onChange}
                name="gender"
                defaultChecked={a.includes(ansver)}
                id={index}
              />
              <label for={index}>{ansver}</label>
            </div>
          ))}
        </div>
      </div>
      <Buttons id={props.id} />
    </div>
  );
};

export default BigQuestion;
