import { combineReducers } from 'redux';
import user from './reducers/user';
import errors from './reducers/errors';
import spinner from './reducers/spinner';
import posts from './reducers/posts';
import selectedPostIds from './reducers/selectedPostIds';

export default combineReducers({
    user,
    errors,
    spinner,
    posts,
    selectedPostIds,
});
