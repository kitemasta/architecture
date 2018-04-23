import { combineReducers } from 'redux';
import user from './reducers/user';
import errors from './reducers/errors';
import spinner from './reducers/spinner';

export default combineReducers({
    user,
    errors,
    spinner,
});
