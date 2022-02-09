import { combineReducers } from "redux";
import ui from "./ui";
import config from "./config";

const rootReducer = combineReducers({
  ui,
  config,
});

export default rootReducer;
