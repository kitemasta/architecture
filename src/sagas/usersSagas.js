import { call, all, put } from 'redux-saga/effects';
import history from '../history';
import api from '../api';
import { loadingFinishedSuccess, loadingFinishedError } from '../actions/spinner';

export function* userLoginSaga(action) {
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
