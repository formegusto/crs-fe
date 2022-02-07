import { handleActions } from "redux-actions";
import { ControlDrawer, HIDE_DRAWER, SHOW_DRAWER } from "./types";

type UIStore = {
  drawer?: ControlDrawer | null;
};

const store: UIStore = {
  drawer: null,
};

type Payload = ControlDrawer;

const UIReducer = handleActions<UIStore, Payload>(
  {
    [SHOW_DRAWER]: (state, action) => ({
      ...state,
      drawer: action.payload,
    }),
    [HIDE_DRAWER]: (state) => ({
      ...state,
      drawer: null,
    }),
  },
  store
);
export default UIReducer;
