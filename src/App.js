import React from "react";

import Question from "./Components/Question/Question";
import BigQuestion from "./Components/BigQuestion/BigQuestion";
import Result from "./Components/Result/Result";

import "./App.css";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PostData from "./questions";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            {PostData.map((content) => (
              <Route key={content.id} path={"/question" + content.id}>
                {content.destiny === "question" ? (
                  <Question
                    id={content.id}
                    question={content.question}
                    ansvers={content.ansvers}
                  />
                ) : (
                  <BigQuestion
                    id={content.id}
                    question={content.question}
                    ansvers={content.ansvers}
                    remarks={content.remarks}
                  />
                )}
              </Route>
            ))}

            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
            <Redirect to="/question1" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
