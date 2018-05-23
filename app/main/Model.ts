import {ICounterList} from '../counterlist';
import {RouterState} from 'react-router-redux';

export interface IAppState {
    counterList: ICounterList;
    routing: RouterState;
}
