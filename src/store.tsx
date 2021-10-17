import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage";
import { BaseProps } from "./common/typing";
import { tasksReducer } from "@/modules/Tasks/store/reducer";
import { persistStore, persistReducer } from "redux-persist";
import { tasksModuleTransformer } from "./modules/Tasks/store/transforms";
import { createStore, combineReducers, applyMiddleware, compose, Store, AnyAction } from "redux";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const persistConfig = { key: "msTodo", storage, transforms: [tasksModuleTransformer] };
const rootReducer = persistReducer(persistConfig, combineReducers({ tasksModule: tasksReducer }));

export const store: Store<any, AnyAction> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const StoreProvider = ({ children }: BaseProps) => <Provider store={store}>{children}</Provider>;
