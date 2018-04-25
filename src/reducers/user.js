import * as types from "../types";
import { generateSuccessActionTypeName } from '../middleware/asyncActionsMiddleware';

const defaultState = null;

export default function user(state=defaultState, action={}) {
    switch(action.type) {
        case generateSuccessActionTypeName(types.USER_LOGIN):
          return {
            ...state,
            ...action.payload,
          };
        case types.USER_LOGED_ALREADY:
          return {
            ...state,
            ...action.user,
          };
        case types.USER_LOGOUT:
          return defaultState;
        default: return state;
    }
}
