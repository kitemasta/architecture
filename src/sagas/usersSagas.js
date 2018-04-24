import { call } from 'redux-saga/effects';
import history from '../history';

export function* userLoginSaga(action) {
  try {
    yield call(action.apiCall, action.user);
    localStorage.setItem('Authenticated', true);
    history.push('/');
  } catch (err) {
    //Do smth
  }
}
