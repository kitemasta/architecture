import * as types from '../types';
import { put, takeLatest, all } from 'redux-saga/effects';
import { loadingFinishedSuccess, loadingFinishedError } from '../actions/spinner';
import { getFetchData } from '../utils/sagaHelpers';

function* loadPostsSaga(action) {
  try {
    const fetchData = getFetchData(action.apiCalls);
    const result = yield all(fetchData);
    yield put(loadingFinishedSuccess(action.type, ...result));
  } catch (err) {
    yield put(loadingFinishedError(action.type, err.message));
  }
}

export function* postsSaga() {
  yield takeLatest(types.LOAD_POSTS, loadPostsSaga);
}
