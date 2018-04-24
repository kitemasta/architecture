import * as types from './types';
import { userLoginSaga } from './sagas/usersSagas';
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(types.USER_LOGIN, userLoginSaga);
}
