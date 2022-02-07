import { createAction } from "redux-actions";
import { ControlDrawer, HIDE_DRAWER, SHOW_DRAWER } from "./types";

export const showDrawer = createAction<ControlDrawer>(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);
