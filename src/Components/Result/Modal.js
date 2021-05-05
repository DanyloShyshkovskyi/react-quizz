import React from "react";
import s from "./modal.module.css";

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Modall = (props) => {
  const [show1, setshow1] = React.useState(false);
  const [show2, setshow2] = React.useState(false);

  const q4 = JSON.parse(localStorage.getItem("question4")) || [];
  const q5 = JSON.parse(localStorage.getItem("question5")) || [];

  const numberOfItems1 = show1 ? q4.length : 3;
  const numberOfItems2 = show2 ? q5.length : 3;

  function getnum(name) {
    var data = JSON.parse(localStorage.getItem(name)) || [];
    return data.length - 3;
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Body>
          <div className={s.item}>
            <div className={s.row}>
              <h1 className={s.h1}>Type of help:</h1>
              <Link to="/question1">
                <div className={s.button}>Start search again</div>
              </Link>
            </div>
            <ul className={s.list}>
              <li className={s.listItem}>
                {localStorage.getItem("question1") || null}
              </li>
            </ul>
          </div>
          <div className={s.item}>
            <div className={s.row}>
              <h1 className={s.h1}>Issues:</h1>
              <Link to="/question4">
                {" "}
                <div className={s.button}>Change issues</div>
              </Link>
            </div>
            <ul className={s.list}>
              {q4.slice(0, numberOfItems1).map((list, index) => (
                <li key={index} className={s.listItem}>{list}</li>
              ))}
               {!show1 ? (
              <p onClick={() => setshow1(!show1)} className={s.show}>
                and {getnum("question4")} more
              </p>
            ) : (
              <p onClick={() => setshow1(!show1)} className={s.show}>
                show less
              </p>
            )}
            </ul>
           
          </div>
          <div className={s.item}>
            <div className={s.row}>
              <h1 className={s.h1}>Language of therapy:</h1>
              <Link to="/question5">
                {" "}
                <div className={s.button}> Change language</div>
              </Link>
            </div>
            <ul className={s.list}>
              {q5.slice(0, numberOfItems2).map((list, index) => (
                <li key={index} className={s.listItem}>{list}</li>
              ))}
                      {!show2 ? (
              <p onClick={() => setshow2(!show2)} className={s.show}>
                and {getnum("question5")} more
              </p>
            ) : (
              <p onClick={() => setshow2(!show2)} className={s.show}>
                show less
              </p>
            )}
            </ul>
    
          </div>
          <div className={s.item}>
            <div className={s.row}>
              <h1 className={s.h1}>Preferences:</h1>
              <Link to="/question1">
                <div className={s.button}>Modify preferences</div>
              </Link>
            </div>
            <div className={s.divlist}>
            <ul className={s.list}>
              <li className={s.listItem}>
                Therapist gender: 
              </li>
              <li className={s.listItem}>
                Type of session:
              </li>
              <li className={s.listItem}>
                Aproach: 
              </li>
            </ul>
            <div className={s.list2}>
            <a className={s.lista}>Any</a>
            <a className={s.lista}>Video</a>
            <a className={s.lista}>Cognitive Behavior Therapy</a>
            </div>

            </div>
          </div>
          <div onClick={props.handleClose} className={s.bigButton}>
            back to list of therapist
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modall;
