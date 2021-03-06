import { diff } from 'deep-object-diff';

const logger = store => next => action => {
  console.group(action.type);
  const oldState = store.getState();
  console.log('%cð¾ï¸ Current state', "color:#40db42;font-weight:bold", oldState);
  console.info('%cð Dispatch', "color:#ff9100;font-weight:bold", action);
  let result = next(action);
  const newState = store.getState();
  console.log('%câ New state', "color:#00b5fc;font-weight:bold", newState);
  console.info('%cð¾ï¸==âï¸ State diff', "color:#ff00e1;font-weight:bold", diff(oldState, newState));
  console.groupEnd();
  return result;
};
export default logger;
