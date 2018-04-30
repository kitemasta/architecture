import * as types from '../types';
import { generateSuccessActionTypeName } from '../middleware/asyncActionsMiddleware';

export default function posts(state=[], action={}) {
  switch(action.type) {
    case generateSuccessActionTypeName(types.LOAD_POSTS):
      return [
        ...state,
        ...action.result,
      ];
    default: return state;
  }
};
