import * as types from '../types';
import api from '../api';

export const login = user => ({
  type: types.USER_LOGIN,
  apiCalls: [
    { call: api.user.login, data: user},
    { call: api.user.getData },
  ],
});

export const userLoggedAlready = user => ({
  type: types.USER_LOGED_ALREADY,
  user,
});

export const logout = () => {
  localStorage.removeItem('authenticatedUser');

  return {
    type: types.USER_LOGOUT,
  };
}
