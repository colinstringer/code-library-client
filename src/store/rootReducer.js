import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import currentLibrary from "./currentLibrary/reducer";
import currentPage from "./currentPage/reducer";

export default combineReducers({
  appState,
  user,
  currentLibrary,
  currentPage,
});
