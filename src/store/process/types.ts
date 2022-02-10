import createActionTypes from "../../utils/createActionTypes";

export type Regist = {
  [key: string]: any;
  title: string;
  data: File;
  minPer: number;
  maxPer: number;
};

export type ReportBase = {
  _id: string;
  title: string;
  minPer: number;
  maxPer: number;
};

export const [
  GET_PROCESS_LIST,
  GET_PROCESS_LIST_SUCCESS,
  GET_PROCESS_LIST_FAILURE,
] = createActionTypes("process/get_list");
export const [REGIST, REGIST_SUCCESS, REGIST_FAILURE] =
  createActionTypes("process/regist");
