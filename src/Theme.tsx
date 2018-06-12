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
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',

            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          },
        },
      },
});
