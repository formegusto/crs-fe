import { handleActions } from "redux-actions";
import { ResponseType } from "../types";
import { GET_PROCESS_LIST_SUCCESS, ReportBase } from "./types";

type ProcessStore = {
  reports: ReportBase[] | null;
};
type Payload = ResponseType;

const processStore: ProcessStore = {
  reports: null,
};
const ProcessReducer = handleActions<ProcessStore, Payload>(
  {
    [GET_PROCESS_LIST_SUCCESS]: (state, action) => ({
      ...state,
      reports: action.payload.data,
    }),
  },
  processStore
);

export default ProcessReducer;
