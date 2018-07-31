import { RouterState } from 'react-router-redux';
import { IThemeConfig } from './theme/IThemeConfig';
import { ISideBarReduxState } from './app/dashboard/SideBar';
import { IMenuBarReduxState } from './app/dashboard/MenuBar';

export interface IAppState {
  routing: RouterState;
  sideBar: ISideBarReduxState;
  menuBar: IMenuBarReduxState;
  theme: IThemeConfig;
}
