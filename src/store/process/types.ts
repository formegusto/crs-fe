import createActionTypes from "../../utils/createActionTypes";

export type Regist = {
  [key: string]: any;
  title: string;
  data: File;
  minPer: number;
  maxPer: number;
};

export const [REGIST, REGIST_SUCCESS, REGIST_FAILURE] =
  createActionTypes("process/regist");
