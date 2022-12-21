import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { ActionTypes } from "./state/action-types";
import { actionsCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  const state = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
