import { createMuiTheme, Theme, Color } from '@material-ui/core';
import { lightGreen, deepPurple } from '@material-ui/core/colors';

const isGradientEnabled: boolean = true;
const defineColours = (color: Color): string =>
  isGradientEnabled ? `linear-gradient(45deg, ${color[400]} 30%, ${color['600']} 90%)` : color[400];

const primaryColor: Color = deepPurple;
const secondaryColor: Color = lightGreen;

const primaryBG = defineColours(primaryColor);
const secondaryBG = defineColours(secondaryColor);

export const theme: Theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: lightGreen,
        error: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    direction: 'ltr',
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
