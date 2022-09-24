import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import groupReducer from "./reducers/groupReducer";

const rootReducer = combineReducers({
  userReducer,
  groupReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
