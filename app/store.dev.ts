import {applyMiddleware, compose, createStore, Store} from 'redux';
import {IAppState, rootReducer} from './main';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare const require: (name: String) => any;
declare const module: IHotModule;

export function configureStore(history: History): Store<IAppState> {

  const routingMiddleware = routerMiddleware(history);
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(
    applyMiddleware(routingMiddleware),
  );

  const result = createStore<IAppState>(rootReducer, enhancers);

  if (module.hot) {
    module.hot.accept('./main/Module', () => {
      const nextRootReducer: any = require('./main/Module').rootReducer;
      result.replaceReducer(nextRootReducer);
    });
  }

  return result;
}
