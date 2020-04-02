import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import employeeSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

export const middleware = [sagaMiddleware];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
sagaMiddleware.run(employeeSaga);
export default store;
