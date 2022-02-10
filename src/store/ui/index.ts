import { handleActions } from "redux-actions";
import {
  Alert,
  CONFIRM_ALERT,
  ControlDrawer,
  HIDE_DRAWER,
  NEW_ALERT,
  SHOW_DRAWER,
} from "./types";

type UIStore = {
  drawer?: ControlDrawer | null;
  alert?: Alert | null;
};
type Payload = ControlDrawer | Alert | number;

const store: UIStore = {
  drawer: null,
  alert: null,
};
const UIReducer = handleActions<UIStore, Payload>(
  {
    [SHOW_DRAWER]: (state, action) => ({
      ...state,
      drawer: action.payload as ControlDrawer,
    }),
    [HIDE_DRAWER]: (state) => ({
      ...state,
      drawer: null,
    }),
    [NEW_ALERT]: (state, action) => ({
      ...state,
      alert: action.payload as Alert,
    }),
    [CONFIRM_ALERT]: (state, action) => ({
      ...state,
      alert: null,
    }),
  },
  store
);
export default UIReducer;
