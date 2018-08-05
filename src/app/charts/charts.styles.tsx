import { Theme } from '@material-ui/core';

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
    backgroundColor: theme.palette.grey[200],
  },
});
