import * as types from "../types";
import { generateErrorActionTypeName } from '../middleware/asyncActionsMiddleware';

const defaultState = [];

export default function errors(state=defaultState, action={}) {
  switch(action.type) {
    case generateErrorActionTypeName(types.USER_LOGIN):
      return [
        ...state,
        {
          value: action.error,
          id: Date.now(),
        },
      ];
    case types.DELETE_ERROR:
      const errObj = state.find(item => item.id === action.id);
      const index = state.indexOf(errObj);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    default: return state;
  }
};
