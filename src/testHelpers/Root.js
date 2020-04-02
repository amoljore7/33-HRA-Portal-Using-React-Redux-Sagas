import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { middleware } from "../store";
import RootReducers from "../reducers";
import { applyMiddleware, createStore } from "redux";

function Root({ children, initialState = {} }) {
  const store = createStore(
    RootReducers,
    initialState,
    applyMiddleware(...middleware)
  );
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export default Root;
