import thunk from "redux-thunk";
import logger from "redux-logger";
import { tasksReducer } from "@/modules/Tasks/store/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({ tasksModule: tasksReducer });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export type RootState = ReturnType<typeof store.getState>;
