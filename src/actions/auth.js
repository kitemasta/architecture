import { USER_LOGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGED_IN,
    user
})

export const login = credentials => dispatch => 
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));