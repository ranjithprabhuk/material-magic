import { createMuiTheme, Theme, Color } from '@material-ui/core';
import { ThemeConfig } from './ThemeConfig';
import {store} from '../index';
import { orange, red, green, brown } from '@material-ui/core/colors';

let state: number = 0;
const getStoreInfo = () => {
    store.subscribe(() => {
      state++;
      if (state % 2 === 0) {
        theme.palette.primary.main = orange[500];
        theme.palette.secondary.main = red[500];
        ThemeConfig.primaryColor = orange;
        ThemeConfig.secondaryColor = red;
        ThemeConfig.direction = 'ltr';
        theme.direction = 'ltr';
        document.body.setAttribute('dir', 'ltr');
      } else {
        theme.palette.primary.main = green[500];
        theme.palette.secondary.main = brown[500];
        ThemeConfig.primaryColor = green;
        ThemeConfig.secondaryColor = brown;
        ThemeConfig.direction = 'rtl';
        theme.direction = 'rtl';
        document.body.setAttribute('dir', 'rtl');
      }
    });
};

// setTimeout(() => getStoreInfo(), 2000);

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
