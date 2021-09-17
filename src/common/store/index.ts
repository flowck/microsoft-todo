import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);
