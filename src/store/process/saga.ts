import API from "../../api";
import createRequestSaga from "../../utils/createRequestSaga";
import { GET_PROCESS_LIST, REGIST } from "./types";
import { takeLatest } from "redux-saga/effects";

const getProcessListSaga = createRequestSaga(
  GET_PROCESS_LIST,
  API.process.getProcessList
);
const registSaga = createRequestSaga(REGIST, API.process.regist);

export default function* processSaga() {
  yield takeLatest(GET_PROCESS_LIST, getProcessListSaga);
  yield takeLatest(REGIST, registSaga);
}
