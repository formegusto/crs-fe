import { createAction } from "redux-actions";
import { GET_PROCESS_LIST, REGIST, Regist } from "./types";

export const getProcessList = createAction(GET_PROCESS_LIST);
export const regist = createAction<Regist>(REGIST);
