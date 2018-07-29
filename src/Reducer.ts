import { Reducer, combineReducers } from 'redux';
import { IAppState } from './Model';
import { routerReducer } from 'react-router-redux';
import { sideBarReducer } from './app/dashboard/SideBar';

const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  sideBar: sideBarReducer,
});

export { IAppState, rootReducer };
