import * as types from '../types';
import api from '../api';

export const login = user => ({
  type: types.USER_LOGIN,
  async: true,
  apiCall: () => api.user.login(),
  params: [user],
});
