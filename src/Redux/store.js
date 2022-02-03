import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { persistor, store };
