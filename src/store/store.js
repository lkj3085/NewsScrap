import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { newsReducer } from "../reducer/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
