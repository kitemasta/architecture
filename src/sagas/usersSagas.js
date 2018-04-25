import { call, all, put, takeLatest } from 'redux-saga/effects';
import history from '../history';
import { loadingFinishedSuccess, loadingFinishedError } from '../actions/spinner';
import * as types from '../types';

function* userLoginSaga(action) {
  try {
    const fetchData = action.apiCalls.map(item => call(item.call, item.data));
    const result = yield all(fetchData);
    yield put(loadingFinishedSuccess(action.type, [...result]));
    localStorage.setItem('authenticatedUser', JSON.stringify(result[0]));
    history.push('/dashboard');
  } catch (err) {
    yield put(loadingFinishedError(action.type, err.message));
  }
}

export function* usersSaga() {
  yield takeLatest(types.USER_LOGIN, userLoginSaga);
}
