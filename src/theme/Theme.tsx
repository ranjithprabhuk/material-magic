import { createMuiTheme, Theme, Color } from '@material-ui/core';
import { ThemeConfig } from './ThemeConfig';
import { IThemeConfig } from './IThemeConfig';
import { store } from '..';


const getStoreInfo = () => {
  store.subscribe(() => {
    const updatedTheme: IThemeConfig = store.getState().theme;
    if (updatedTheme) {
      ThemeConfig.primaryColor = updatedTheme.primaryColor;
      theme.palette.primary.main = updatedTheme.primaryColor[500];
    }
  });
};

setTimeout(() => getStoreInfo(), 2000);

export const flexDirection = ThemeConfig.direction === 'ltr' ? 'row' : 'row-reverse';

export const defineColours = (color: Color, disableGradient?: boolean): string =>
  ThemeConfig.isGradientEnabled && !disableGradient
    ? `linear-gradient(45deg, ${color[400]} 30%, ${color['600']} 90%)`
    : color[400];

export const theme: Theme = createMuiTheme({
  palette: {
    primary: ThemeConfig.primaryColor,
    secondary: ThemeConfig.secondaryColor,
    error: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  direction: ThemeConfig.direction,
});

export const updatePageContext = (uiTheme: Theme) => {
  const globalValue: any = {...global};
  const pageContext = {
    ...globalValue.pageContext,
    theme: getTheme(uiTheme),
  };
  (global as any).pageContext = pageContext;

  return pageContext;
};

const getTheme = (uiTheme: Theme) => {
  const updatedTheme = createMuiTheme({
    palette: {
      primary: ThemeConfig.primaryColor,
      secondary: ThemeConfig.secondaryColor,
      error: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    direction: ThemeConfig.direction,
  });

  return updatedTheme;
};
