import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { lightGreen, deepPurple } from '@material-ui/core/colors';

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
        // Name of the component ⚛️ / style shee
        MuiButton: {
          // Name of the rule
          textPrimary: {
            // Some CSS
            background: `linear-gradient(45deg, ${deepPurple[400]} 30%, ${deepPurple['600']} 90%)`,
            borderRadius: 3,
            border: 0,
            color: 'white',

            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          },
          textSecondary: {
            background: `linear-gradient(45deg, ${lightGreen[400]} 30%, ${lightGreen['600']} 90%)`,
            borderRadius: 3,
            border: 0,
            color: 'white',
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          },
          containedPrimary: {
            background: `linear-gradient(45deg, ${lightGreen[400]} 30%, ${lightGreen['600']} 90%)`,
            borderRadius: 3,
            border: 0,
            color: 'white',
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          },
        },
      },
});
