import * as usersSaga from './sagas/usersSagas';
import * as postsSaga from './sagas/postsSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...Object.values(usersSaga),
    ...Object.values(postsSaga),
  ].map(fork));
}
