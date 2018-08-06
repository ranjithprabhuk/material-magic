import { Color } from '@material-ui/core';

export interface IThemeConfig {
  isGradientEnabled: boolean;
  primaryColor: Color;
  secondaryColor: Color;
  warningColor: Color;
  dangerColor: Color;
  direction: 'ltr' | 'rtl';
  menuBarWidth: number;
  sideBarWidth: number;
}

export interface IColors {
  name: string;
  value: Color;
}
