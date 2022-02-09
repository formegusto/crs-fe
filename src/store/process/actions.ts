import { createAction } from "redux-actions";
import { REGIST, Regist } from "./types";

export const regist = createAction<Regist>(REGIST);
