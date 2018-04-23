import * as types from "../types";
import { generateErrorActionTypeName } from '../middleware/asyncActionsMiddleware';

const defaultState = [];

export default function errors(state=defaultState, action={}) {
  switch(action.type) {
    case generateErrorActionTypeName(types.USER_LOGIN):
      return {
        ...state,
        loginError: action.err,
      };
    default: return state;
  }
};
