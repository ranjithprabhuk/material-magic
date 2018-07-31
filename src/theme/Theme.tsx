import { createMuiTheme, Theme, Color } from '@material-ui/core';
import { ThemeConfig } from './ThemeConfig';
import { IThemeConfig } from './IThemeConfig';

export const flexDirection = ThemeConfig.direction === 'ltr' ? 'row' : 'row-reverse';

export const defineColours = (color: Color, disableGradient?: boolean): string =>
  ThemeConfig.isGradientEnabled && !disableGradient
    ? `linear-gradient(45deg, ${color[400]} 30%, ${color['600']} 90%)`
    : color[400];

export const getTheme = (themeConfig: IThemeConfig): Theme => {
  return createMuiTheme({
    palette: {
      primary: themeConfig.primaryColor,
      secondary: themeConfig.secondaryColor,
      error: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    direction: themeConfig.direction,
  });
};
