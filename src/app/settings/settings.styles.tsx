import { Theme } from '@material-ui/core';

export const settingsStyles = (theme: Theme): any => ({
  root: {
    width: '100%',
  },
  panel: {
    display: 'flex',
    marginBottom: 10,
  },
  iconGrid: {
    textAlign: 'center',
  },
  activeTheme: {
    backgroundColor: theme.palette.grey[400],
  },
});
