export default function spinner(state={}, action={}) {
  if (!action.hasOwnProperty('spinner')) return state;

  switch(action.type) {
    case action.type:
      return {
        ...state,
        [action.baseType]: action.spinner,
      }
    default: return state;
  }
};
