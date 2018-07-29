import { RouterState } from 'react-router-redux';
import { ISideBarReduxState } from './app/dashboard/SideBar/ISideBar';

export interface IAppState {
  routing: RouterState;
  sideBar: ISideBarReduxState;
}
