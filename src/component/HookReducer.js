import React, { useReducer } from "react";
import { CounterReducer, defaultState } from "./CounterReducer";

let initialState = 0;

export default function HookReducer() {

  const [state, action] = useReducer(CounterReducer, defaultState);

  console.log(state, action)
  return (
    <div className="container">
      Cart :{" "}
      <button
        className="btn btn-danger"
        type="button"
        style={{ margin: "10px" }}
        onClick={() => {
          action({ type: "dec", payload: { count: --initialState } });
        }}
      >
        -
      </button>

      <span> {state.count}</span>
      
      <button
        className="btn btn-danger"
        type="button"
        style={{ margin: "10px" }}
        onClick={() => {
          action({ type: "inc", payload: { count: ++initialState } });
        }}
      >
        +
      </button>
    </div>
  );
}
