import React from "react";
import s from "./result.module.css";

import PostData from "../../people.json";
import Modal from "./Modal";

import Dropdown from "react-bootstrap/Dropdown";

const Result = (props) => {
  const [sort, setsort] = React.useState();

  const [res, setres] = React.useState("Recomended");

  const [show, setShow] = React.useState(false);

  var a = [];

  a = JSON.parse(localStorage.getItem("question4")) || [];

 
  const ValueData = PostData.map((number) =>
  {  
    let value = 0
    number.specialised.map((number2)=>{a.includes(number2) && (value = value+1)})
    return{
    ...number,
    value:value
  }}

)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var data = ValueData;
  sort !== undefined
    ? (data = sort
        ? ValueData.sort((a, b) => (a.price > b.price ? 1 : -1))
        : ValueData.sort((a, b) => (a.price < b.price ? 1 : -1)))
    : (data = ValueData.sort((a, b) => (a.value < b.value ? 1 : -1)));

  return (
    <div className={s.question}>
      <Modal handleShow={handleShow} handleClose={handleClose} show={show} />
      <div className={s.zmien} onClick={handleShow}>
        Modify preferences
      </div>
      <h1 className={s.mh1}>List of therapist</h1>
      <div className={s.sort}>
        <h2 className={s.h2}>Sort by:</h2>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{res}</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setsort(undefined);
                setres("Recomended");
              }}
            >
              Recomended
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setsort(true);
                setres("Lowest price");
              }}
            >
              Lowest price
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setsort(false);
                setres("Highest price");
              }}
            >
              Highest price
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {data.map((people) => (
        <div key={people.id} className={s.content}>
          <div className={s.head}>
            <img height="200" width="200" className={s.img} src={people.img} />
            <div className={s.col}>
              <a className={s.a}>
                from £ {people.price}
                <br />
                per session
              </a>
              <div>
                <h1 className={s.h1}>{people.name}</h1>
                <h2 className={s.h2}>{people.post}</h2>
              </div>
            </div>
          </div>
          <div className={s.main}>
            <div className={s.sp}>
              <div className={s.ul}>
                {people.specialised.map((specialised, index) => (
                  <a key={index} className={s.al}>
                    {specialised}
                  </a>
                ))}
              </div>
            </div>
            <div className={s.method}>
              <div className={s.item}>
                {" "}
                <p>Video</p>
                <p
                  className={people.method.includes("video") ? s.amt : s.amf}
                ></p>
              </div>
              <div className={s.item}>
                {" "}
                <p>Phone</p>
                <p
                  className={people.method.includes("phone") ? s.amt : s.amf}
                ></p>
              </div>
              <div className={s.item}>
                {" "}
                <p>Chat</p>
                <p
                  className={people.method.includes("chat") ? s.amt : s.amf}
                ></p>
              </div>
            </div>
          </div>
          <div className={s.footer}>
            <p className={s.f}>
              Id cupidatat veniam excepteur fugiat ea quis. Nulla aute ut ex
              dolore excepteur. Minim fugiat consectetur ea pariatur sit
              reprehenderit incididunt culpa.
            </p>
            <div className={s.button}>Viev profile</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
