import { blue, pink, orange, red } from '@material-ui/core/colors';
import { IThemeConfig } from './IThemeConfig';

export const ThemeConfig: IThemeConfig = {
  isGradientEnabled: true,
  primaryColor: blue,
  secondaryColor: pink,
  warningColor: orange,
  dangerColor: red,
  direction: 'ltr',
  menuBarWidth: 240,
  sideBarWidth: 270,
};
