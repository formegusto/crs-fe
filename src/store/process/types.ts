import createActionTypes from "../../utils/createActionTypes";

export type Regist = {
  [key: string]: any;
  title: string;
  data: File;
  minPer: number;
  maxPer: number;
};

export type ReportStep =
  | "init"
  | "start"
  | "load-excel"
  | "data-preprocessing"
  | "bill-calc"
  | "normal-analysis"
  | "mean-analysis"
  | "similarity-analysis";

export type ReportBase = {
  _id: string;
  title: string;
  minPer: number;
  maxPer: number;
  step: ReportStep;
  createdAt: string;
  updatedAt: string;
  recoPercentage?: number;
  kwh?: number;
};

// Redux Action Types
export const [REGIST, REGIST_SUCCESS, REGIST_FAILURE] =
  createActionTypes("process/regist");
export const [
  GET_PROCESS_LIST,
  GET_PROCESS_LIST_SUCCESS,
  GET_PROCESS_LIST_FAILURE,
] = createActionTypes("process/get_list");
export const [GET_PROCESS, GET_PROCESS_SUCCESS, GET_PROCESS_FAILURE] =
  createActionTypes("process/get");
export const INIT_PROCESS = "process/init";
