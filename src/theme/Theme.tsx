import { createMuiTheme, Theme, Color } from '@material-ui/core';
import { ThemeConfig } from './ThemeConfig';

export const flexDirection = ThemeConfig.direction === 'ltr' ? 'row' : 'row-reverse';

export const defineColours = (color: Color, disableGradient?: boolean): string =>
  ThemeConfig.isGradientEnabled && !disableGradient
    ? `linear-gradient(45deg, ${color[400]} 30%, ${color['600']} 90%)`
    : color[400];

const primaryBG = defineColours && defineColours(ThemeConfig.primaryColor);
const secondaryBG = defineColours && defineColours(ThemeConfig.secondaryColor);

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
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: primaryBG,
      },
      containedSecondary: {
        background: secondaryBG,
      },
    },
  },
});
