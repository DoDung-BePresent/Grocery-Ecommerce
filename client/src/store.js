import { createStore, combineReducers } from "redux";
import darkModeReducer from "./reducers/darkModeReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

const store = createStore(rootReducer);

export default store;
