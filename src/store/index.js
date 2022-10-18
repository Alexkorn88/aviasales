// eslint-disable-next-line import/order
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line import/named, import/no-unresolved
// import { composeWithDevTools } from '@redux-devtools/extension';
import reduxThunk from 'redux-thunk';

import { checkReduser } from './checkReduser';
import { filterReduser } from './filterReduser';
import { searchIdReduser } from './idReduser';
import { ticketsReduser } from './ticketsReduser';

const rootReduser = combineReducers({
  check: checkReduser,
  filter: filterReduser,
  searchIds: searchIdReduser,
  tickets: ticketsReduser,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// eslint-disable-next-line no-unused-vars
const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReduser, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));
// store.subscribe(() => console.log(store.getState()));
