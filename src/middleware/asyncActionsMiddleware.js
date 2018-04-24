export const generateInProgressActionTypeName = basicActionName => `${basicActionName}_IN_PROGRESS`;
export const generateSuccessActionTypeName = basicActionName => `${basicActionName}_SUCCESS`;
export const generateErrorActionTypeName = basicActionName => `${basicActionName}_ERROR`;

export const asyncActionsMiddleware = store => next => action => {
  const isAsyncAction = action.async;
  if (!isAsyncAction) {
    return next(action);
  } else {
    const { apiCall, params, type } = action;
    const inProgressActionType = generateInProgressActionTypeName(type);
    Promise.resolve(1).then(() => store.dispatch({type: inProgressActionType, spinner: true, baseType: type }));
    apiCall(...params)
      .then(res => {
        const successActionType = generateSuccessActionTypeName(type);
        Promise.resolve(1).then(() => store.dispatch({
          type: successActionType,
          spinner: false,
          baseType: type,
          payload: {
            ...res,
          },
        }));
      })
      .catch(err => {
        console.log(err);
        const errorActionType = generateErrorActionTypeName(type);
        Promise.resolve(1).then(() => store.dispatch({type: errorActionType, err, spinner: false, baseType: type}));
      });

    return next(action);
  }
}
