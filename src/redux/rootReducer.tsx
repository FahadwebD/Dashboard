import { combineReducers } from "redux";

import todoReducer from "./reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;