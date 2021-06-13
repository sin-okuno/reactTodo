import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcomplateTodos, setImcomplateTodos] = useState([
    "Reactの勉強",
    "AWSの勉強",
    "PMPの勉強"
  ]);

  const [complateTodos, setComplateTodos] = useState(["腕立て", "腹筋"]);

  return (
    <>
      <div className="input_area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplate_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcomplateTodos.map((todo) => {
            return (
              <il key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </il>
            );
          })}
        </ul>
      </div>
      <div className="complate_area">
        <p className="title">完了のTODO</p>
        <ul>
          {complateTodos.map((todo) => {
            return (
              <il key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </il>
            );
          })}
        </ul>
      </div>
    </>
  );
};
