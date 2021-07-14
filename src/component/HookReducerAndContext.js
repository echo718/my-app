import React, { useReducer } from "react";
import { CounterReducer, defaultState } from "./CounterReducer";
import HookContext from "./HookContext";
import ReactContext from "./context/ReactContext";

let initialState = 0;

export default function HookReducerAndContext() {
  const [state, action] = useReducer(CounterReducer, defaultState);

  return (
    <ReactContext.Provider value={{ state }}>
      <div className="container">
        <HookContext></HookContext>
        <div style={{ margin:"10px" }}>
          <h2> Component 1</h2>
          Cart :
          <button
            className="btn btn-danger"
            type="button"
            style={{ margin: "10px" }}
            onClick={() => {
              action({ type: "inc", payload: { count: --initialState } });
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
      </div>
    </ReactContext.Provider>
  );
}
