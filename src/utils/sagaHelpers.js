import { call } from 'redux-saga/effects';

export const getFetchData = apiCalls => apiCalls.map(item => call(item.call, item.data));
