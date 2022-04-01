import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recordsReducer from "./reducers/recordsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  records: recordsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware(),
});

export default store;
