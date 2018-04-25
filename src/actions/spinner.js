import { generateSuccessActionTypeName, generateErrorActionTypeName } from '../middleware/asyncActionsMiddleware';

export const loadingFinishedSuccess = (type, result) => ({
  type: generateSuccessActionTypeName(type),
  spinner: false,
  baseType: type,
  result,
});

export const loadingFinishedError = (type, error) => ({
  type: generateErrorActionTypeName(type),
  spinner: false,
  baseType: type,
  error,
});
