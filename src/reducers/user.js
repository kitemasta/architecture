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
        default: return state;
    }
}
