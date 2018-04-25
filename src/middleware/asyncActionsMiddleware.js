export const generateInProgressActionTypeName = basicActionName => `${basicActionName}_IN_PROGRESS`;
export const generateSuccessActionTypeName = basicActionName => `${basicActionName}_SUCCESS`;
export const generateErrorActionTypeName = basicActionName => `${basicActionName}_ERROR`;

export const asyncActionsMiddleware = store => next => action => {
  const isAsyncAction = action.apiCalls;
  if (!isAsyncAction) {
    return next(action);
  } else {
    const { type } = action;
    const inProgressActionType = generateInProgressActionTypeName(type);
    Promise.resolve(1).then(() => store.dispatch({type: inProgressActionType, spinner: true, baseType: type }));
    return next(action);
  }
}
