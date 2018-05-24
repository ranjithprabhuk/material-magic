import {applyMiddleware, compose, createStore, Store} from 'redux';
import {IAppState, rootReducer} from '../Reducer';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';

export function configureStore(history: History): Store<IAppState> {

  const routingMiddleware = routerMiddleware(history);
  const enhancers = compose(applyMiddleware(routingMiddleware));

  return createStore<IAppState>(rootReducer, enhancers);
}

