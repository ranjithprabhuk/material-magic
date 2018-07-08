import { Theme } from '@material-ui/core';
import { ThemeConfig, defineColours } from '../../theme';

export const homeStyles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
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
