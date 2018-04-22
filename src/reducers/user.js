import { USER_LOGED_IN } from "../types";


export default function user(state={}, action={}) {
    switch(action.type) {
        case USER_LOGED_IN:
            return action.user;
        default: return state;
    }
}