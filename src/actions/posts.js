import * as types from '../types';
import api from '../api';

export const loadPosts = () => ({
  type: types.LOAD_POSTS,
  apiCalls: [
    { call: api.posts.loadPosts },
  ],
});

export const togglePost = id => ({
  type: types.TOGGLE_POST,
  id,
});
