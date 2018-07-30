import { RouterState } from 'react-router-redux';
import { ISideBarReduxState } from './app/dashboard/SideBar/ISideBar';
import { IThemeConfig } from './theme/IThemeConfig';

export interface IAppState {
  routing: RouterState;
  sideBar: ISideBarReduxState;
  theme: IThemeConfig;
}
