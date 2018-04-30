import * as types from '../types';

export default function selectedPostIds(state=[], action={}) {
  switch(action.type) {
    case types.TOGGLE_POST:
      const index = state.indexOf(action.id);

      if (index === -1) {
        return [
          ...state,
          action.id,
        ];
      }
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    default: return state;
  }
};
