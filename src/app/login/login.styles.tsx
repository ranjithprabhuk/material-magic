import { Theme } from '@material-ui/core';
import { ThemeConfig, defineColours } from '../../theme';

export const loginStyles = (theme: Theme): any => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  login: {
    width: '100%',
    maxWidth: '400px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  panelHeader: {
    background: defineColours(ThemeConfig.warningColor, true),
    color: '#fff',
  },
});
