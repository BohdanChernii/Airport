import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { flightsReducer } from "./flights/flights.reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(flightsReducer, enhancers);
export default store;
