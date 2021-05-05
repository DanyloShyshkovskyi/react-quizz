import React from "react";
import s from "./question.module.css";

import Buttons from "../Buttons/Buttons";

const Question = (props) => {


  const [value, setValue] = React.useState(
    localStorage.getItem("question" + props.id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("question" + props.id, value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);


  return (
    <div className={s.question}>
      <div className={s.content}>
        <h1 className={s.h1}>{props.question}</h1>
        <div className={s.ansvers}>
        {props.ansvers.map((ansver, index) => (
          <div className={s.ansver} key={index}>
           
            <input
            className={s.input}
              type="radio"
              value={ansver}
              checked={value === ansver}
              onChange={onChange}
              name="radio-group"
              id={index}
            />
             <label htmlFor={index} className={s.p}>{ansver}</label>
          </div>
        ))}
        </div>

      </div>
      <Buttons id={props.id} />
    </div>
  );
};

export default Question;
