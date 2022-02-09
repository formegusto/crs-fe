import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { Action } from "redux";

interface SagaAction<Payload = any> extends Action<string> {
  payload: Payload;
  error?: boolean;
}

export default function createRequestSaga<P = any, AR = any>(
  type: string,
  request: (...params: P[]) => Promise<AxiosResponse<AR>>
) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: SagaAction<P>) {
    try {
      const response: AxiosResponse<AR> = yield call(request, action.payload);
      yield put<SagaAction<AR>>({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      yield put<SagaAction<AR>>({
        type: FAILURE,
        payload: e.response.data,
        error: true,
      });
    }
  };
}
