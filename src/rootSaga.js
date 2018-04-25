import * as usersSaga from './sagas/usersSagas';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...Object.values(usersSaga),
  ].map(fork));
}
