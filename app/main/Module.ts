
import { Reducer, combineReducers } from 'redux';
import {IAppState} from './Model';
import {counterListReducer} from '../counterlist';
import {routerReducer} from 'react-router-redux';

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  counterList: counterListReducer,
  routing: routerReducer,
});
