import * as types from '../types';

export const deleteError = id => ({
  type: types.DELETE_ERROR,
  id,
});
