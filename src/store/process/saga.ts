import API from "../../api";
import createRequestSaga from "../../utils/createRequestSaga";
import { REGIST } from "./types";
import { takeLatest } from "redux-saga/effects";

const registSaga = createRequestSaga(REGIST, API.process.regist);

export default function* processSaga() {
  yield takeLatest(REGIST, registSaga);
}
